/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";

export type BlogItem = {
  id: string;
  title: string;
  description?: string;
  url: string;
  type?: string;
  date?: string | null;
  [key: string]: any;
};

type UseSearchBlogOptions = {
  endpoint?: string; // API route (default: /api/search)
  initialQuery?: string;
  debounceMs?: number;
  pageSize?: number; // how many items to keep/show
  initialFetch?: boolean; // fetch on mount
  transform?: (raw: any) => BlogItem[]; // optional transform function for response shape
};

export function useSearchBlog(opts?: UseSearchBlogOptions) {
  const {
    endpoint = "/api/search",
    initialQuery = "",
    debounceMs = 180,
    pageSize = 20,
    initialFetch = true,
    transform,
  } = opts ?? {};

  const [query, setQuery] = useState<string>(initialQuery);
  const [results, setResults] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const debounceRef = useRef<number | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    // Initial fetch if requested (will fetch top page list since initialQuery may be empty)
    if (initialFetch) {
      triggerFetch(initialQuery);
    }
    return () => {
      mountedRef.current = false;
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Call this to refetch current query immediately
  function refetch() {
    triggerFetch(query, { immediate: true });
  }

  function clear() {
    setQuery("");
    triggerFetch("", { immediate: true });
  }

  // internal helper
  function triggerFetch(q: string, opts: { immediate?: boolean } = {}) {
    const doFetch = () => fetchResults(q);

    if (opts.immediate) {
      // cancel pending debounce and run immediately
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      doFetch();
      return;
    }

    // debounce user typing
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(doFetch, debounceMs);
  }

  // effect: when query changes, schedule fetch
  useEffect(() => {
    triggerFetch(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function fetchResults(q: string) {
    // cancel previous request
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const ac = new AbortController();
    abortRef.current = ac;

    setLoading(true);
    setError(null);

    try {
      // If q is empty, call endpoint without query param (server should return top N)
      const url =
        q && q.trim() !== ""
          ? `${endpoint}?query=${encodeURIComponent(q)}`
          : endpoint;
      const res = await fetch(url, { signal: ac.signal });

      if (!res.ok) {
        const text = await res.text().catch(() => "Unknown error");
        throw new Error(text || `${res.status} ${res.statusText}`);
      }

      const json = await res.json();

      // Fumadocs/orama usually returns { hits: [...] }, but some setups return array directly.
      let rawHits: any[] = [];
      if (Array.isArray(json)) rawHits = json;
      else if (Array.isArray(json.hits)) rawHits = json.hits;
      else if (Array.isArray(json.items)) rawHits = json.items;
      else {
        // fallback: try to find a first array prop
        const firstArray = Object.values(json).find((v) => Array.isArray(v));
        rawHits = Array.isArray(firstArray) ? firstArray : [];
      }

      // allow user transform to normalize shape
      const normalized: BlogItem[] = transform
        ? transform(rawHits)
        : (rawHits as BlogItem[]);

      // only pages, and slice to pageSize for safety
      const pages = normalized
        .filter((r) => r.type === "page" || r.type == null)
        .slice(0, pageSize);

      if (!mountedRef.current) return;
      setResults(pages);
      // If server provided a total, set it; otherwise derive
      if (typeof json.total === "number") setTotal(json.total);
      else setTotal(pages.length);
    } catch (err: any) {
      if (err?.name === "AbortError") {
        // request aborted; ignore
        return;
      }
      console.error("useSearchBlog error", err);
      if (!mountedRef.current) return;
      setError(String(err?.message ?? err));
      setResults([]);
      setTotal(null);
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    total,
    refetch,
    clear,
  } as const;
}

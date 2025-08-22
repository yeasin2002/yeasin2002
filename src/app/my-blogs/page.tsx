"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import type React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import { type BlogItemsType, BlogPostCard } from "./blog-card";
import { SearchBar } from "./search-bar";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<BlogItemsType[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    async function fetchResults(q: string) {
      setLoading(true);
      try {
        const url = q
          ? `/api/search?query=${encodeURIComponent(q)}`
          : `/api/search`; // no query param -> server returns top 20
        const res = await fetch(url);
        if (!res.ok) {
          console.error("Search error", await res.text());
          setResults([]);
          return;
        }
        const json = await res.json();
        // Fumadocs/orama style returns { hits: [...] }, but some setups return the array directly
        const hits = Array.isArray(json.hits)
          ? json.hits
          : Array.isArray(json)
            ? json
            : [];
        // Keep pages only and cap at 20 (server already slices but safe to do client-side)
        const final = hits.filter((h: any) => h.type === "page").slice(0, 20);
        setResults(final);
      } catch (err) {
        console.error("Fetch failed", err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }

    // Debounce user typing
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      fetchResults(searchQuery.trim());
    }, 180);

    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [searchQuery]);

  // const filteredPosts = demoBlogPosts.filter(
  //   (post) =>
  //     post._title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     post.author._title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <main className="container mx-auto px-5">
      <section className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            All Blogs
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover all our latest articles, insights, and stories
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        {!loading && (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        )}

        {loading || (
          <div>
            {/* Results Count */}
            {searchQuery && (
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Found {results.length} post
                  {results.length !== 1 ? "s" : ""}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {results.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* No Results */}
            {results.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No blog posts found matching &quot;{searchQuery}&quot;. Try a
                  different search term.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

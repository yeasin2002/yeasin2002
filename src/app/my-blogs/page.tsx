"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Skeleton } from "@/components/ui/skeleton";
import { BlogPostCard } from "./blog-card";
import { SearchBar } from "./search-bar";
import { useSearchBlog } from "./useSearchBlog";

export default function BlogsPage() {
  const { query, setQuery, results, loading } = useSearchBlog({
    endpoint: "/api/search",
    debounceMs: 200,
    pageSize: 20,
    initialQuery: "",
    initialFetch: true,
    // optional transform if your API returns a different shape:
    // transform: (raw) => raw.map(r => ({ id: r.url, title: r.title, ...r }))
  });

  console.log(results);
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
          <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
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
            {query && (
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Found {results.length} post
                  {results.length !== 1 ? "s" : ""}
                  {query && ` for "${query}"`}
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
            {results.length === 0 && query && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No blog posts found matching &quot;{query}&quot;. Try a
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

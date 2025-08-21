"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { type BlogItemsType, BlogPostCard } from "./blog-card";
import { SearchBar } from "./search-bar";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<BlogItemsType[]>([]);

  useEffect(() => {
    async function onSearch(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const res = await fetch(
        `/api/search?query=${encodeURIComponent(searchQuery)}`
      );
      const data = (await res.json()) as BlogItemsType[];
      const finalData = data.map((item) => item.type !== "page" && item);

      setResults(finalData);
    }

    if (searchQuery) {
      onSearch(
        new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
      );
    }
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
      </section>
    </main>
  );
}

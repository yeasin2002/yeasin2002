"use client";

import type React from "react";

import { demoBlogPosts } from "@/data/demo-blog.data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Search Bar Component
function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// Blog Post Card Component
function BlogPostCard({ post }: { post: (typeof demoBlogPosts)[0] }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const imgUrl = `https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <article className="group cursor-pointer">
      <Link href={`/posts/${post._slug}`} className="block">
        <div className="mb-5">
          <Image
            src={imgUrl || "/placeholder.svg"}
            alt={post.coverImage.alt || post._title}
            width={800}
            height={400}
            className="w-full h-48 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
            {post._title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Image
                src={post.author.avatar.url || "/placeholder.svg"}
                alt={post.author.avatar.alt || post.author._title}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{post.author._title}</span>
            </div>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}

// Main Blogs Page Component
export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = demoBlogPosts.filter(
    (post) =>
      post._title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author._title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Found {filteredPosts.length} post
              {filteredPosts.length !== 1 ? "s" : ""}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && searchQuery && (
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

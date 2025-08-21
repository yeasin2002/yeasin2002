import Image from "next/image";
import Link from "next/link";

export type BlogItemsType = {
  id: string;
  type: string;
  content: string;
  url: string;
};

export function BlogPostCard({ post }: { post: BlogItemsType }) {
  //   const formatDate = (dateString: string) => {
  //     return new Date(dateString).toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     });
  //   };
  const imgUrl = `https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <article className="group cursor-pointer">
      <Link href={post.url} className="block">
        <div className="mb-5">
          <Image
            src={imgUrl || "/placeholder.svg"}
            alt={"image"}
            width={800}
            height={400}
            className="w-full h-48 md:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
            {post.type}
          </h3>
          <p className="text-gray-600 leading-relaxed tracking-wide">
            {post.content}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {/* <div className="flex items-center space-x-2">
              <Image
                src={post.author.avatar.url || "/placeholder.svg"}
                alt={post.author.avatar.alt || post.author._title}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{post.author._title}</span>
            </div> */}
            {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}
          </div>
        </div>
      </Link>
    </article>
  );
}

import { contactList } from "@/data/contactInfo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[rgba(71,85,105,.2)] text-[hsla(0,0%,100%,.85)]  py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm">
          <p>© {new Date().getFullYear()} yeasin2002.</p>

          <div className="flex gap-x-2">
            <p>Blogs: </p>
            <Link
              href="https://stack-unboxed.vercel.app/"
              className="hover:text-white transition-colors underline"
            >
              Stack Unboxed
            </Link>

            <Link
              href="https://dev-patterns.vercel.app/"
              className="hover:text-white transition-colors underline"
            >
              Dev-patterns
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {contactList.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <item.components className="size-6" />
                <span className="sr-only">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

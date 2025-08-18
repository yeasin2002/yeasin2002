import avatarImg from "@/assets/images/yeasin2002-avatar.png";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/yeasin2002?ref=yeasin2002.dev",
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image
          src={avatarImg}
          alt="Md Kawsar Islam Yeasin"
          className="size-8 rounded-xl"
        />
        <span>Yeasin2002</span>
      </div>
    ),
  },
  links: [{ text: "Blogs", url: "/my-blogs" }],
};

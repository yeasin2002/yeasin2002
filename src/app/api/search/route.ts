/* eslint-disable @typescript-eslint/no-explicit-any */

// app/api/search/route.ts
import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

const handler = createFromSource(source, { language: "english" });

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("query")?.trim() ?? "";

  // 1) No query -> return top 20 pages from the source
  if (!q) {
    // Use whatever sorting you prefer (here newest first if `data.date` exists)
    const pages = source
      .getPages()
      .filter((p: any) => p.url) // basic filter; refine as needed
      .sort((a: any, b: any) => {
        const ad = a.data?.date ? new Date(a.data.date).getTime() : 0;
        const bd = b.data?.date ? new Date(b.data.date).getTime() : 0;
        return bd - ad;
      })
      .slice(0, 20)
      .map((p: any) => ({
        id: p.url,
        title: p.data?.title ?? p.title ?? "",
        description: p.data?.description ?? "",
        url: p.url,
        type: "page",
        // include any other fields your frontend expects
        date: p.data?.date ?? null,
        structuredData: p.data?.structuredData ?? null,
      }));

    return new Response(JSON.stringify({ hits: pages }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2) Query present -> run the createFromSource search and trim to 20 results
  const originalResp = await handler.GET(request);
  const data = await originalResp.json();

  if (Array.isArray(data.hits)) {
    data.hits = data.hits.slice(0, 20);
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

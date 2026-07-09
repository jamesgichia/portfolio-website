import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jamesgichia.vercel.app/sitemap.xml",
    host: "https://jamesgichia.vercel.app",
  };
}

import { siteConfig } from "@/config/site";

export default function robots() {
  const baseUrl = siteConfig.url;
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/services", "/works"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

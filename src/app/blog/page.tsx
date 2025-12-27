import React from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogIndexUI } from "@/components/blog-index-ui";
import { Metadata } from "next"; // Import Metadata
import { RESUME_DATA } from "@/data/resume-data"; // Import resume data for base URL

export const dynamic = "force-static";

// Add generateMetadata function
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = RESUME_DATA.personalWebsiteUrl; // Get base URL
  return {
    title: "Blog | Abhay Kumar",
    description:
      "Read Articles and insights on cloud, devops & cloud-native technologies.",
    keywords: ["blog", "cloud", "devops", "cloud-native", "Abhay Kumar"],
    openGraph: {
      title: "Blog | Abhay Kumar",
      description: "Articles and insights on cloud, devops & cloud-native technologies.",
      url: `${siteUrl}/blog`,
      siteName: "Abhay Kumar's Blog",
      images: [
        {
          url: `${siteUrl}/og-image.png`, // Use a default OG image
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Abhay Kumar",
      description: "Articles and insights on cloud, devops & cloud-native technologies.",
      // creator: "@your_twitter_handle",
      images: [`${siteUrl}/og-image.png`],
    },
    alternates: {
      canonical: `${siteUrl}/blog`,
    },
  };
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  // Pass blog posts data to the client component
  return <BlogIndexUI posts={blogPosts} />;
}

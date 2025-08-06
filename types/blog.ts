// /types/blog.ts

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: any; // If using RichText, you can create a RichText type
  image?: {
    filename: string;
    alt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

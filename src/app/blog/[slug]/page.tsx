import { getBlogBySlug, getAllBlogs } from '../../../../lib/payload';
import { notFound } from 'next/navigation';
import RichTextRenderer from '@/components/RichTextRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '../../../../types/blog';
import { Metadata } from 'next'; // Import Metadata for generateMetadata

// FIX APPLIED: Corrected PageProps type definition
type PageProps = {
  params: Promise<{ // params is a Promise that resolves to an object with slug
    slug: string;
  }>;
};

// ✅ Static params for SSG
export async function generateStaticParams() {
  const blogs: Blog[] = await getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// FIX APPLIED: Used the corrected PageProps type for generateMetadata params
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params; // Await the params object
  const blog = await getBlogBySlug(resolvedParams.slug); // Use the awaited object's slug

  if (!blog) {
    return {
      title: 'Blog Post Not Found', // Fallback title
    };
  }

  return {
    title: blog.title || 'Untitled Blog Post',
    // You can add more metadata here, e.g., description, openGraph, etc.
    // description: blog.excerpt,
  };
}

// ✅ Blog detail page
// FIX APPLIED: BlogPage is using the corrected PageProps type
export default async function BlogPage({ params }: PageProps) {
  // FIX APPLIED: params is awaited before destructuring
  const { slug } = await params; // Await the params object before destructuring 'slug'

  const blog: Blog | null = await getBlogBySlug(slug);

  if (!blog) return notFound();

  return (
    <main className="main blog-page-main">

      {/* ✅ Banner */}
      <section
        className="banner-sec bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/blog-banner.png')` }}
      >
        <div className="banner-content text-white text-center py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
        </div>
      </section>

      {/* ✅ Breadcrumbs */}
      <section className="breadcrumb-sec py-4 bg-gray-100">
        <div className="container mx-auto px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex text-sm text-gray-700">
              <li className="breadcrumb-item mr-2">
                <Link href="/" className="hover:underline text-blue-600">Home</Link>
              </li>
              <li className="breadcrumb-item mr-2">
                <Link href="/blog" className="hover:underline text-blue-600">Blog</Link>
              </li>
              <li className="breadcrumb-item text-gray-900">{blog.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ✅ Main Blog Content */}
      <section className="mcq-course-sec py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 w-full">
              <div className="blog-post">

                {/* ✅ Blog Image */}
                {blog.image?.filename && (
                  <div className="flex justify-center mb-6">
                    <Image
                      src={`https://firstaid-admin.onrender.com/api/media/file/${blog.image.filename}`}
                      alt={blog.image.alt || blog.title}
                      width={600}
                      height={400}
                      className="rounded-md shadow-lg"
                    />
                  </div>
                )}

                {/* ✅ Posted Date */}
                <span className="date block mb-6 text-gray-500">
                  Posted Date:{' '}
                  {new Date(blog.createdAt).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>

                {/* ✅ Rich Text Content */}
                <div className="prose max-w-none">
                  <h2 className="mt-4">{blog.title}</h2>
                  <RichTextRenderer data={blog.content} />
                </div>
              </div>
            </div>

            {/* ✅ Optional Sidebar */}
            {/* <div className="lg:w-1/3 w-full">
              <YourSidebarComponent />
            </div> */}

          </div>
        </div>
      </section>

    </main>
  );
}
import { getPageBySlug, getAllPages } from '../../../lib/payload';
import { notFound } from 'next/navigation';
import RichTextRenderer from '@/components/RichTextRenderer';
import { Metadata } from 'next';

// FIX APPLIED: Changed 'content?: any;' to 'content?: Record<string, unknown>[];'
// This provides a more specific type than 'any' for rich text content, satisfying ESLint.
interface Page {
  slug: string;
  title?: string;
  content?: Record<string, unknown>[]; // Represents an array of content blocks/nodes
}

// Define the PageProps type correctly to reflect that params is a Promise
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const pages: Page[] = await getAllPages();

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

// FIX APPLIED: params is awaited before accessing its properties
// And the type annotation for 'params' is now correct
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params; // Await the params object to ensure it's fully resolved
  const page = await getPageBySlug(resolvedParams.slug); // Use the awaited object's slug

  if (!page) {
    return {
      title: 'Page Not Found', // Provide a fallback title for 404
    };
  }

  return {
    title: page.title || 'Untitled Page',
  };
}

export default async function StaticPage({ params }: PageProps) {
  // FIX APPLIED: params is awaited before destructuring
  const { slug } = await params; // Await the params object before destructuring 'slug'

  const page = await getPageBySlug(slug);

  if (!page) {
    return notFound();
  }

  return (
    <main className="main blog-page-main">
      <section className="new-course-sec">
        <div className="container">
          <h2>{page.title}</h2>
          <RichTextRenderer data={page.content} />
        </div>
      </section>
    </main>
  );
}


// import { getPageBySlug, getAllPages } from '../../../lib/payload';
// import { notFound } from 'next/navigation';
// import RichTextRenderer from '@/components/RichTextRenderer';


// export async function generateStaticParams() {
//   const pages = await getAllPages();

//   return pages.map((page: any) => ({
//     slug: page.slug,
//   }));
// }

// export default async function StaticPage(props: {
//   params: Promise<{ slug: string }>;
// }) {

//   const { slug } = await props.params;

//   const page = await getPageBySlug(slug);

//   if (!page) return notFound();

//   return (
//     <main className="main blog-page-main">
//       <section className="new-course-sec">
//         <div className="container">
//           <h2>{page.title}</h2>
//           <RichTextRenderer data={page.content} />
//         </div>
//       </section>
//     </main>
//   );
// }

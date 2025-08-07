import { getAllBlogs } from '../../../lib/payload';
import ClientBlogList from '../blog/ClientBlogList';
import { Suspense } from 'react';

// Loading component
function BlogListSkeleton() {
  return (
    <section className="related-post-sec py-5">
      <div className="container">
        <div className="row">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <div className="post-card h-100 shadow-sm border rounded">
                <div 
                  className="bg-light rounded-top" 
                  style={{ height: '200px' }}
                >
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="spinner-border text-muted" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <div className="post-content p-3">
                  <div className="bg-light rounded mb-2" style={{ height: '20px', width: '80%' }}></div>
                  <div className="bg-light rounded mb-2" style={{ height: '16px', width: '100%' }}></div>
                  <div className="bg-light rounded mb-3" style={{ height: '16px', width: '60%' }}></div>
                  <div className="bg-light rounded" style={{ height: '18px', width: '100px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Error component
function BlogListError({ error, retry }: { error: string, retry?: () => void }) {
  return (
    <section className="related-post-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-warning text-center">
              <i className="bi bi-exclamation-triangle-fill mb-2 fs-2"></i>
              <h4>Unable to Load Blogs</h4>
              <p className="mb-3">{error}</p>
              {retry && (
                <button onClick={retry} className="btn btn-primary">
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main component
async function BlogListContent() {
  try {
    const blogs = await getAllBlogs();

    console.log("✅ Blogs loaded:", blogs?.length || 0);

    // Check if blogs is an array and has items
    if (!Array.isArray(blogs)) {
      console.error("❌ Blogs data is not an array:", blogs);
      return <BlogListError error="Invalid data format received from server" />;
    }

    return <ClientBlogList blogs={blogs} />;

  } catch (error) {
    console.error("❌ Error in BlogListContent:", error);
    return <BlogListError error="Failed to connect to the server. Please try again later." />;
  }
}

// Main page component with metadata
export const metadata = {
  title: 'Blog Posts | Your Site Name',
  description: 'Read our latest blog posts and articles',
};

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 30; // Revalidate every 30 seconds

export default function BlogList() {
  return (
    <Suspense fallback={<BlogListSkeleton />}>
      <BlogListContent />
    </Suspense>
  );
}









// import { getAllBlogs } from '../../../lib/payload';
// import ClientBlogList from '../blog/ClientBlogList';

// export default async function BlogList() {
//   const blogs = await getAllBlogs();

//   console.log("blog error",blogs);

//   return <ClientBlogList blogs={blogs} />;
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image?: {
    filename: string;
    alt?: string;
  };
  updatedAt?: string;
};

interface Props {
  blogs: Blog[];
}

export default function ClientBlogList({ blogs }: Props) {
  const [visibleCount, setVisibleCount] = useState(12);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  const isMore = blogs.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      // Force refresh the page data
      router.refresh();
      
      // Optional: Add a small delay for better UX
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    } catch (error) {
      console.error('Error refreshing:', error);
      setRefreshing(false);
    }
  };

  // Auto-refresh every 30 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('🔄 Auto-refreshing blog data...');
      router.refresh();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [router]);

  // Handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="related-post-sec py-5">
      <div className="container">
        {/* Header with refresh button */}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Latest Blogs</h2>
            <button 
              onClick={handleRefresh} 
              className="btn btn-outline-primary btn-sm"
              disabled={refreshing}
            >
              {refreshing ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Refreshing...
                </>
              ) : (
                <>
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Refresh
                </>
              )}
            </button>
          </div>
        </div>

        {/* Blog posts */}
        <div className="row">
          {blogs.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No blogs found. Try refreshing the page.</p>
            </div>
          ) : (
            blogs.slice(0, visibleCount).map((blog) => (
              <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
                <div className="post-card h-100 shadow-sm border rounded">
                  {blog.image?.filename && (
                    <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                      <Image
                        src={`https://firstaid-admin.onrender.com/api/media/file/${blog.image.filename}`}
                        alt={blog.image.alt || blog.title}
                        fill
                        className="object-fit-cover rounded-top"
                        onError={handleImageError}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="post-content p-3">
                    <h5 className="card-title line-clamp-2">{blog.title}</h5>
                    <p className="card-text text-muted line-clamp-3">{blog.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link 
                        href={`/blog/${blog.slug}`} 
                        className="text-decoration-none text-primary fw-medium"
                      >
                        Read More <i className="bi bi-caret-right-fill"></i>
                      </Link>
                      {blog.updatedAt && (
                        <small className="text-muted">
                          {new Date(blog.updatedAt).toLocaleDateString()}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load more button */}
        {isMore && (
          <div className="text-center mt-4">
            <button onClick={handleLoadMore} className="primary-btn btn btn-primary px-4">
              Load More ({blogs.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* CSS for line clamping */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .post-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        
        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </section>
  );
}




// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image'

// type Blog = {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   image?: {
//     filename: string;
//     alt?: string;
//   };
// };

// interface Props {
//   blogs: Blog[];
// }


// export default function ClientBlogList({ blogs }: Props) {
//   const [visibleCount, setVisibleCount] = useState(12);
//   const isMore = blogs.length > visibleCount;

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + 12);
//   };

//   return (
//     <section className="related-post-sec py-5">
//       <div className="container">
//         <div className="row">
//           {blogs.slice(0, visibleCount).map((blog) => (
//             <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
//               <div className="post-card h-100">
//                 {blog.image?.filename && (
//                     <Image
//                       src={`https://firstaid-admin.onrender.com/api/media/file/${blog.image.filename}`}
//                       alt={blog.image.alt || blog.title}
//                       width={600}
//                       height={400}
//                       className="w-100 mb-3"
//                     />
//                   )}

//                 <div className="post-content">
//                   <h5>{blog.title}</h5>
//                   <p>{blog.excerpt}</p>
//                   <Link href={`/blog/${blog.slug}`} className="text-decoration-none text-primary">
//                     Read More <i className="bi bi-caret-right-fill"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {isMore && (
//           <div className="text-center mt-4">
//             <button onClick={handleLoadMore} className="primary-btn">
//               Load more
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

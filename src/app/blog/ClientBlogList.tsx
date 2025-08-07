'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image?: {
    filename: string;
    alt?: string;
  };
};

interface Props {
  blogs: Blog[];
}


export default function ClientBlogList({ blogs }: Props) {
  const [visibleCount, setVisibleCount] = useState(12);
  const isMore = blogs.length > visibleCount;
console.log("error",blogs);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <section className="related-post-sec py-5">
      <div className="container">
        <div className="row">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
              <div className="post-card h-100">
                {blog.image?.filename && (
                    <Image
                      src={`https://firstaid-admin.onrender.com/api/media/file/${blog.image.filename}`}
                      alt={blog.image.alt || blog.title}
                      width={600}
                      height={400}
                      className="w-100 mb-3"
                    />
                  )}

                <div className="post-content">
                  <h5>{blog.title}</h5>
                  <p>{blog.excerpt}</p>
                  <Link href={`/blog/${blog.slug}`} className="text-decoration-none text-primary">
                    Read More <i className="bi bi-caret-right-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMore && (
          <div className="text-center mt-4">
            <button onClick={handleLoadMore} className="primary-btn">
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

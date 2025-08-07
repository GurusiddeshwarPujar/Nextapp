const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

console.log('API Base URL:', API);

// Cache tags for revalidation
export const CACHE_TAGS = {
  PAGES: 'pages',
  BLOGS: 'blogs',
  ALL_DATA: 'all-data'
} as const;

export async function getPageBySlug(slug: string) {
  try {
    const url = `${API}/api/pages?where[slug][equals]=${slug}`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      next: { 
        revalidate: 30, // Revalidate every 30 seconds
        tags: [CACHE_TAGS.PAGES, `page-${slug}`]
      },
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch page: ${res.status} | URL: ${url}`);
      return null;
    }

    const data = await res.json();
    return data?.docs?.[0] || null;
  } catch (error) {
    console.error('❌ Error in getPageBySlug:', error);
    return null;
  }
}

export async function getAllPages() {
  try {
    const res = await fetch(`${API}/api/pages`, {
      headers: { 'Content-Type': 'application/json' },
      next: { 
        revalidate: 30, // Revalidate every 30 seconds
        tags: [CACHE_TAGS.PAGES]
      },
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch pages: ${res.status}`);
      return [];
    }

    const json = await res.json();
    return json?.docs || [];
  } catch (error) {
    console.error('❌ Error in getAllPages:', error);
    return [];
  }
}

export async function getAllBlogs() {
  try {
    const url = `${API}/api/blog?limit=100&sort=-publishedAt`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      next: { 
        revalidate: 30, // Revalidate every 30 seconds instead of 60
        tags: [CACHE_TAGS.BLOGS]
      },
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch blogs: ${res.status} | URL: ${url}`);
      return [];
    }

    const data = await res.json();
    console.log('✅ Blogs fetched:', data?.docs?.length || 0);
    return data?.docs || [];
  } catch (error) {
    console.error('❌ Error in getAllBlogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    const url = `${API}/api/blog?where[slug][equals]=${slug}`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      next: { 
        revalidate: 30, // Revalidate every 30 seconds instead of 60
        tags: [CACHE_TAGS.BLOGS, `blog-${slug}`]
      },
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch blog: ${res.status} | URL: ${url}`);
      return null;
    }

    const data = await res.json();
    return data?.docs?.[0] || null;
  } catch (error) {
    console.error('❌ Error in getBlogBySlug:', error);
    return null;
  }
}

// Utility function to manually revalidate cache
export async function revalidateData(tags?: string[]) {
  try {
    const tagsToRevalidate = tags || [CACHE_TAGS.ALL_DATA];
    
    // In a real app, you'd call revalidateTag from next/cache
    // This is for manual cache busting if needed
    const promises = tagsToRevalidate.map(async (tag) => {
      const { revalidateTag } = await import('next/cache');
      return revalidateTag(tag);
    });
    
    await Promise.all(promises);
    console.log('✅ Cache revalidated for tags:', tagsToRevalidate);
  } catch (error) {
    console.error('❌ Error revalidating cache:', error);
  }
}

//old code

// const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';

// console.log('API Base URL:', API);

// export async function getPageBySlug(slug: string) {
//   try {
//     const url = `${API}/api/pages?where[slug][equals]=${slug}`;
//     const res = await fetch(url, {
//       headers: { 'Content-Type': 'application/json' },
     
//     });

//     if (!res.ok) {
//       console.error(`❌ Failed to fetch page: ${res.status} | URL: ${url}`);
//       return null;
//     }

//     const data = await res.json();
//     return data?.docs?.[0] || null;
//   } catch (error) {
//     console.error('❌ Error in getPageBySlug:', error);
//     return null;
//   }
// }

// export async function getAllPages() {
//   const res = await fetch(`${API}/api/pages`, {
  
//   });
//   const json = await res.json();
//   return json?.docs || [];
// }

// export async function getAllBlogs() {
//   try {
//     const url = `${API}/api/blog?limit=100&sort=-publishedAt`;
//     const res = await fetch(url, {
//       headers: { 'Content-Type': 'application/json' },
//       next: { revalidate: 60 }, 
//     });

//     if (!res.ok) {
//       console.error(`❌ Failed to fetch blogs: ${res.status} | URL: ${url}`);
//       return [];
//     }

//     const data = await res.json();
//     console.log(data); 
//     return data?.docs || [];
//   } catch (error) {
//     console.error('❌ Error in getAllBlogs:', error);
//     return [];
//   }
// }

// export async function getBlogBySlug(slug: string) {
//   try {
//     const url = `${API}/api/blog?where[slug][equals]=${slug}`;
//     const res = await fetch(url, {
//       headers: { 'Content-Type': 'application/json' },
//       next: { revalidate: 60 }, 
//     });

//     if (!res.ok) {
//       console.error(`❌ Failed to fetch blog: ${res.status} | URL: ${url}`);
//       return null;
//     }

//     const data = await res.json();
//     return data?.docs?.[0] || null;
//   } catch (error) {
//     console.error('❌ Error in getBlogBySlug:', error);
//     return null;
//   }
// }

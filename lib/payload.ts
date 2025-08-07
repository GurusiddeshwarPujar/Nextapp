const API = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001';


console.log('API Base URL:', API);
export async function getPageBySlug(slug: string) {
  try {
    const url = `${API}/api/pages?where[slug][equals]=${slug}`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      // --- FIX APPLIED ---
      // Removed: cache: 'no-store', // This caused the Dynamic server usage error for SSG
      // Default caching or ISR (if needed) will be applied by Next.js
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
  // Minor consistency improvement: Use API constant
  const res = await fetch(`${API}/api/pages`);
  const json = await res.json();
  return json?.docs || []; // Adjust depending on PayloadCMS response
}

export async function getAllBlogs() {
  try {
    const url = `${API}/api/blog?limit=100&sort=-publishedAt`;
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      // --- FIX APPLIED ---
      // Removed: cache: 'no-store', // This caused the Dynamic server usage error for SSG
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch blogs: ${res.status} | URL: ${url}`);
      return [];
    }

    const data = await res.json();
    console.log(data);
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
      // --- FIX APPLIED ---
      // Removed: cache: 'no-store', // This caused the Dynamic server usage error for SSG
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
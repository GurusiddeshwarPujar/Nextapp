import { getAllBlogs } from '../../../lib/payload';
import ClientBlogList from '../blog/ClientBlogList';

export default async function BlogList() {
  const blogs = await getAllBlogs();

  return <ClientBlogList blogs={blogs} />;
}

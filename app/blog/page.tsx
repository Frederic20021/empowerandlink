import { getAllPosts } from '@/app/utils/blog';
import BlogClient from './BlogClient';

export default function BlogListingPage() {
  const posts = getAllPosts();

  return <BlogClient posts={posts} />;
}

import { getAllPosts } from './utils/blog';
import HomeClient from './HomeClient';

export default function Home() {
  const posts = getAllPosts();
  const blogPosts = posts.map(p => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    coverImage: p.coverImage,
  }));

  return <HomeClient blogPosts={blogPosts} />;
}

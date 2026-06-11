import { notFound } from 'next/navigation';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/app/utils/blog';
import { getAssetPath } from '@/app/utils/paths';
import PasswordGate from '@/app/components/blog/PasswordGate';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PasswordGate>
      <div className="blog-post-wrapper">
        <article className="blog-post-container">
          <div className="blog-post-header">
            <Link href="/blog/" className="blog-back-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              一覧に戻る
            </Link>
            <time className="blog-post-date">{post.date}</time>
            <h1 className="blog-post-title">{post.title}</h1>
          </div>

          {post.coverImage && (
            <div className="blog-post-cover">
              <img
                src={post.coverImage.startsWith('/') ? getAssetPath(post.coverImage) : post.coverImage}
                alt={post.title}
              />
            </div>
          )}

          <div className="blog-post-body markdown-content">
            <Markdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </Markdown>
          </div>
        </article>
      </div>
    </PasswordGate>
  );
}

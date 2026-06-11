'use client';

import Link from 'next/link';
import PostCard from './PostCard';

type PostSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
};

type BlogSectionProps = {
  posts: PostSummary[];
};

export default function BlogSection({ posts }: BlogSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section id="blog">
      <div className="container">
        <div className="sec-head">
          <div className="label label-w">Blog / News</div>
          <h2 className="sec-title-w">
            最新の
            <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg,#00c3e8,#00e0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              お知らせ
            </em>
          </h2>
          <p className="sec-sub-w">エンパワー＆リンクの最新情報やお知らせをお届けします。</p>
          <div className="acc-line" />
        </div>

        <div className="blog-grid">
          {posts.slice(0, 6).map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="blog-section-footer">
          <Link href="/blog/" className="btn btn-ghost">
            すべて見る
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

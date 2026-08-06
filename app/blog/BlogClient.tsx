'use client';

import PostCard from '@/app/components/blog/PostCard';
import { useLanguage } from '@/lib/i18n';
import { getAssetPath } from '@/app/utils/paths';

type PostSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
};

export default function BlogClient({ posts }: { posts: PostSummary[] }) {
  const { t } = useLanguage();

  return (
    <div className="blog-listing-wrapper">
      <section className="blog-listing-hero">
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center' }}>
            <div className="label label-w" style={{ justifyContent: 'center' }}>
              {t.blogPage.sectionLabel}
            </div>
            <h1
              className="sec-title-w"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}
            >
              {t.blogPage.title}
            </h1>
            <p className="sec-sub-w" style={{ margin: '0.5rem auto 0' }}>
              {t.blogPage.subtitle}
            </p>
            <div className="acc-line" style={{ margin: '1rem auto 0' }} />
          </div>
        </div>
      </section>

      <section className="blog-listing-content">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '1rem',
            }}
          >
            <a
              href={getAssetPath('/admin')}
              className="bg-gradient-to-br from-blue-500 to-[#0099e6] text-white py-1 px-2 rounded"
              style={{ fontSize: '.8rem' }}
            >
              {t.blogPage.adminLink}
            </a>
          </div>
          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>{t.blogPage.emptyState}</p>
            </div>
          ) : (
            <div className="blog-grid z-100">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

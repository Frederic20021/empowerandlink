import { getAllPosts } from '@/app/utils/blog';
import PostCard from '@/app/components/blog/PostCard';

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-listing-wrapper">
      <section className="blog-listing-hero">
        <div className="container">
          <div className="sec-head" style={{ textAlign: 'center' }}>
            <div className="label label-w" style={{ justifyContent: 'center' }}>Blog / News</div>
            <h1 className="sec-title-w" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              お知らせ
            </h1>
            <p className="sec-sub-w" style={{ margin: '0.5rem auto 0' }}>
              エンパワー＆リンクの最新情報をご紹介します。
            </p>
            <div className="acc-line" style={{ margin: '1rem auto 0' }} />
          </div>
        </div>
      </section>

      <section className="blog-listing-content">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>まだ記事がありません。</p>
            </div>
          ) : (
            <div className="blog-grid z-100">
              {posts.map(post => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

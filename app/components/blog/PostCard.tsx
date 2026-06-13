'use client';

import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
};

export default function PostCard({ slug, title, date, excerpt, coverImage }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}/`} className="blog-card">
      <div className="blog-card-image">
          <img
            src={coverImage.startsWith('/') ? getAssetPath(coverImage) : coverImage}
            alt={title}
            loading="lazy"
          />
      </div>
      <div className="blog-card-body">
        <time className="blog-card-date">{date}</time>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <span className="blog-card-link">
          続きを読む
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

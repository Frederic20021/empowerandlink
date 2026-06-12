'use client';

import { usePathname } from 'next/navigation';
import CosmosNav from './layout/CosmosNav';
import CosmosFooter from './layout/CosmosFooter';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <CosmosNav />
      {isHome ? (
        children
      ) : (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
          {children}
        </div>
      )}
      <CosmosFooter />
    </>
  );
}

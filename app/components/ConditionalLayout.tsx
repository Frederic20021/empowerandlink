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

  // The home page manages its own top-padding inside the hero section.
  // All other pages need padding-top to clear the fixed nav bar.
  const isHome = pathname === '/';

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

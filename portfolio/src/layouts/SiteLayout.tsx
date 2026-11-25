import type { ReactNode } from 'react';
import NavBar from '../features/navbar/NavBar';
import Footer from '../features/footer/Footer';

type SiteLayoutProps = { children: ReactNode; className: string };

export default function SiteLayout({ children, className }: SiteLayoutProps) {
  return (
    <>
      <NavBar />
      <main id="main" className={`${className} site-shell`} tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}

import type { ReactNode } from 'react';
import './PortfolioSection.css';

type PortfolioSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  controls?: ReactNode;
  className?: string;
};

export default function PortfolioSection({ id, title, children, controls, className }: PortfolioSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section className={className ? `portfolio-section ${className}` : 'portfolio-section'} id={id} aria-labelledby={titleId}>
      <header className="section-heading">
        <h2 id={titleId}>{title}</h2>
        {controls}
      </header>
      {children}
    </section>
  );
}

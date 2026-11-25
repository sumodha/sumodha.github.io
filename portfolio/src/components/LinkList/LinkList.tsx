import ResourceLink from '../ResourceLink/ResourceLink';
import './LinkList.css';

export type LinkListItem = Readonly<{
  label: string;
  href: string;
  accessibleLabel?: string;
  title?: string;
  target?: '_blank';
}>;

type LinkListProps = {
  items: readonly LinkListItem[];
  label: string;
  className?: string;
  variant?: 'default' | 'compact';
};

export default function LinkList({ items, label, className, variant = 'default' }: LinkListProps) {
  if (!items.length) return null;
  const classes = ['text-links', variant === 'compact' && 'text-links--compact', className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label={label}>
      {items.map(item => (
        <ResourceLink key={item.label} href={item.href} aria-label={item.accessibleLabel} title={item.title} target={item.target}>
          {item.label}
        </ResourceLink>
      ))}
    </nav>
  );
}

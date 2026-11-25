import type { LinkMap } from '../../types/portfolio';
import LinkList from '../LinkList/LinkList';

type CardLinksProps = {
  links?: LinkMap;
  label: string;
  className?: string;
  variant?: 'default' | 'compact';
  storyPath?: string;
};

export default function CardLinks({ links = {}, label, className, variant = 'default', storyPath }: CardLinksProps) {
  const resources = storyPath && !Object.hasOwn(links, 'full story')
    ? { ...links, 'full story': storyPath }
    : links;

  return (
    <LinkList items={Object.entries(resources).map(([label, href]) => ({ label, href }))} label={label} className={className} variant={variant} />
  );
}

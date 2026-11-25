import type { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import { getLinkKind } from '../../utils/links';

type ResourceLinkProps = ComponentPropsWithoutRef<'a'> & { href: string };

export default function ResourceLink({ href, target, rel, ...props }: ResourceLinkProps) {
  const kind = getLinkKind(href);
  const resolvedTarget = target ?? (kind === 'external' ? '_blank' : undefined);
  const resolvedRel = rel ?? (resolvedTarget === '_blank' ? 'noreferrer' : undefined);

  if (kind === 'route') return <Link to={href} target={resolvedTarget} rel={resolvedRel} {...props} />;
  return <a href={href} target={resolvedTarget} rel={resolvedRel} {...props} />;
}

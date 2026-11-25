import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs';
import { site } from '../../data/site';
import ResumeIcon from './ResumeIcon';
import LinkList from '../LinkList/LinkList';
import ResourceLink from '../ResourceLink/ResourceLink';
import './ContactLinks.css';

const contacts = [
  { key: 'email', label: 'Email Sumodha', Icon: BsSend },
  { key: 'github', label: 'Sumodha on GitHub', Icon: FaGithubAlt },
  { key: 'linkedin', label: 'Sumodha on LinkedIn', Icon: FaLinkedinIn },
  { key: 'resume', label: 'View Sumodha’s résumé', Icon: ResumeIcon },
] as const;

type ContactLinksProps = { variant?: 'icons' | 'text' };

export default function ContactLinks({ variant = 'icons' }: ContactLinksProps) {
  if (variant === 'text') {
    return <LinkList label="Connect with Sumodha" items={contacts.map(({ key, label }) => ({
      label: key,
      href: site.contacts[key],
      accessibleLabel: label,
      title: key,
      target: key === 'email' ? undefined : '_blank',
    }))} />;
  }

  return (
    <nav className="contact-icons" aria-label="Connect with Sumodha">
      {contacts.map(({ key, label, Icon }) => (
        <ResourceLink
          key={key}
          href={site.contacts[key]}
          aria-label={label}
          title={key}
          target={key === 'email' ? undefined : '_blank'}
        >
          <Icon aria-hidden="true" />
        </ResourceLink>
      ))}
    </nav>
  );
}

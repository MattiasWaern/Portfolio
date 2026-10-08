import { LINKS } from '../data/site';
import { ExternalLink } from './ExternalLink';

export function SocialLinks({ withEmail = false }: { withEmail?: boolean }) {
  return (
    <div className="soc">
      <ExternalLink href={LINKS.github}>GitHub</ExternalLink>
      <ExternalLink href={LINKS.linkedin}>LinkedIn</ExternalLink>
      {withEmail && <a href={LINKS.email}>Email</a>}
    </div>
  );
}

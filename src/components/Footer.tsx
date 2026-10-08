import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div><b style={{ color: 'var(--tx)' }}>Mattias Waern</b><br />Frontend Developer / Fullstack Developer</div>
        <SocialLinks withEmail />
        <div>© 2026 Mattias Waern</div>
      </div>
    </footer>
  );
}

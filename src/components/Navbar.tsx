import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/site';
import { useScrolled } from '../hooks/useScrolled';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  return (
    <header className={scrolled ? 'sc' : undefined}>
      <div className="wrap nav">
        <a className="logo" href="#top">Mattias Waern</a>
        <button className="burger" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
        <nav className={`links${open ? ' open' : ''}`} id="main-nav" aria-label="Main">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
          <a className="cta" href="#contact" onClick={close}>Let's talk →</a>
        </nav>
      </div>
    </header>
  );
}

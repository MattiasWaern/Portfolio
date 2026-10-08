import { EMAIL, LINKS } from '../data/site';
import { useCopy } from '../hooks/useCopy';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  const { label, copy } = useCopy(EMAIL, 'Copy email');
  return (
    <section id="contact" className="ct">
      <div className="wrap">
        <h2>Have a project, internship or opportunity in mind?</h2>
        <p className="mu">I'm always interested in meeting people who are building interesting products.</p>
        <div className="row">
          <Button variant="primary" href={LINKS.email}>Email me</Button>
          <Button onClick={copy}>{label}</Button>
          <Button href={LINKS.github} external>GitHub</Button>
          <Button href={LINKS.linkedin} external>LinkedIn</Button>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

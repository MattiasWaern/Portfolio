import { useState, type FormEvent } from 'react';
import { EMAIL } from '../data/site';
import { Button } from './Button';

type Field = 'name' | 'email' | 'message';
type Values = Record<Field, string>;

const rules: Record<Field, (v: string) => string | null> = {
  name: (v) => (v.trim().length >= 2 ? null : 'Enter your name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Enter a valid email address.'),
  message: (v) => (v.trim().length >= 10 ? null : 'Write at least 10 characters.'),
};
const fields: { name: Field; label: string }[] = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'message', label: 'Message' },
];

export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState('');

  const validate = (f: Field) => {
    const error = rules[f](values[f]);
    setErrors((e) => ({ ...e, [f]: error ?? undefined }));
    return error === null;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const invalid = fields.filter(({ name }) => !validate(name));
    if (invalid.length) {
      setStatus('Fix the highlighted fields and try again.');
      e.currentTarget.querySelector<HTMLElement>(`[name="${invalid[0].name}"]`)?.focus();
      return;
    }
    const subject = encodeURIComponent(`Message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n${values.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app to send the message.');
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      {fields.map(({ name, label }) => {
        const shared = {
          name,
          value: values[name],
          required: true,
          'aria-invalid': Boolean(errors[name]),
          onBlur: () => validate(name),
          onChange: (ev: { target: { value: string } }) => setValues((v) => ({ ...v, [name]: ev.target.value })),
        };
        return (
          <label key={name}>
            {label}
            {name === 'message' ? <textarea rows={5} {...shared} /> : <input type={name === 'email' ? 'email' : 'text'} autoComplete={name} {...shared} />}
            <span className="err">{errors[name]}</span>
          </label>
        );
      })}
      <Button variant="primary" type="submit" style={{ justifySelf: 'start' }}>Send message</Button>
      <p className="mono" role="status">{status}</p>
    </form>
  );
}

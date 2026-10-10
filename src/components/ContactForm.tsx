
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL } from '../data/site';
import { Button } from './Button';

type Field = 'name' | 'email' | 'message';
type Values = Record<Field, string>;

const rules: Record<Field, (value: string) => string | null> = {
  name: (value) =>
    value.trim().length >= 2
      ? null
      : 'Enter your name.',

  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? null
      : 'Enter a valid email address.',

  message: (value) =>
    value.trim().length >= 10
      ? null
      : 'Write at least 10 characters.',
};

const fields: { name: Field; label: string }[] = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'message', label: 'Message' },
];

const initialValues: Values = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const validate = (field: Field) => {
    const error = rules[field](values[field]);

    setErrors((current) => ({
      ...current,
      [field]: error ?? undefined,
    }));

    return error === null;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    const invalidFields = fields.filter(
      ({ name }) => !rules[name](values[name])
    );

    const nextErrors: Partial<Record<Field, string>> = {};

    fields.forEach(({ name }) => {
      nextErrors[name] = rules[name](values[name]) ?? undefined;
    });

    setErrors(nextErrors);

    if (invalidFields.length > 0) {
      setStatus('Please fix the highlighted fields.');

      event.currentTarget
        .querySelector<HTMLElement>(
          `[name="${invalidFields[0].name}"]`
        )
        ?.focus();

      return;
    }

    setIsSending(true);
    setStatus('Sending your message...');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          to_email: EMAIL,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setValues(initialValues);
      setErrors({});
      setStatus('Message sent successfully! Thank you for reaching out.');
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus(
        'Unable to send your message. Please try again or email me directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      {fields.map(({ name, label }) => {
        const shared = {
          name,
          value: values[name],
          required: true,
          'aria-invalid': Boolean(errors[name]),
          'aria-describedby': errors[name] ? `${name}-error` : undefined,
          onBlur: () => validate(name),
          onChange: (
            event: { target: { value: string } }
          ) => {
            setValues((current) => ({
              ...current,
              [name]: event.target.value,
            }));

            if (errors[name]) {
              setErrors((current) => ({
                ...current,
                [name]: rules[name](event.target.value) ?? undefined,
              }));
            }
          },
        };

        return (
          <label key={name}>
            {label}

            {name === 'message' ? (
              <textarea rows={5} {...shared} />
            ) : (
              <input
                type={name === 'email' ? 'email' : 'text'}
                autoComplete={name === 'name' ? 'name' : name}
                {...shared}
              />
            )}

            <span id={`${name}-error`} className="err">
              {errors[name]}
            </span>
          </label>
        );
      })}

      <Button
        variant="primary"
        type="submit"
        disabled={isSending}
        style={{ justifySelf: 'start' }}
      >
        {isSending ? 'Sending...' : 'Send message'}
      </Button>

      <p className="mono" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

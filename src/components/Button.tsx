import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ExternalLink } from './ExternalLink';

interface Common { variant?: 'primary' | 'ghost'; children: ReactNode }
type LinkProps = Common & { href: string; external?: boolean };
type ActionProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkProps | ActionProps) {
  const cls = `btn${props.variant === 'primary' ? ' p' : ''}`;
  if (props.href !== undefined) {
    const { href, external, children } = props;
    return external ? <ExternalLink className={cls} href={href}>{children}</ExternalLink> : <a className={cls} href={href}>{children}</a>;
  }
  const { variant: _v, children, ...rest } = props;
  return <button className={cls} type="button" {...rest}>{children}</button>;
}

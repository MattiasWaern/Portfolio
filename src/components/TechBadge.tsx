import type { TechItem } from '../types';

export function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="tc" tabIndex={0}>
      <b>{item.name}</b>
      <span className="lv">{item.level}</span>
      <div className="more">{item.usage}.<br />Example: {item.example}</div>
    </div>
  );
}

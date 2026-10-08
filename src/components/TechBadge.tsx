import type { TechItem } from '../types';

export function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="tc" tabIndex={0}>
      <b>{item.name}</b>
    </div>
  );
}

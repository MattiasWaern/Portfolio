import { useState } from 'react';

export function useCopy(text: string, idleLabel: string) {
  const [label, setLabel] = useState(idleLabel);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setLabel('Copied ✓');
    } catch {
      setLabel(text);
    }
    window.setTimeout(() => setLabel(idleLabel), 2000);
  };
  return { label, copy };
}

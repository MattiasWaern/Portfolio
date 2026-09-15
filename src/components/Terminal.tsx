import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypeWriter';
import type { TerminalCommand } from '../types';
import "../styles/Terminal.css"; 

interface Props {
  commands: TerminalCommand[];
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function Terminal({ commands }: Props) {
  const reducedMotion = useReducedMotion();
  const lines = useTypewriter(commands, reducedMotion);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>

      <div className="terminal-body">
        {lines.map((line, i) => (
          <div key={i}>
            <div className="line">
              <span className="prompt">$</span>
              <span className="out">{line.cmd}</span>
              {!line.cmdDone && <span className="cursor" aria-hidden="true" />}
            </div>
            {line.cmdDone && line.resp.length > 0 && (
              <div className="resp">{line.resp}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
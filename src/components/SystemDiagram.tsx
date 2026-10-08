import { Fragment, useEffect, useRef, useState } from 'react';
import { layers } from '../data/layers';

export function SystemDiagram() {
  const [active, setActive] = useState<number | null>(null);
  const [lit, setLit] = useState<number | null>(null);
  const timers = useRef<number[]>([]);
  const clear = () => timers.current.forEach(window.clearTimeout);
  useEffect(() => clear, []);

  const sendRequest = () => {
    clear();
    const step = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 420;
    timers.current = layers.map((_, i) => window.setTimeout(() => { setActive(i); setLit(i); }, i * step));
  };

  return (
    <div className="sys" aria-label="Interactive diagram of how a request moves through an application">
      <div className="sys-h">
        <span className="mono">How I think about an app</span>
        <button className="btn" style={{ padding: '.35rem .75rem', fontSize: '.8rem' }} onClick={sendRequest}>Send request</button>
      </div>
      {layers.map((l, i) => (
        <Fragment key={l.name}>
          <button className={`node${active === i ? ' on' : ''}`} onClick={() => setActive(i)}>
            {l.name}<small>{l.subtitle}</small>
          </button>
          {i < layers.length - 1 && <div className={`edge${lit === i ? ' on' : ''}`} />}
        </Fragment>
      ))}
      <p className="sys-n" aria-live="polite">
        {active === null ? 'Select a layer, or send a request through the stack.' : layers[active].description}
      </p>
    </div>
  );
}

import { useEffect, useState } from 'react';
import type { TerminalCommand } from '../types';

interface TypedLine {
  cmd: string;
  resp: string;
  cmdDone: boolean;
  done: boolean;
}

const CMD_SPEED = 28;   // ms per tecken i kommandot
const RESP_SPEED = 14;  // ms per tecken i svaret
const RESP_DELAY = 250; // paus innan svaret börjar skrivas
const LINE_DELAY = 500; // paus innan nästa kommando startar

export function useTypewriter(commands: TerminalCommand[], reducedMotion: boolean) {
  const [lines, setLines] = useState<TypedLine[]>([]);

  useEffect(() => {

    if (reducedMotion) {
      setLines(commands.map(c => ({ cmd: c.cmd, resp: c.response, cmdDone: true, done: true })));
      return;
    }

    let cancelled = false;
    setLines([]);

    const wait = (ms: number) =>
      new Promise<void>(resolve => setTimeout(resolve, ms));

    async function typeCommand(index: number, command: TerminalCommand) {

      setLines(prev => {
        const next = [...prev];
        next[index] = { cmd: '', resp: '', cmdDone: false, done: false };
        return next;
      });


      for (let i = 0; i <= command.cmd.length; i++) {
        if (cancelled) return;
        await wait(CMD_SPEED);
        setLines(prev => {
          const next = [...prev];
          next[index] = { ...next[index], cmd: command.cmd.slice(0, i) };
          return next;
        });
      }
      if (cancelled) return;

      setLines(prev => {
        const next = [...prev];
        next[index] = { ...next[index], cmdDone: true };
        return next;
      });

      await wait(RESP_DELAY);
      if (cancelled) return;


      for (let j = 0; j <= command.response.length; j++) {
        if (cancelled) return;
        await wait(RESP_SPEED);
        setLines(prev => {
          const next = [...prev];
          next[index] = { ...next[index], resp: command.response.slice(0, j) };
          return next;
        });
      }
      if (cancelled) return;

      setLines(prev => {
        const next = [...prev];
        next[index] = { ...next[index], done: true };
        return next;
      });

      await wait(LINE_DELAY);
    }

    async function runSequence() {
      for (let i = 0; i < commands.length; i++) {
        if (cancelled) return;
        await typeCommand(i, commands[i]);
      }
    }

    runSequence();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commands, reducedMotion]);

  return lines;
}
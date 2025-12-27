import { useEffect, useState } from 'react';

const PHRASES = [
  "Frontend Developer",
  "Building Interactive Experiences.."
];

export default function TypingAnimation() {
  const [text, setText] = useState(PHRASES[0]); // Start with first phrase complete
  const [phase, setPhase] = useState('pausing'); // pausing, deleting, typing, done

  useEffect(() => {
    let timeout;

    if (phase === 'pausing') {
      // Wait 2 seconds with first phrase showing
      timeout = setTimeout(() => setPhase('deleting'), 3000);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 35);
      } else {
        // Start typing second phrase
        setPhase('typing');
      }
    } else if (phase === 'typing') {
      if (text.length < PHRASES[1].length) {
        timeout = setTimeout(() => {
          setText(PHRASES[1].slice(0, text.length + 1));
        }, 35);
      } else {
        setPhase('done');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase]);

  return (
    <span>
      {text}
      <span style={{ animation: 'blink 1s infinite' }}>|</span>
    </span>
  );
}
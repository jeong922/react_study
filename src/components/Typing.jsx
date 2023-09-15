import React, { useEffect, useRef, useState } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function Typing({ typingText }) {
  const str = typingText;
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count >= str.length) {
      return;
    }

    setText((prev) => {
      let result = prev ? prev + str[count] : str[0];
      setCount(count + 1);

      return result;
    });
  }, 300);

  return (
    <>
      <span className='text-5xl tracking-wide text-white animate-blink'>
        {text}
      </span>
    </>
  );
}

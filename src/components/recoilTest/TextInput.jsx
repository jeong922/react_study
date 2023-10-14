import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './recoil';

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChange} className='border' />
      <br />
      Echo: {text}
    </div>
  );
}

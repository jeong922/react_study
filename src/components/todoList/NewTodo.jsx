import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atom';

export default function NewTodo() {
  const [text, setText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodo) => [
      ...oldTodo,
      { id: new Date(), text, isComplete: false },
    ]);
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className='p-1 mr-2 border border-black'
        type='text'
        value={text}
        onChange={onChange}
      />
      <button className='p-1 text-white bg-rose-500' onClick={addItem}>
        Add
      </button>
    </form>
  );
}

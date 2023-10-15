import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './atom';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import TodoListStates from './TodoListStates';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div className='p-5'>
      <TodoListStates />
      <TodoListFilters />
      <NewTodo />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} todo={todoItem} />
      ))}
    </div>
  );
}

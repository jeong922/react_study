import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className='w-full min-h-screen dark:bg-gray-900 bg-neutral-50'>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;

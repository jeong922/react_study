import './App.css';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/recoilTest/CharacterCounter';

function App() {
  return (
    <div className='w-full min-h-screen dark:bg-gray-900 bg-neutral-50'>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;

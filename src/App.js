import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import ThemeButton from './components/ThemeButton';
import { Typing } from './components/Typing';

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <div className='w-full min-h-screen dark:bg-gray-900 bg-neutral-50'>
        <QueryClientProvider client={queryClient}>
          <div className='w-full p-2'>
            <ThemeButton />
            <Typing typingText='Hello world!' />
          </div>
        </QueryClientProvider>
      </div>
    </DarkModeProvider>
  );
}

export default App;

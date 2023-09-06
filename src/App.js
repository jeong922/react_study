import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Carousel3 from './components/slide/Carousel3';
import Carousel2 from './components/slide/Carousel2';
import List from './components/List';
import Typing from './components/Typing';
import ThemeButton from './components/ThemeButton';
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <div className='w-full min-h-screen dark:bg-gray-900 bg-neutral-50'>
        <QueryClientProvider client={queryClient}>
          <div className='w-full p-2'>
            <ThemeButton />
            {/* <List /> */}
            {/* <List2 /> */}
            {/* <PaginatedList /> */}
            {/* <PaginatedList2 /> */}
            {/* <PaginatedList3 /> */}
            {/* <Carousel1 /> */}
            {/* <Carousel2 /> */}
            {/* <Carousel3 /> */}
            <Typing typingText='Hello world!' />
          </div>
        </QueryClientProvider>
      </div>
    </DarkModeProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Carousel3 from './components/slide/Carousel3';
import Carousel2 from './components/slide/Carousel2';
import List from './components/List';
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <div className='w-full dark:bg-gray-900 bg-neutral-50'>
        <QueryClientProvider client={queryClient}>
          <div className='w-full p-2'>
            {/* <List /> */}
            {/* <List2 /> */}
            {/* <PaginatedList /> */}
            {/* <PaginatedList2 /> */}
            {/* <PaginatedList3 /> */}
            {/* <Carousel1 /> */}
            <Carousel2 />
            {/* <Carousel3 /> */}
          </div>
        </QueryClientProvider>
      </div>
    </DarkModeProvider>
  );
}

export default App;

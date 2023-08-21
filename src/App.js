import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import List from './components/List';
import List2 from './components/List2';
import PaginatedList from './components/PaginatedList';
import PaginatedList2 from './components/PaginatedList2';
import PaginatedList3 from './components/PaginatedList3';
import { DarkModeProvider } from './context/DarkModeContext';
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <div className='w-full dark:bg-gray-900 bg-neutral-50'>
        <QueryClientProvider client={queryClient}>
          <div className='w-full max-w-screen-xl p-2 mx-auto'>
            <List />
            {/* <List2 /> */}
            {/* <PaginatedList /> */}
            {/* <PaginatedList2 /> */}
            {/* <PaginatedList3 /> */}
          </div>
        </QueryClientProvider>
      </div>
    </DarkModeProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import List from './components/List';
import List2 from './components/List2';
import PaginatedList from './components/PaginatedList';
import PaginatedList2 from './components/PaginatedList2';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full max-w-screen-xl p-2 mx-auto'>
        {/* <List /> */}
        {/* <List2 /> */}
        {/* <PaginatedList /> */}
        <PaginatedList2 />
      </div>
    </QueryClientProvider>
  );
}

export default App;

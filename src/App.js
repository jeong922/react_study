import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import List from './components/List';
import List2 from './components/List2';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full max-w-screen-xl p-2 mx-auto'>
        {/* <List /> */}
        <List2 />
      </div>
    </QueryClientProvider>
  );
}

export default App;

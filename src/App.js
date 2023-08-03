import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import List from './components/List';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full max-w-screen-xl p-2 mx-auto'>
        <List />
      </div>
    </QueryClientProvider>
  );
}

export default App;

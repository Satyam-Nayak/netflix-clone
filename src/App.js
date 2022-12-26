import Home from './pages/Home';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'e9924ba50e0d3833c3a1a48040fb7846',
};

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './styles/App.css';

const App = () => {
  const makeApiCall = async () => {
    let res = await axios.get('http://localhost:3001/reviews')
    console.log(res.data.reviews)
  }
  makeApiCall();
  return (
    <div className="App">
      <Routes>
      </Routes>
    </div>
  );
}

export default App;

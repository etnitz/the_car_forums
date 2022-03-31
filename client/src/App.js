import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './styles/App.css'
import Home from './pages/Home'
import Topics from './pages/Topics'

const App = () => {
  const makeApiCall = async () => {
    let res = await axios.get('http://localhost:3001/reviews')
    console.log(res.data.reviews)
  }
  makeApiCall();
  return (
    <div className="App">
      <Routes>
      <Route index element={<Home />} />
      <Route path='/topics' element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;

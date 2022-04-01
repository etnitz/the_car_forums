import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './styles/App.css'
import Home from './pages/Home'
import Topics from './pages/Topics'
import Cars from './pages/Cars'
import Racing from './pages/Racing'

const App = () => {
  const makeApiCall = async () => {
    let res = await axios.get('http://localhost:3001/posts')
    console.log(res.data.posts)
  }
  makeApiCall();
  return (
    <div className="App">
      <Routes>
      <Route index element={<Home />} />
      <Route path='/topics' element={<Topics />} />
      <Route path='/cars' element={<Cars />}/>
      <Route path='/racing' element={<Racing />} />
      </Routes>
    </div>
  );
}

export default App;

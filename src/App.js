import './App.css';
import AnimeDetails from './pages/AnimeDetails';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
// import Header from './components/Header';
// import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import TopAiring from './pages/TopAiring';
import Popular from './pages/Popular';
import Player from './pages/Player';

function App() {
  // const navigate=useNavigate();
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path='/' element={<MainPage></MainPage>}></Route>
          <Route path="/homepage" element={<HomePage></HomePage>}></Route>
          <Route path="/anime-details/:id" element={<AnimeDetails></AnimeDetails>}></Route>
          <Route path='/search/:id' element={<SearchPage/>}></Route>
          <Route path='/top-airing' element={<TopAiring/>}></Route>
          <Route path='/popular' element={<Popular/>}></Route>
          <Route path='/watch/:id' element={<Player/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

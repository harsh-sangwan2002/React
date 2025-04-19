import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieListPage from './pages/MovieListPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import WatchListPage from './pages/WatchListPage';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Routes>
    </Router>
  )
}

export default App

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ModulePage from './pages/ModulePage/ModulePage';
import LecturePage from './pages/LecturePage/LecturePage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/module" element={<ModulePage />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

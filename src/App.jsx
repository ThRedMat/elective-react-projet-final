import React from 'react';
import './App.css';
import Index from "./pages/Index";
import InfoManga from "./pages/InfoManga";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import NotFound from './pages/PageNotFound';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anime" element={<AnimeList />} />
          <Route path="/manga/:mangaId" element={<InfoManga />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

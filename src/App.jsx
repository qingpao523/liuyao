import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DivinationPage from './pages/DivinationPage';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/divination" element={<DivinationPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

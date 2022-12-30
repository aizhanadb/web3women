import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SocialMediaSection from './components/SocialMediaSection';

function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
    </div>
  );
}

export default App;

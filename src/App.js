import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SocialMediaSection from './components/SocialMediaSection';
import Articles from './components/Articles';
import InstSection from './components/InstSection';

function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
      <Articles/>
      <InstSection/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    
      <main className='overall-container'>
        <Sidebar />
        <Home />
      </main>
  
  );
}

export default App;

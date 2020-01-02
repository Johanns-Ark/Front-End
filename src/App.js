import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/pages/navbar/NavBar';
import AppRouter from './components/configs/AppRouter';

function App() {
  return (
    <div className="App">
     <NavBar />
<AppRouter />
    </div>
  );
}

export default App;

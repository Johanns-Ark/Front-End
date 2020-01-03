import React from 'react';
import logo from './logo.svg';
import './App.css';
// import NavBar from './components/pages/navbar/NavBar';
// import AppRouter from './components/configs/AppRouter';
import {SavedVideos} from './components/pages/main/SavedVideos';

function App() {
  return (
    <div className="App">
        <SavedVideos/>
    </div>
  );
}

export default App;

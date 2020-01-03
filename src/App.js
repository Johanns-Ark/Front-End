import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AddVideo from './components/pages/AddEditVids/AddVideo'
import Editvideo from './components/pages/AddEditVids/Editvideo'
// import NavBar from './components/pages/navbar/NavBar';
import AppRouter from './components/configs/AppRouter';

function App() {
  return (
    <div className="App">
      <AddVideo />
      <Editvideo /> 
      {/* <NavBar /> */}
{/* <AppRouter /> */}
    </div>
  );
}

export default App;

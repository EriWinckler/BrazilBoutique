import React from 'react';
import './App.css';

import Header from './components/header';
import Navigation from './components/navigation';
import Tops from './components/tops';

import tshirtsData from './components/tshirtsData';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Tops data={tshirtsData} />
      
    </div>
  );
}

export default App;

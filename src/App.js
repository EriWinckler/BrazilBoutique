import React from 'react';

import Header from './components/header';
import Navigation from './components/navigation';
import Tops from './components/tops';
import SimpleModal from './components/Modal';


import tshirtsData from './data/tshirtsData';




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

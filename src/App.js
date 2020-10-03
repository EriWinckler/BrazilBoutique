import React from 'react';

import Header from './components/header';
import Navigation from './components/navigation';
import Tops from './components/tops';
import Modal from './components/Modal';

//Hooks
import useModal from './hooks/useModal';

import tshirtsData from './data/tshirtsData';




function App() {

  const {isShowing, toggle} = useModal();

  return (
    <div className="App">
      <Navigation />
      <Header />
      <button className="button-default" onClick={toggle}>Modal</button>
      <Modal 
        isShowing={isShowing} 
        hide={toggle} 
      />
      <Tops data={tshirtsData} />
      

    </div>
  );
}

export default App;

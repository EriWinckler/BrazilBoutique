import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./style/main.scss";

// Components
import Header from './components/header';
import Navigation from './components/navigation';
import Home from './components/home';
import Tops from './components/tops';
import Pants from './components/pants';
import ItemDetail from './components/itemDetail';

import Objeto from './components/item';

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tops' exact component={Tops} />
          <Route path='/pants' exact component={Pants} />
          <Route path='/shop/:id' component={ItemDetail}/>
          <Route path="/item" component={Objeto} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

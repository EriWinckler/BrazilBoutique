import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/header';
import Navigation from './components/navigation';
import Home from './components/home';
import Tops from './components/tops';
import Pants from './components/pants';

import SimpleModal from './components/Modal';

function App() {


  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tops' component={Tops} />
          <Route path='/pants' component={Pants} />
          <Route path='/shop/:id' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

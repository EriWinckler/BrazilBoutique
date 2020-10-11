import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./style/main.scss";

// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// Components
import Header from './components/header';
import Navigation from './components/navigation';
import Home from './components/home';
import Tops from './components/tops';
import Pants from './components/pants';

function App() {

  const history = createBrowserHistory();

  history.listen(location => {
    ReactGA.initialize('UA-180190078-1');
    ReactGA.set({ page: location.pathname});
    ReactGA.pageview(location.pathname);
  })

  return (
    <Router history={history}>
      <div className="App">
        <Navigation />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tops' exact component={Tops} />
          <Route path='/pants' exact component={Pants} />
          <Route path='/shop/:id'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

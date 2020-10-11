import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// Components
import Header from "./components/header";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Tops from "./components/tops";
import Pants from "./components/pants";
import ItemDetail from "./components/itemDetail";

ReactGA.initialize('UA-180190078-1');

function App() {

  const history = createBrowserHistory();

  history.listen(location => {
    ReactGA.set({ page: location.pathname});
    ReactGA.pageview(location.pathname);
  })

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tops" exact component={Tops} />
          <Route path="/pants" exact component={Pants} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

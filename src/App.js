import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import Tops from "./components/sections/Tops";
import Pants from "./components/sections/Pants";
import ItemDetail from "./components/ItemDetail";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";

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
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tops" exact component={Tops} />
          <Route path="/pants" exact component={Pants} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LogIn} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

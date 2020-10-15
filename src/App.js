import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// Components
import Header from "./components/header";
import Navigation from "./components/navigation";
import Home from "./components/sections/home";
import Tops from "./components/sections/tops";
import Pants from "./components/sections/pants";
import ItemDetail from "./components/itemDetail";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Cart from "./components/cart";
import LogIn from "./components/logIn";

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

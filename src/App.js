import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// Google Analytics
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./components/firebase";

// Components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import Tops from "./components/sections/Tops";
import Pants from "./components/sections/Pants";
import ItemDetail from "./components/ItemDetail";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

ReactGA.initialize("UA-180190078-1");

function App() {
  const [{ user }, dispatch] = useStateValue();
  const history = createBrowserHistory();

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // Cleanup operations
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        {/*<Sidebar />*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tops" exact component={Tops} />
          <Route path="/pants" exact component={Pants} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

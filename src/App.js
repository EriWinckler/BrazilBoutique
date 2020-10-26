import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// Context API and Firebase
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./components/firebase";

// Components
import Header from "./components/header";
import Navigation from "./components/navigation";
import Home from "./components/sections/home";
import Tops from "./components/sections/tops";
import Pants from "./components/sections/pants";
import ItemDetail from "./components/itemDetail";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/logIn";

function App() {
  const [{ user }, dispatch] = useStateValue();

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

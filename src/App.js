import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import LiveServices from "./components/LiveServices.js";
import Profile from "./components/Profile.js";
import Login from "./components/Login.js";
import Contact from "./components/Contact.js";

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './css/styles.css';


class App extends Component {
  render() {
    return(
      <>
        <BrowserRouter>
          <Navbar />
          <Route
            path="/"
            exact
            render={() => <Home />}
          />
          <Route
            path="/liveservices"
            exact
            render={() => <LiveServices />}
          />
          <Route
            path="/profile"
            exact
            render={() => <Profile />}
          />
          <Route
            path="/contact"
            exact
            render={() => <Contact />}
          />
          <Route
            path="/login"
            exact
            render={() => <Login />}
          />
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}

export default App;

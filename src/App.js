import React from "react";
import { Route, Switch,Redirect } from 'react-router-dom';

import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Nav/>
    <Switch>
    <Route exact path='/' component={Banner}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/project' component={Services}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Redirect to='/'/>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Home from '/Users/dawn/react-components-as-routes-online-web-ft-061019/src/home.js'
import About from '/Users/dawn/react-components-as-routes-online-web-ft-061019/src/about.js'
import Login from '/Users/dawn/react-components-as-routes-online-web-ft-061019/src/login.js'
import Navbar from '/Users/dawn/react-components-as-routes-online-web-ft-061019/src/navBar.js'
// must import the browser
import { BrowserRouter as Router, Route } from 'react-router-dom';

// this is where we put our paths
// must be all wrapped in one div
// if we are using a navbar leave it w/o a exact path and will always display
// so home does not render not matter where you go => Route component for Home to exact path instead of just path. Try it now.
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
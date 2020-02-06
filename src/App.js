import React, { Component } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './CSS/App.css';
import data from './Constants/Links.js';
import Footer from './Components/Footer';

/**
 * Entrance point for React App
 */
export default class App extends Component {
  /**
   * Renders main App body which will display the various views that have been developed
   * 
   * Method reads values stored in ./Constants/Links.js and builds the Router based on those values
   * accordingly
   * 
   * If the website path is something that is not defined in the Links.js file, the webapp is redirected
   * to load the Home view
   */
  render() {
    return (
      <Router className="App">
        <Header />
        <div id="body">
          <Switch>
            {data.links.map((link) => (
              <Route key={link.name + "View"} path={link.path} exact activeClassName="activeView" component={require("./Views/" + link.component + ".js").default}></Route>
            ))}
              <Route render={() => (<Redirect to="/" />)}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
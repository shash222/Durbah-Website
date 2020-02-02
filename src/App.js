import React, { Component } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './CSS/App.css';
import data from './Constants/Links.js';
import Footer from './Components/Footer';

export default class App extends Component {
  state = {
    views: [],
  };

  componentDidMount() {
    this.createView();
  }

  createView() {
    const viewLocationPrepend = "./Views/";
    // Used to store all of the views that are dynamically added to website
    // This array is assigned to the state to be used to render the appropriate View
    var views = [];
    data.links.map((link) => {
      views.push(require(viewLocationPrepend + link.component + ".js").default);
    })
    this.setState({views});
  }

  render() {
    return (
      <Router className="App">
        <Header />
        <div id="body">
          <Switch>
            {data.links.map((link, i) => (
              <Route key={link.name + "View"} path={link.path} exact component={this.state.views[i]}></Route>
            ))}
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
import React, { Component } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './CSS/App.css';
import data from './Constants/Links.js';
import Footer from './Components/Footer';
import axios from 'axios';
import Spinner from './Components/Spinner';

/**
 * Entrance point for React App
 */
export default class App extends Component {

  state = {
    seminarData: {
      "flyerLocation": "",
      "promoVideoUrl": "",
      "seminarName": "",
      "seminarInstructor": "",
      "seminarDescription": "",
      "seminarDate": "0",
      "seminarTime": "",
      "aboutInstructor": "",
      "registrationLink": "",
      "moreAboutInstructorLink": "",
      "instructorImageLocation": ""
    },
    isLoading: true
  }

  componentDidMount() {
    this.getSeminarData();
    var spinnerDiv = document.getElementsByClassName("spinnerDiv")[0];
    if (spinnerDiv) {
      spinnerDiv.style.paddingTop = ((window.innerHeight) / 3) + "px";
    }
  }

  getSeminarData() {
    axios.get("https://server.durbah.org:5000/upcomingSeminarData").then((res) => {
      sessionStorage.setItem('seminarData', JSON.stringify(res.data));
      this.setState({ seminarData: res.data })

      // Update isLoading value
      setTimeout(() => {
        this.setState({ isLoading: false })
      }, (5000))
    })
  }

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
          {/* Display spinner while page is loading */}
          {(this.state.isLoading)
            ? (<div className="spinnerDiv">
              <Spinner />
            </div>)
            : null}
          <Switch>
            {data.links.map((link) => (
              <Route key={link.name + "View"} path={link.path} exact activeClassName="activeView" component={require("./Views/" + link.component + ".js").default}></Route>
            ))}
            <Route render={() => (<Redirect to="/" />)} />
          </Switch>
        </div>

        <Footer />

      </Router >
    );
  }
}
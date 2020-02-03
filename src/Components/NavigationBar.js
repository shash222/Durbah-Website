import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import data from '../Constants/Links.js';
import '../CSS/NavigationBar.css';

export default class NavigationBar extends Component {
    state = {
        isPortrait: false,
    }

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeMenuButton = this.changeMenuButton.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.setScreenOrientation);
        this.setState({ isPortrait: this.props.isPortrait });
    }

    setScreenOrientation = () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.setState({ isPortrait: true });
        } else {
            this.setState({ isPortrait: false });
        }
    }

    toggleMenu() {
        // document.getElementById("navLinksList").classList.toggle("openMenu");
        /*
            Adds the appropriate
         */
        var navLinksList = document.getElementById("navLinksList");
        if (navLinksList.classList.contains("openMenu")) {
            navLinksList.classList.remove("openMenu");
            navLinksList.classList.add("closeMenu");
        } else if (navLinksList.classList.contains("closeMenu")) {
            navLinksList.classList.remove("closeMenu");
            navLinksList.classList.add("openMenu");
        } else {
            navLinksList.classList.add("openMenu");
        }
  }

    getNavItems() {
        return (
            <ul id='navLinksList'>
                {data.links.map((link) => (
                    <li key={link.name + "Link"} onClick={this.toggleMenu} className="navElements"><NavLink className="navLink" to={link.path}>{link.name}</NavLink></li>
                ))}
            </ul>
        )
    }

    changeMenuButton() {
        this.toggleMenu();
        document.getElementById("menuButton").classList.toggle("change");
    }

    render() {
        return (
            <nav id="navigationBarContainer">
                {
                    (this.state.isPortrait)
                        ? (
                            <div>
                                <div id="menuButton" onClick={this.changeMenuButton}>
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                                {this.getNavItems()}
                            </div>
                        )
                        : (
                            <ul id='navLinksList'>
                                {data.links.map((link) => (
                                    <li key={link.name + "Link"} onClick={() => this.toggleMenu} className="navElements"><NavLink className="navLink" to={link.path}>{link.name.toUpperCase()}</NavLink></li>
                                ))}
                            </ul>
                        )
                }

            </nav>
        );
    }
}
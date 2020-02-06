import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import data from '../Constants/Links.js';
import '../CSS/NavigationBar.css';

export default class NavigationBar extends Component {
    state = {
        isPortrait: false,
    }

    /**
     * 
     * @param {*} props props passed from parent element to current component
     * Binds javascript methods to component instance
     */
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeMenuButton = this.changeMenuButton.bind(this);
    }

    /**
     * Adds event listener to 'resize' event to determine whether mobile or desktop version of 
     * NavigationBar needs to load
     */
    componentDidMount() {
        window.addEventListener('resize', this.setScreenOrientation);
        this.setScreenOrientation();
    }

    /**
     * Updates state with screen orientation every time screen is resized
     */
    setScreenOrientation = () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            this.setState({ isPortrait: true });
        } else {
            this.setState({ isPortrait: false });
        }
    }

    /**
     * Opens and closes Navigation Bar menu on mobile version of website
     * Is called when hamburger menu is selected or closed
     */
    toggleMenu() {
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
        this.changeMenuButton();
    }

    /**
     * Returns navigation bar links to be displayed
     */
    getNavItems() {
        return (
            <ul id='navLinksList'>
                {data.links.map((link) => (
                    <li key={link.name + "Link"} onClick={this.toggleMenu} className="navElements"><NavLink className="navLink" to={link.path}>{link.name}</NavLink></li>
                ))}
            </ul>
        )
    }

    /**
     * Changes menu button from hamburger menu to 'X' and vice versa on mobile version
     */
    changeMenuButton() {
        // this.toggleMenu();
        document.getElementById("menuButton").classList.toggle("change");
    }

    /**
     * Renders either desktop or mobile version of navigation bar
     * Desktop version always has navigation bar elements available
     * Mobile version only displays navigation bar after hamburger menu button is selected
     */
    render() {
        return (
            <nav id="navigationBarContainer">
                {
                    (this.state.isPortrait)
                        ? (
                            <div>
                                <div id="menuButton" onClick={this.toggleMenu}>
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
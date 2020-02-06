import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import '../CSS/Header.css';
import { NavLink } from 'react-router-dom';

/**
 * Header component that contains Header Logo and Navigation Bar
 */
export default class Header extends Component {
    render() {
        return(
            <header>
                <NavLink id="headerLogoLink" to="/">
                    <div id="headerLogo">
                        <p id="qabeelatDurbahText" className="headerLogoText">QABEELAT DURBAH</p>
                        <p id="qabeelatDurbahSubtext" className="headerLogoText">ALMAGHRIB INSTITUTE-NEW JERSEY CHAPTER</p>
                    </div>
                </NavLink>
                <NavigationBar />
            </header>
        );
    }
}
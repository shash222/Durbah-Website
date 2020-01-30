import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../CSS/NavigationBar.css';
import data from '../Constants/Links.js';

export default class NavigationBar extends Component {

    render() {
        return (
            <ul id='navLinksList'>
                {data.links.map((link) => (
                    <li key={link.name + "Link"}className="navElements"><NavLink className="navLink" to={link.path}>{link.name}</NavLink></li>
                ))}
            </ul>
        );
    }
}
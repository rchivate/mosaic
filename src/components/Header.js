import React from 'react';
import '../styles.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <div className='header-container'>
                <img className='logo' src='https://healthyresta.github.io/dinner/images/webmaster-main-logo.png' alt="LOGO" />

                <NavLink to='/'>
                    <button className="header-button">HOME</button>
                </NavLink>

                <NavLink to='/menu'>
                    <button className="header-button">MENU</button>
                </NavLink>

                <NavLink to='/about'>
                    <button className="header-button">ABOUT</button>
                </NavLink>

                <NavLink to='/resources'>
                    <button className="header-button">INFO</button>
                </NavLink>

            </div>


        </div >
    );
}
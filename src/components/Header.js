import React from 'react';
import '../styles.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div>

            <div className='header-container'>
                <div>
                    <NavLink to='/'>
                        <img className='header-button-logo' src='https://healthyresta.github.io/dinner/images/webmaster-small-logo.png' alt="LOGO" />

                    </NavLink>
                </div>
                <div>


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

                <div>


                    <NavLink to='/menu'>
                        <button className="header-button">MENU</button>
                    </NavLink>


                </div>


            </div>


        </div >
    );
}
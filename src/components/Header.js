import React from 'react';
import '../styles.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div className='header-container'>
            <div>
                <NavLink to='/'>
                    <button className="menu-button">HOME</button>
                </NavLink>

                <NavLink to='/menu'>
                    <button className="menu-button">MENU</button>
                </NavLink>

                <NavLink to='/resources'>
                    <button className="menu-button">INFO</button>
                </NavLink>

            </div>

        </div >
    );
}
import React from 'react';
import '../styles.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div className='header-container'>
            <div>
                <NavLink to='/dinner/'>
                    <button className="menu-button">HOME1</button>
                </NavLink>

                <NavLink to='/dinner/menu'>
                    <button className="menu-button">MENU</button>
                </NavLink>

                <NavLink to='/resources'>
                    <button className="menu-button">INFOA</button>
                </NavLink>

            </div>






        </div >
    );
}
import React from 'react';
import '../styles.css';


export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer-text'>
                📞 Reserve or Order Now (888-888-8888) |📍 0003 Lane Street rd | ©{currentYear} Mosaic Diner, All rights reserved.
            </p>


        </footer>



    );
}
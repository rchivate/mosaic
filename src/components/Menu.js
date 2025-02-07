import React, { useState } from 'react';
import '../styles.css';

import MenuItems from './MenuItems';

export default function Menu() {

    const [selectedCountry, setSelectedCountry] = useState(null);

    const showMenu = (id) => {


        console.log(Array.isArray(MenuItems));  // This should log 'true'
        console.log(MenuItems);  // Log the actual MenuItems array

        const menu = MenuItems.find(item => item.id === id);
        if (menu) {
            setSelectedCountry(menu);
        } else {
            console.error("Menu not found for ID:", id);
        }
    };

    return (
        <div className='container'>

            <div className='menu-container'>


                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/algeria-flag.png' alt="algeria" onClick={() => showMenu('Algerian')} />
                    <span class="tooltiptext">Algeria</span>
                </div>

                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/ethiopia-flag.png' alt="ethiopia" onClick={() => showMenu('Ethiopian')} />
                    <span class="tooltiptext">Ethiopia</span>
                </div>

                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/france-flag.png' alt="france" onClick={() => showMenu('French')} />
                    <span class="tooltiptext">France</span>
                </div>

                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/greece-flag.png' alt="greece" onClick={() => showMenu('Greek')} />
                    <span class="tooltiptext">Greece</span>
                </div>

                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/india-flag.png' alt="india" onClick={() => showMenu('Indian')} />
                    <span class="tooltiptext">India</span>
                </div>


                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/mexico-flag.png' alt="mexico" onClick={() => showMenu('Mexican')} />
                    <span class="tooltiptext">Mexico</span>
                </div>


                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/peru-flag.png' alt="peru" onClick={() => showMenu('Peruvian')} />
                    <span class="tooltiptext">Peru</span>
                </div>

                <div className='tooltip'>
                    <img className='country-card-img' src='https://healthyresta.github.io/dinner/images/south-korea-flag.png' alt="south-korea" onClick={() => showMenu('South Korean')} />
                    <span class="tooltiptext">South Korea</span>
                </div>
            </div>

            <div className="menu-main-container">
                <h2>{selectedCountry ? `${selectedCountry.id} Menu` : "Welcome to the Menu!"}</h2>

                {selectedCountry ? (
                    <div>
                        <div className="menu-details">
                            <div className="menu-category">
                                <h2>Appetizers</h2>
                                <ul>
                                    {selectedCountry.appetizers.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.name}</strong> - {item.price}
                                            <br />
                                            <em>{item.description}</em>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="menu-category">
                                <h2>Main Course</h2>
                                <ul>
                                    {selectedCountry.mainCourse.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.name}</strong> - {item.price}
                                            <br />
                                            <em>{item.description}</em>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="menu-category">
                                <h2>Dessert</h2>
                                <ul>
                                    {selectedCountry.dessert.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.name}</strong> - {item.price}
                                            <br />
                                            <em>{item.description}</em>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="menu-category">
                                <h2>Drinks</h2>
                                <ul>
                                    {selectedCountry.drinks.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.name}</strong> - {item.price}
                                            <br />
                                            <em>{item.description}</em>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                ) : (
                    <h2>Select a country above to view its menu</h2>
                )
                }

                📞(888-888-8888) Order or Make a Reservation Now!


            </div>
        </div >
    );
}
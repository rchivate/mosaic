import React from 'react';
import '../styles.css';


export default function About() {
    return (
        <div className='container'>
            <div className='header-item'>
                <h2>Our Mission</h2>
                <p>
                    We are proud vegetarians who understand the struggles of finding diverse vegetarian food options.
                    Our mission is to create a restaurant where vegetarians don't have to compromise on variety or taste.
                </p>
            </div>

            <div className="grid-container">
                <div className="grid-item">
                    <img src='https://healthyresta.github.io/dinner/images/chef.png' />
                    <h2>👨‍🍳Our Team👨‍🍳</h2>
                    <p>
                        Our chefs represent eight different countries, specializing in their regional cuisines.
                        Everything is made from fresh produce grown behind our kitchen— no preservatives, just pure flavor.
                    </p>
                </div>

                <div className="grid-item">
                    <img src='https://healthyresta.github.io/dinner/images/ecofriendly.jpg' />
                    <h2>❤️‍🔥Eco-Friendly Practices❤️‍🔥</h2>
                    <p>
                        We serve meals on glass and metal utensils to minimize waste. Our waste is sorted and composted into manure to give back to the Earth.
                    </p>
                </div>

                <div className="grid-item">
                    <img src='https://healthyresta.github.io/dinner/images/discount.jpg' />
                    <h2>⭐Special Offers⭐</h2>
                    <p>
                        Enjoy a 10% discount and a free farm tour. See how your food is grown and prepared.
                        We do add a small gratuity if food is wasted to encourage mindful eating.
                    </p>
                </div>

                <div className="grid-item">
                    <img src='https://healthyresta.github.io/dinner/images/donate.jpg' />
                    <h2>💵Food Donation💵</h2>
                    <p>
                        Any excess food is donated to local orphanages. We ensure every meal finds a purpose, reducing waste and supporting our community.
                    </p>
                </div>
            </div>

            <section className="quote">
                <p>
                    “Remember – over time, the bucket fills up because of the water drops that have accumulated over time."
                </p>
            </section>
        </div>
    );
}

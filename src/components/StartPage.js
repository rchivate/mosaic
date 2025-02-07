import '../styles.css';
import { NavLink } from 'react-router-dom';

import HeaderImages from './HeaderImages';


export default function StartPage() {
    return (
        <div className='container'>


            <HeaderImages />

            {/* This will talk about our passion behind getting more vegetarian focused restaurants */}
            <div>
                <h1>About Us</h1>
                <p>The creators of this website are vegetarians who have gone through the struggles of finding legitimate vegetarian food in restuarants. We want to make sure to have a good  The three of us are super passionate about bringing a variety of options to vegetarians.</p>
                <p>In our team, we have magnificient chefs who all uniquely represent one of the eight countries. The cuisine is made by fresh produce which is grown behind our kitchen. We do not add preservatives and thus encourage our customers to finish the food within a span of a couple days.</p>
                {/* Include some "veggie" facts card */}

            </div>

            {/* This will talk about how our restuarant utilizes "green" technology */}


        </div>


    );
}


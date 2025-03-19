import '../styles.css';

import HeaderImages from './HeaderImages';


export default function StartPage() {
    return (
        <div className='container'>
            <section>
                <span className='welcome-text'>W</span>
                <span className='welcome-text'>E</span>
                <span className='welcome-text'>L</span>
                <span className='welcome-text'>C</span>
                <span className='welcome-text'>O</span>
                <span className='welcome-text'>M</span>
                <span className='welcome-text'>E</span>

            </section>

            <section>
                <img className='logo' src='https://healthyresta.github.io/dinner/images/webmaster-main-logo.png' alt="LOGO" />
            </section>


            <div className='flag-cards-grid'>

                <div className='flag-cards-grid'>
                    <div className='flag-cards'>
                        <div className='card-front'>
                            <h1 className='flag-cards-title'>Algeria</h1>
                            <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/algeria-flag.png' alt="Algeria" />
                        </div>
                        <div className='card-back'>
                            <p className='flag-cards-description'>
                                A flavorful blend of Berber, French, Arab, and Mediterranean cuisine creates a melting pot of flavors in each dish.
                            </p>
                        </div>
                    </div>
                </div>



                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>Ethiopia</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/ethiopia-flag.png' alt="Ethiopia" />
                    <p className='flag-cards-description'>A combination of spiced stews and vegetables served on top of Injera (Ethiopian flatbread) as a plate makes eating Ethiopian food a very unique and fun experience.</p>
                </div>



                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>France</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/france-flag.png' alt="France" />
                    <p className='flag-cards-description'>A combination of artistry and technique turn the simplest ingredients into luxurious meals.</p>
                </div>

                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>Greece</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/greece-flag.png' alt="Greece" />
                    <p className='flag-cards-description'>A combination of fresh simple ingredients like olive oil, herbs, yogurt, and vegetables come together to create fresh, light, delicious, and healthy vegetarian meals.</p>
                </div>

                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>India</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/india-flag.png' alt="India" />
                    <p className='flag-cards-description'>A combination of vegetables, spices, roti (Indian flatbread), and rice make very delicious, flavorful vegetarian dishes.</p>
                </div>

                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>Mexico</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/mexico-flag.png' alt="Mexico" />
                    <p className='flag-cards-description'>A combination of Indigenous and Spanish cuisine creates bold, vibrant, spicy flavors in each dish.</p>
                </div>



                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>Peru</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/peru-flag.png' alt="Placeholder 1" />
                    <p className='flag-cards-description'> A combination of Indigenous cooking techniques and ingredients blended with cuisines from Europe, Africa, and Asia creates a diverse melting pot of flavors.</p>
                </div>


                <div className='flag-cards'>
                    <h1 className='flag-cards-title'>South Korea</h1>
                    <img className='flag-cards-img' src='https://healthyresta.github.io/dinner/images/south-korea-flag.png' alt="Placeholder 1" />
                    <p className='flag-cards-description'>
                        A combination of various flavors and textures in each meal makes every meal very flavorful. Additionally, many meals are meant to be shared creating a communal experience.
                    </p>
                </div>
            </div>

        </div>

    );
}
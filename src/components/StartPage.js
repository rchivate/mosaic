import '../styles.css';



export default function StartPage() {
    return (
        <div className='container'>

            <section>
                <img className='logo' src='https://rchivate.github.io/dinner/images/webmaster-main-logo.png' alt="LOGO" />
            </section>

            <section className='welcome'>
                <span className='welcome-text'>Hop aboard the Veggie Voyage, No Passport Needed</span>
            </section>

            <section className='intro-flag'>

                <div className='flag-cards-grid'>

                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>Algeria</h1>
                        <p className='flag-cards-description'>
                            A flavorful blend of Berber, French, Arab, and Mediterranean cuisine creates a melting pot of flavors in each dish.
                        </p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/algeria-flag.png' alt="Algeria" />

                    </div>



                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>Ethiopia</h1>
                        <p className='flag-cards-description'>A combination of stews and vegetables served on top of Injera as a plate makes eating Ethiopian food a very unique experience.</p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/ethiopia-flag.png' alt="Ethiopia" />
                    </div>



                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>France</h1>
                        <p className='flag-cards-description'>A combination of artistry and practiced technique turn even the most simplest ingredients into rich, luxurious meals.</p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/france-flag.png' alt="France" />
                    </div>

                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>Greece</h1>
                        <p className='flag-cards-description'>A combination of fresh simple ingredients come together to create fresh, delicious, and healthy vegetarian meals.</p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/greece-flag.png' alt="Greece" />
                    </div>

                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>India</h1>
                        <p className='flag-cards-description'>A combination of vegetables, spices, roti (Indian flatbread), and rice make very delicious, flavorful vegetarian dishes.</p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/india-flag.png' alt="India" />
                    </div>

                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>Mexico</h1>
                        <p className='flag-cards-description'>A combination of Indigenous and Spanish cuisine creates bold, vibrant, spicy flavors in each dish.</p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/mexico-flag.png' alt="Mexico" />
                    </div>



                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>Peru</h1>
                        <p className='flag-cards-description'> The cooking techniques and ingredients blended with cuisines from all over the world creates a diverse melting pot of flavors.</p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/peru-flag.png' alt="Placeholder 1" />
                    </div>


                    <div className='flag-cards'>
                        <h1 className='flag-cards-title'>South Korea</h1>
                        <p className='flag-cards-description'>
                            A combination of delicious flavors and unique textures in each meal makes every meal very flavorful and unique.
                        </p>
                        <img className='flag-cards-img' src='https://rchivate.github.io/dinner/images/south-korea-flag.png' alt="Placeholder 1" />
                    </div>
                </div>
            </section>

        </div>

    );
}
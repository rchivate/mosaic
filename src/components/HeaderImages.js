import React from 'react';
import '../styles.css';
import MultiCarousel from "react-multi-carousel"; // Renamed import
import "react-multi-carousel/lib/styles.css";



const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 430, min: 0 }, items: 1 },
};



export default function HeaderImages() {

    return (
        <div>


            <MultiCarousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                centerMode={true} // Enable center mode

                containerClass="carousel-container"
                itemClass="react-multi-carousel-item"
                pauseOnHover={true}
            >

                <div>
                    <h1 className='carousel-h1'>Algeria</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/algeria-flag.png' alt="Algeria" />

                    <p className='carousel-p'>A flavorful blend of Berber, French, Arab, and Mediterranean cuisine creates a melting pot of flavors in each dish.</p>
                </div>

                <div>
                    <h1 className='carousel-h1'>Ethiopia</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/ethiopia-flag.png' alt="Ethiopia" />
                    <p className='carousel-p'>A combination of spiced stews and vegetables served on top of Injera (Ethiopian flatbread) as a plate makes eating Ethiopian food a very unique and fun experience.</p>
                </div>

                <div>
                    <h1 className='carousel-h1'>France</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/france-flag.png' alt="France" />
                    <p className='carousel-p'>A combination of artistry and technique turn the simplest ingredients into luxurious meals.</p>
                </div>

                <div>
                    <h1 className='carousel-h1'>Greece</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/greece-flag.png' alt="Greece" />
                    <p className='carousel-p'>A combination of fresh simple ingredients like olive oil, herbs, yogurt, and vegetables come together to create fresh, light, delicious, and healthy vegetarian meals.</p>
                </div>

                <div>
                    <h1 className='carousel-h1'>India</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/india-flag.png' alt="India" />
                    <p className='carousel-p'>A combination of vegetables, spices, roti (Indian flatbread), and rice make very delicious, flavorful vegetarian dishes.</p>
                </div>

                <div>
                    <h1 className='carousel-h1'>Mexico</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/mexico-flag.png' alt="Mexico" />
                    <p className='carousel-p'>A combination of Indigenous and Spanish cuisine creates bold, vibrant, spicy flavors in each dish.</p>
                </div>



                <div>
                    <h1 className='carousel-h1'>Peru</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/peru-flag.png' alt="Placeholder 1" />
                    <p className='carousel-p'> A combination of Indigenous cooking techniques and ingredients blended with cuisines from Europe, Africa, and Asia creates a diverse melting pot of flavors.</p>
                </div>


                <div>
                    <h1 className='carousel-h1'>South Korea</h1>
                    <img className='carousel-image' src='https://healthyresta.github.io/dinner/images/south-korea-flag.png' alt="Placeholder 1" />
                    <p className='carousel-p'>
                        A combination of various flavors and textures in each meal makes every meal very flavorful. Additionally, many meals are meant to be shared creating a communal experience.
                    </p>
                </div>
            </MultiCarousel >
        </div >

    );
};
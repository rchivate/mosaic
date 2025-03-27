let MenuItems = [
    {
        id: "Greek",
        appetizers: [
            {
                name: "tzatziki",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/tzatziki.png",
                description: "A creamy yogurt dip with dill and cucumber served with pita chips.",
                price: "$5.00"
            },
            {
                name: "Choriatiki",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/choriatiki.png",
                description: "A fresh salad made of feta cheese, tomatoes, red onions, cucumbers, green bell peppers, and olives topped with extra virgin olive oil and oregano.",
                price: "$8.50"
            }
        ],
        mainCourse: [
            {
                name: "Spanakopita",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/spanakopita.png",
                description: "Leafy spinach and tangy feta cheese wrapped in between layers of baked phyllo dough.",
                price: "$12.50"
            },
            {
                name: "Vegetarian Moussaka",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/mousakka.png",
                description: "Eggplant, zucchini, potatoes, and onion layered with tomatoes and lentils, baked with a béchamel sauce.",
                price: "$17.50"
            }
        ],
        dessert: [
            {
                name: "Galaktoboureko",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/galaktoboureko.png",
                description: "Layers of custard baked in phyllo dough soaked with a sweet syrup.",
                price: "$7.50"
            },
            {
                name: "Kourabiedes",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/kourabiedes.png",
                description: "Almond biscuits topped with powdered sugar.",
                price: "$6.00"
            }
        ],
        drinks: [
            {
                name: "Soumada",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/soumada.png",
                description: "A drink made with almonds and water simmered in sugar syrup.",
                price: "$3.00"
            }
        ]
    },
    {
        id: "French",
        appetizers: [
            {
                name: "Zucchini Gratin",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/zucchinigratin.png",
                description: "Sautéed zucchini strips with a bell pepper, tomato, and parmesan filling.",
                price: "$6.50"
            },
            {
                name: "Fromage Fort",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/fromagefort.png",
                description: "Toasted bread topped with a filling of cheese, herbs, and garlic.",
                price: "$7.50"
            }
        ],
        mainCourse: [
            {
                name: "Braised Beluga Lentils",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/belugalentils.png",
                description: "Lentils braised in a tomato-based broth with fresh kale and rosemary.",
                price: "$15.00"
            },
            {
                name: "Onion Soup",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/onionsoup.png",
                description: "Caramelized onions cooked in a vegetable broth topped with croutons and cheese.",
                price: "$17.00"
            }
        ],
        dessert: [
            {
                name: "Macaron (4 pieces)",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/macaron.png",
                description: "Two crisp meringue cookies made of almond flour, egg whites, and sugar sandwiched with buttercream.",
                price: "$8.00"
            },
            {
                name: "Chocolate Soufflé",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/chocolate.png",
                description: "A baked confection of chocolate, egg whites, egg yolks, and milk topped with powdered sugar.",
                price: "$10.00"
            }
        ],
        drinks: [
            {
                name: "Chocolat Chaud",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/chocolatchaud.png",
                description: "A hot beverage made with melted chocolate, milk, and whipped cream.",
                price: "$4.00"
            }
        ]
    },
    {
        id: "South Korean",
        appetizers: [
            {
                name: "Oil Muchim",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/oilmuchim.png",
                description: "Cucumbers marinated in soy sauce, rice vinegar, and red chili sauce, topped with sesame seeds.",
                price: "$5.00"
            },
            {
                name: "Gamjajeon",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/gamjajeon.png",
                description: "Fried potato pancakes served with a Korean-style sauce.",
                price: "$7.50"
            }
        ],
        mainCourse: [
            {
                name: "Bibimbap",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/bibimbap.png",
                description: "A Korean rice bowl mixed with veggies, gochujang sauce, topped with a runny egg.",
                price: "$15.00"
            },
            {
                name: "Gochujang Noodles",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/gochujangnoodles.png",
                description: "A Korean-inspired noodle dish combining noodles, gochujang sauce, vegetables, and tofu.",
                price: "$17.50"
            }
        ],
        dessert: [
            {
                name: "Songpyeon",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/songpyeon.png",
                description: "A rice cake made with rice powder, matcha tea powder, dried mung beans, and sesame seeds.",
                price: "$7.50"
            },
            {
                name: "Dasik",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/dasik.png",
                description: "Cookies made with rice flour, matcha tea powder, and sesame seeds.",
                price: "$5.00"
            }
        ],
        drinks: [
            {
                name: "Saenggang Cha",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/saenggangcha.png",
                description: "Korean-style ginger tea made with hot water, ginger, and sugar.",
                price: "$2.00"
            }
        ]
    },
    {
        id: "Ethiopian",
        appetizers: [
            {
                name: "Shiro Wat",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/shirowat.png",
                description: "A soup made with chickpea flour, red onions, garlic, tomatoes, and Berbere seasoning.",
                price: "$8.50"
            },
            {
                name: "Ethiopian Style Eggplant Salad",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/eggplantsalad.png",
                description: "A salad made with eggplant, tomatoes, and onions simmered with Berbere seasoning and cayenne pepper.",
                price: "$8.00"
            }
        ],
        mainCourse: [
            {
                name: "Injera",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/injera.png",
                description: "A fermented flatbread served with an assortment of cooked vegetables and stews.",
                price: "$17.50"
            },
            {
                name: "Gomen Wat",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/gomenwat.png",
                description: "Simmered collard greens, sautéed onions, garlic, green peppers mixed with spices.",
                price: "$15.00"
            }
        ],
        dessert: [
            {
                name: "Dabo Kolo",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/dabokolo.png",
                description: "Fried wheat dough mixed with sugar, salt, and butter.",
                price: "$5.00"
            },
            {
                name: "Tibinga",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/tibinga.png",
                description: "An Ethiopian-style pancake made with wheat dough, sugar, salt, and yeast.",
                price: "$7.00"
            }
        ],
        drinks: [
            {
                name: "Bunna",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/bunna.png",
                description: "Ethiopian-style coffee.",
                price: "$2.00"
            }
        ]
    },
    {
        id: "Algerian",
        appetizers: [
            {
                name: "Salade Mechouia",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/salademechouia.png",
                description: "A salad made with roasted peppers, tomatoes, onions, and garlic topped with a lemon and olive oil dressing.",
                price: "$8.00"
            },
            {
                name: "Lablabi",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/lablabi.png",
                description: "A soup made with chickpeas, cumin, garlic, and olive oil (served with bread).",
                price: "$8.00"
            }
        ],
        mainCourse: [
            {
                name: "Couscous",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/couscous.png",
                description: "Lentils and vegetables cooked with spices and olive oil.",
                price: "$11.00"
            },
            {
                name: "Vegetarian Tagine",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/vegetariantangine.png",
                description: "A slow-cooked stew made with vegetables, dry fruits, nuts, and spices.",
                price: "$15.00"
            }
        ],
        dessert: [
            {
                name: "Baklava",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/baklava.png",
                description: "Layers of baked phyllo dough filled with nuts and soaked in a sweet syrup.",
                price: "$6.00"
            },
            {
                name: "Kalb El Louz",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/kalbellouz.png",
                description: "A dense almond cake made with semolina, sugar, butter, and almonds flavored with orange blossom water and soaked in a sugar syrup after baking.",
                price: "$8.00"
            }
        ],
        drinks: [
            {
                name: "Mint Tea",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/minttea.png",
                description: "A drink made with mint leaves, green tea, sugar, and hot water.",
                price: "$2.00"
            }
        ]
    },
    {
        id: "Peruvian",
        appetizers: [
            {
                name: "Causa Limena",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/causalimena.png",
                description: "A layered potato dish made with potatoes, lemon, aji amarillo, and olive oil garnished with hard-boiled eggs and olives.",
                price: "$7.50"
            },
            {
                name: "Choclo con Queso",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/chocloconqueso.png",
                description: "Boiled corn served with cheese and a side of aji sauce.",
                price: "$6.00"
            }
        ],
        mainCourse: [
            {
                name: "Arroz con Vegetales",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/arrozconvegetales.png",
                description: "A rice dish made with rice, vegetables, and seasoned with spices and aji amarillo sauce.",
                price: "$15.00"
            },
            {
                name: "Tacu Tacu",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/tacutacu.png",
                description: "Leftover rice, beans, garlic, spices, and aji amarillo stir-fried together to form a crispy patty.",
                price: "$13.00"
            }
        ],
        dessert: [
            {
                name: "Suspiro de Limena",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/suspirodelimena.png",
                description: "A rich creamy dessert made with sweetened condensed milk, evaporated milk, egg yolks, sugar, and flavored with vanilla.",
                price: "$7.50"
            },
            {
                name: "Picarones",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/picarones.png",
                description: "A donut made with squash and sweet potato flavored with aniseed and cinnamon, drizzled with molasses syrup.",
                price: "$7.00"
            }
        ],
        drinks: [
            {
                name: "Chicha Morada",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/chichamorada.png",
                description: "A drink made with purple corn, spices, and sugar.",
                price: "$3.50"
            }
        ]
    },
    {
        id: "Mexican",
        appetizers: [
            {
                name: "Guacamole",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/guacamole.png",
                description: "A dip made with avocados, tomatoes, onion, lime, and spices, served with tortilla chips.",
                price: "$5.00"
            },
            {
                name: "Chile Relleno",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/chilerelleno.png",
                description: "Poblano peppers stuffed with cheese, rice, and vegetables.",
                price: "$7.50"
            }
        ],
        mainCourse: [
            {
                name: "Enchiladas",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/enchillada.png",
                description: "Baked corn tortillas filled with cheese and beans, covered with ranchero sauce.",
                price: "$15.00"
            },
            {
                name: "Quesadillas",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/quesadilla.png",
                description: "A corn tortilla filled with cheese, beans, and vegetables.",
                price: "$10.00"
            }
        ],
        dessert: [
            {
                name: "Churros",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/churros.png",
                description: "A fried pastry topped with cinnamon sugar.",
                price: "$5.00"
            },
            {
                name: "Tres Leches Cake",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/treslechescake.png",
                description: "A vanilla sponge cake soaked with condensed milk, evaporated milk, and whole milk.",
                price: "$7.50"
            }
        ],
        drinks: [
            {
                name: "Chocolate Caliente",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/chocolatecalliente.png",
                description: "A hot beverage made with chocolate, cinnamon, vanilla, chili, and hot water.",
                price: "$4.00"
            }
        ]
    },
    {
        id: "Indian",
        appetizers: [
            {
                name: "Samosa",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/samosa.png",
                description: "A triangle-shaped fried pastry filled with mashed potatoes, peas, and spices, served with chutney.",
                price: "$5.00"
            },
            {
                name: "Onion Pakora",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/onionpakora.png",
                description: "Onions dipped in a spiced batter and fried, served with chutney.",
                price: "$5.00"
            }
        ],
        mainCourse: [
            {
                name: "Paneer Butter Masala",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/paneerbuttermasala.png",
                description: "Cottage cheese (paneer) served in a tomato and onion-based sauce with spices, accompanied by naan.",
                price: "$15.00"
            },
            {
                name: "Biryani",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/biryani.png",
                description: "A mixture of rice, yogurt, spices, and vegetables.",
                price: "$17.50"
            }
        ],
        dessert: [
            {
                name: "Gulab Jamun",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/gulabjamun.png",
                description: "Fried balls made out of milk solids soaked in sugar syrup.",
                price: "$7.50"
            },
            {
                name: "Rasmalai",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/rasmalai.png",
                description: "Circular pieces of cottage cheese (paneer) soaked in milk infused with Indian spices.",
                price: "$5.00"
            }
        ],
        drinks: [
            {
                name: "Mango Lassi",
                imageUrl: "https://healthyresta.github.io/dinner/images/menu/mangolassi.png",
                description: "A drink made with mangoes, milk, yogurt, and sugar.",
                price: "$3.50"
            }
        ]
    }
];

export default MenuItems;
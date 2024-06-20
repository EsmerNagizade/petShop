let product = [

    {
        id: 1,
        img: "./image/closeup-shot-ginger-cat-wicker-basket-isolated-white-wall_1-removebg-preview.png",
        name: 'Pişik evi',
        price: 42
    },

    {
        id: 2,
        img: "./image/street-fashioned-brown-white-dog-cool-black-hoodie-trucker-cap-with-mesh-back-rustic-wooden-table 1.png",
        name: '  İt üçün köynək',
        price: 60
    },
    {
        id: 3,
        img: "./image/pets-food-wooden-floor 1.png",
        name: 'Yemək qabları',
        price: 35
    },
    {
        id: 4,
        img: "./image/image 1 (1).png",
        name: 'Müxtəlif tasmalar',
        price: 42
    }
];

let basket = JSON.parse(localStorage.getItem("products")) || [];



let product2 = [
    {
        id: 5,
        img: './image/Me-O Cat Food - Pets - Package Inspiration 1.png',
        name: "Pişiklər üçün quru və nəm lasos",
        price: 45,
        x:"secilenmehsullar"
    },
    {
        id: 6,
        img: './image/Natures Nuts 00029 8 Lbs Premium Safflower Seed (Pack of 4) 1.png',
        name: "Quşlar üçün çərəz",
        price: 9.90,
         x:"yenimehsullar"
    },
    {
        id: 7,
        img: './image/image 5.png',
        name: "Balıqlar üçün quru toyuq",
        price:19,
         x:"yenimehsullar"
    },
    {
        id: 8,
        img: './image/Dog Friendly Kennebunk, Maine - Daily Dog Tag 1.png',
        name: "İtlər üçün sümüklər",
        price: 33,
         x:"encoxmehsullar"
    },
    {
        id: 9,
        img: './image/JINX_ Premium Dog Food Made for Modern Dogs 1.png',
        name: "Pişiklər üçün çubuq",
        price: 40,
         x:"secilenmehsullar"
    },
    {
        id: 10,
        img: './image/Wagg Sets Tails Going With a Rebrand by Robot Food 1.png',
        name: "Dovşanlar üçün dəri ət",
        price: 13.9,
         x:"yenimehsullar"
    },
    {
        id: 11,
        img: './image/Kasper Faunafood Caviakorrel - Caviavoer - 4 kg 1.png',
        name: "Balıqlar üçün quru çörək",
        price: 25,
         x:"encoxmehsullar"
    },
    {
        id: 12,
        img: './image/image 4.png',
        name: "İtlər üçün quru yemək və ət",
        price:40 ,
         x:"yenimehsullar"
    }
];
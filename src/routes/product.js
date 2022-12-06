const path = require('path');
const express = require('express');
const router = express.Router();


const products = [
    {
        id:"1",
        titulo:"Feminismo Para Principiantes",
        autor: "Nuria Varela",
        imagen: "/assets/libros/1.jpeg",
    },
    {
        id:"2",
        titulo:"El Chico de las Estrellas",
        autor: "Chris Pueyo",
        imagen: "/assets/libros/2.jpeg",
    },
    {
        id:"3",
        titulo:"Ecologismo Real",
        autor: "J. M. Mulet",
        imagen:"/assets/libros/3.jpeg",
    },
    {
        id:"4",
        titulo:"Puta Madre",
        autor: "Dalia F. Walker",
        imagen: "/assets/libros/4.jpeg",
    },
    {
        id:"5",
        titulo:"Los hombres me explican cosas",
        autor: "Rebecca Solnit",
        imagen:"/assets/libros/5.jpeg",
    },
];


router.get ("/:id", (req,res) => {
    const {id} = req.params;

    const product = products.find ((products) => products.id === id);

    return res.status(200).render("pages/product.ejs" , {product});
});

module.exports = router;

/*

router.get ("/", (req,res) => {
    return res.status(200).render("pages/product.ejs");
});

module.exports = router;



router.get ("/", (req,res) => {
    res.send ("Estoy en el detalle del producto");
});

module.exports = router;

*/
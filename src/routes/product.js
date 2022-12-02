const express = require('express');
const router = express.Router();



router.get ("/", (req,res) => {
    return res.status(200).render("pages/product.ejs");
});

module.exports = router;


/*
router.get ("/", (req,res) => {
    res.send ("Estoy en el detalle del producto");
});

module.exports = router;

*/
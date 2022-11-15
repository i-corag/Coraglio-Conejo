const express = require('express');
const router = express.Router();
const path = require ("path");


router.get ("/", (req,res) => {
    res.send ("Estoy en el detalle del producto");
});

module.exports = router;
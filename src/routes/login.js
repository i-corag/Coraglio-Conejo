const express = require('express');
const router = express.Router();
const path = require ("path");


router.get ("/", (req,res) => {
    res.send ("Estoy en la seccion de Login");
});

module.exports = router;
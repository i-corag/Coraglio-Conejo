const express = require('express');
const router = express.Router();
const path = require ("path");


router.get ("/", (req,res) => {
    res.send ("Estoy en la seccion para registrame");
});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require ("path");


router.get ("/", (req,res) => {
    return res.status(200).render("pages/register.ejs");
});

router.get ("/", (req,res) => {
    return res.status(200).render("pages/login.ejs");
});


module.exports = router;
const express = require('express');
const router = express.Router();



router.get ("/cart", (req,res) => {
    return res.status(200).render("pages/cart.ejs");
});

module.exports = router;
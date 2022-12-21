/*const express = require('express');
const router = express.Router();*/

const {Router} = require('express');
const router = Router();

const { sendHomeView } = require("../controllers/homeControllers");


router.get ("/", sendHomeView);


module.exports = router;







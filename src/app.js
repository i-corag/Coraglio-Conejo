require("dotenv").config(); 

const express = require("express"); 
const app = express(); 

const homeRoutes = require('./routes/home.js'); 
const productRoutes = require('./routes/product.js'); 
const loginRoutes = require('./routes/login.js'); 
const registerRoutes = require('./routes/register.js'); 
const cartRoutes = require('./routes/cart.js'); 


app.use("/",homeRoutes);
app.use("/product",productRoutes);
app.use("/login",loginRoutes);
app.use("/register",registerRoutes);
app.use("/cart",cartRoutes);
 


app.listen (process.env.PORT , () => {
    console.log('Server listening on port ' + process.env.PORT)
});

module.exports = app;
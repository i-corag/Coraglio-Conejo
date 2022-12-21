require("dotenv").config(); 
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser"); 

const oneDay = 1000 * 60 * 60 * 24;

const app = express(); 

// Procedemos con las configuraciones de nuestro app
// Manejo de req.body en formato JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");

app.use(
    session({
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      cookie: { maxAge: oneDay },
      resave: false,
    })
  );
  app.use(cookieParser());

const homeRoutes = require('./routes/home.js'); 
const productRoutes = require('./routes/product.js'); 
//const loginRoutes = require('./routes/login.js'); 
const authRoutes = require('./routes/auth.js'); 
const cartRoutes = require('./routes/cart.js'); 


app.use("/",homeRoutes);
app.use("/product",productRoutes);
//app.use("/login",loginRoutes);
app.use("/",authRoutes);
app.use("/cart",cartRoutes);
 


app.listen (process.env.PORT , () => {
    console.log('Server listening on port ' + process.env.PORT)
});

module.exports = app;
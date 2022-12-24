require("dotenv").config(); 
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser"); 
const session = require("express-session");
const cookieParser = require("cookie-parser"); 

const maxAge = 1000 * 60 * 15; //en miliseconds

const app = express(); 

// Configuraciones de nuestro app

app.use(bodyParser.urlencoded({ extended: true })); // Manejo de req.body en formato JSON

app.use(express.static(path.join(__dirname, "../public"))); // Acceso a la carpeta public

app.set("view engine", "ejs"); // Setear ejs como motor de vistas

app.use(session({ 
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      cookie: { maxAge: maxAge },
      resave: true,
    })
  );

app.use(cookieParser());

const homeRoutes = require('./routes/home.js'); 
const productRoutes = require('./routes/product.js'); 
const authRoutes = require('./routes/auth.js'); 
const cartRoutes = require('./routes/cart.js'); 


app.use("/",homeRoutes);
app.use("/products",productRoutes);
app.use("/",authRoutes);
app.use("/",cartRoutes);
 


app.listen (process.env.PORT , () => {
    console.log('Server listening on port ' + process.env.PORT)
});

module.exports = app;
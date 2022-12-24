const fs = require('fs');
const path = require("path");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { request } = require('http');


const sendRegisterForm = (req, res) => {
  res.render("pages/register.ejs");
};

const getRegisterData = (req, res) => {
    const { email, password } = req.body;
  
    // Obtenemos el archivo con los usuarios existentes
    const usersFile = fs.readFileSync (path.join(__dirname, "../models/users.json") , "utf-8");
    let parsedUsersFile = JSON.parse(usersFile);
  
    // Verificar si ya existe el usuario
    const existedUser = parsedUsersFile.some((current) => current.email === email);
    if (existedUser) {
        return res.render("pages/existedUser.ejs");
    }
  
    // Generate a salt and hash on separate function calls y reescribimos el .json
    bcrypt.genSalt ( 10, (err, salt) => {
      bcrypt.hash (password, salt, (err, hash) => {
        const id = crypto.randomUUID();
        const newUser = {
          id,
          email,
          password: hash,
        };
        req.session.userId = id;
  
        fs.writeFileSync (
          path.join(__dirname, "../models/users.json"),
          JSON.stringify ([...parsedUsersFile, newUser], null, 2)
        );
      });
    });
  
    res.redirect("pages/login.ejs");
};

const sendLoginForm = (req, res) => {
  res.render("pages/login.ejs");
};

const getLoginData = (req, res) => {
  const { email, password } = req.body; //obtenemos los datos del formulario de login

  //leemos y parseamos el json con todos los usuarios
  let parsedUsersFile = JSON.parse (fs.readFileSync (path.join(__dirname, "../models/users.json")));

  //buscamos si el usuario ingresado existe
  const existedUser = parsedUsersFile.find (user => user.email === email);

  //si no existe retornamos invalido
  if (!existedUser) {
    return res.render ("pages/unexistedUser.ejs");
  }

  //comparamos las contraseñas
  const validPassword = bcrypt.compareSync (password , existedUser.password);

  //si las contraseñas no coinciden
  if (!validPassword) {
    return res.render ("pages/unexistedUser.ejs");
  }

  req.session.userId = existedUser.id;

  //si todo salio ok redireccionamos a home
  res.redirect ("/");

};

const logOut = (req, res) => {
  req.session.destroy();
  res.redirect ("/login");
};

module.exports = {
    sendRegisterForm,
    getRegisterData,
    sendLoginForm,
    getLoginData,
    logOut,
  };
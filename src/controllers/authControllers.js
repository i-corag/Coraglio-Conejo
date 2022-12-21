const fs = require('fs');
const path = require("path");
const bcrypt = require("bcrypt");
const crypto = require("crypto");


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
        return res.render("pages/invalid.ejs");
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
        req.session.save();
  
        fs.writeFileSync (
          path.join(__dirname, "../models/users.json"),
          JSON.stringify ([...parsedUsersFile, newUser], null, 2)
        );
      });
    });
  
    res.redirect("pages/login.ejs");
};

module.exports = {
    sendRegisterForm,
    getRegisterData,
  };
const {Router} = require('express');
const router = Router();

const {
    sendRegisterForm,
    getRegisterData,
    sendLoginForm,
    getLoginData,
    logOut,
  } = require("../controllers/authControllers");

const {
    checkUserNotLogged, checkUserLogged
  } = require("../middlewares/checkUserId");



router.get ("/register", [checkUserNotLogged] , sendRegisterForm);

router.post ("/register", getRegisterData );

router.get ("/login", [checkUserNotLogged] , sendLoginForm);

router.post ("/login", getLoginData );

router.get ("/logout", [checkUserLogged] , logOut);

module.exports = router;





  

  
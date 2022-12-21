const {Router} = require('express');
const router = Router();

const {
    sendRegisterForm,
    getRegisterData,
  } = require("../controllers/authControllers");

const {
    checkUserNotRegistered,
  } = require("../middlewares/checkUserId");



router.get ("/register", [checkUserNotRegistered] , sendRegisterForm);

router.post ("/register", getRegisterData );


/*router.get ("/login", (req,res) => {
    return res.status(200).render("pages/login.ejs");
});

router.get ("/logOut",);
*/

module.exports = router;





  

  
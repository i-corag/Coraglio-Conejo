

const checkUserNotLogged = (req, res, next) => {
    const { userId } = req.session;
  
    if (userId) {
      return res.redirect("/");
    }
    next();
  };


  const checkUserLogged = (req, res, next) => {
    const { userId } = req.session;

    if (!userId) {
      return res.redirect("/login");
    }
    next();
  };
  
  module.exports = { checkUserNotLogged , checkUserLogged };



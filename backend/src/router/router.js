const HomeControllers = require("../controllers/HomeControllers");
const AccountControllers = require("../controllers/AccountControllers");

function router(app) {
  app.route("/register").post(AccountControllers.register);

  app.route("/login").post(AccountControllers.login)

  app.route("/home").get(HomeControllers.home);

  app.route("*").get((req, res) => {
    res.status(400).send("t ko tìm thấy trang m muốn")
  })
}

module.exports = router;

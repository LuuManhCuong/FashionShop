const HomeControllers = require("../controllers/HomeControllers");
const AccountControllers = require("../controllers/AccountControllers");
const BlogController = require("../controllers/BlogController");

function router(app) {
  app.route("/register").post(AccountControllers.register);

  app.route("/login").post(AccountControllers.login);

  app.route("/").get(HomeControllers.home);

  app.route("/blog").get(BlogController.blog);

  app.route("*").get((req, res) => {
    res.status(400).send("t ko tìm thấy trang m muốn");
  });
}

module.exports = router;

const HomeControllers = require("../controllers/HomeControllers");
const AccountControllers = require("../controllers/AccountControllers");
const BlogController = require("../controllers/BlogController");
const ShopControllers = require("../controllers/ShopController");

function router(app) {
  app.route("/register").post(AccountControllers.register);

  app.route("/login").post(AccountControllers.login);

  app.route("/").get(HomeControllers.home);

  app.route("/bestSale/").get(HomeControllers.bestSale);

  app.route("/shop").get(ShopControllers.shop);

  app.route("/blog").get(BlogController.blog);

  app.route("*").get((req, res) => {
    res.status(400).json("t ko tìm thấy trang m muốn");
  });
}

module.exports = router;

const HomeControllers = require("../controllers/HomeControllers");
const AccountControllers = require("../controllers/AccountControllers");
const BlogController = require("../controllers/BlogController");
const ShopControllers = require("../controllers/ShopController");
const AdminController = require("../controllers/AdminController");
const SearchController = require("../controllers/Search");

function router(app) {
  app.route("/search").get(SearchController.SearchProduct);

  app.route("/register").post(AccountControllers.register);

  app.route("/login").post(AccountControllers.login);

  app.route("/").get(HomeControllers.home);

  app.route("/bestSale/").get(HomeControllers.bestSale);

  app.route("/shop").get(ShopControllers.shop);

  app.route("/shop/count").get(ShopControllers.countProduct);

  app.route("/shop/getPrice").get(ShopControllers.getPrice);

  app.route("/blog").get(BlogController.blog);
  app.route("/blog/count").get(BlogController.countBlog);

  app.route("/admin").get(AdminController.admin);

  app.route("*").get((req, res) => {
    res.status(400).json("t ko tìm thấy trang m muốn");
  });
}

module.exports = router;

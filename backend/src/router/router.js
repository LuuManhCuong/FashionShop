const HomeControllers = require("../controllers/HomeControllers");
const AccountControllers = require("../controllers/AccountControllers");
const BlogController = require("../controllers/BlogController");
const ShopControllers = require("../controllers/ShopController");
const AdminController = require("../controllers/AdminController");
const SearchController = require("../controllers/SearchController");
const authenJwt = require("../middlewares/authenJwt");

function router(app) {
  app.route("/search").get(SearchController.SearchProduct);

  app.route("/register").post(AccountControllers.register);

  app.route("/login").post(AccountControllers.login);
  app.route("/refresh").post(AccountControllers.refreshToken);

  // mdw: đăng nhập rồi thì mới đăng xuất dc
  app.route("/logout").post(authenJwt.verifyToken, AccountControllers.logout);

  // home router
  app.route("/").get(HomeControllers.home);
  app.route("/bestSale/").get(HomeControllers.bestSale);

  // shop router
  app.route("/shop").get(ShopControllers.shop);
  app.route("/shop/count").get(ShopControllers.countProduct);
  app.route("/shop/getPrice").get(ShopControllers.getPrice);
  app.route("/shop/detail/:id").get(ShopControllers.getDetailProduct);


  // blog router
  // app.route("/blog").get(BlogController.blog);
  app.route("/blog")
  .get(BlogController.blog)
  .post(BlogController.createBlog);
  app.route("/blog/count").get(BlogController.countBlog);

  // admin router
  app.route("/admin").get(authenJwt.verifyToken, AdminController.adminUser);
  app.route("/admin/count/user").get(AdminController.countUser);
  app
    .route("/admin/delete/user/:id")
    .delete(authenJwt.verifyAdmin, AdminController.deleteUser);
  app
    .route("/admin/delete/product/:id")
    .delete(authenJwt.verifyAdmin, AdminController.deleteProduct);

  app
    .route("/admin/warehouse")
    .get(authenJwt.verifyToken, AdminController.adminWarehouse);
  app
    .route("/admin/count/product")
    .get(authenJwt.verifyToken, AdminController.countProduct);

  // * router
  app.route("*").get((req, res) => {
    res.status(400).json("t ko tìm thấy trang m muốn");
  });
}

module.exports = router;

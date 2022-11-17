const HomeControllers = require("../controllers/HomeControllers");
const AccountControllers = require("../controllers/AccountControllers");
const BlogController = require("../controllers/BlogController");
const ShopControllers = require("../controllers/ShopController");
const AdminController = require("../controllers/AdminController");
const SearchController = require("../controllers/SearchController");
const CommentController = require("../controllers/CommentController");

function router(app) {
  app.route("/search").get(SearchController.SearchProduct);

  app.route("/register").post(AccountControllers.register);

  app.route("/login").post(AccountControllers.login);

  app.route("/").get(HomeControllers.home);

  app.route("/bestSale/").get(HomeControllers.bestSale);

  app.route("/shop").get(ShopControllers.shop);
  app.route("/shop/count").get(ShopControllers.countProduct);
  app.route("/shop/getPrice").get(ShopControllers.getPrice);

  app.route("/blog").get(BlogController.blog).post(BlogController.createBlog);
  app.route("/blog/count").get(BlogController.countBlog);
  app.route("/blog/detail/:id").get(BlogController.getBlogDetail);

  app.route("/admin").get(AdminController.adminUser);
  app.route("/admin/count/user").get(AdminController.countUser);
  app.route("/admin/delete/user/:id").delete(AdminController.deleteUser);
  app.route("/admin/delete/product/:id").delete(AdminController.deleteProduct);

  app.route("/admin/warehouse").get(AdminController.adminWarehouse);
  app.route("/admin/count/product").get(AdminController.countProduct);

  app
    .route("/comment")
    .post(CommentController.postComment)
    // .get(CommentController.realTimeComment);
  app.route("/comment/:idDetail")
  .get(CommentController.realTimeComment);
  // .get(CommentController.getComment);

  app.route("*").get((req, res) => {
    res.status(400).json("t ko tìm thấy trang m muốn");
  });
}

module.exports = router;

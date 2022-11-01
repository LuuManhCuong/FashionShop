const connection = require("../config/database");
const authen = require("../middlewares/authen");

class HomeControllers {
  // [GET] /home
  home(req, res, next) {
    // authen.verifyToken()
    let sql = `select * from slider`;
    let sql2 = `SELECT *, DATE_FORMAT(product.eventTime, '%y/%m/%d') as dateEvent FROM product where product.event = 1`;
    let sql3 = `SELECT *, DATE_FORMAT(blog.createAt, '%y/%m/%d') as timeCreate
    FROM fashion_shop.blog
    INNER JOIN fashion_shop.feedback
    ON fashion_shop.blog.idblog = fashion_shop.feedback.idFeedback ORDER BY feedback.like DESC limit 3`;
    let sql4 =
      'SELECT * FROM fashion_shop.product where product.gender="women" and product.category="clothings"';
    let sql5 =
      'SELECT * FROM fashion_shop.product where product.gender="men" and product.category="clothings"';

    connection.query(
      `${sql}; ${sql2}; ${sql3} ; ${sql4}; ${sql5}`,
      (err, result) => {
        err ? console.log(err) : res.json(result);
      }
    );
  }

  // [GET] /bestSale/:slug
  bestSale(req, res, next) {
    let sql = `SELECT * FROM fashion_shop.product where product.gender=? and product.category =? ORDER BY product.sale DESC limit 5`;

    connection.query(
      `${sql}`,
      [req.query.gender, req.query.category],
      (err, result) => {
        err ? console.log(err) : res.json(result);
      }
    );
  }
}

module.exports = new HomeControllers();

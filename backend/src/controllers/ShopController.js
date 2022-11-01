const connection = require("../config/database");

class ShopControllers {
  // [GET] /shop
  shop(req, res, next) {
    let sql = `SELECT * FROM fashion_shop.product LIMIT 6 OFFSET 0`;

    connection.query(`${sql}`, (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}

module.exports = new ShopControllers();

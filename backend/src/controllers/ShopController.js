const connection = require("../config/database");

class ShopControllers {
  // [GET] /shop
  shop(req, res, next) {
    if (req.query.filter && req.query.size) {
      console.log("cả 2");
      let filters = `"${req.query.filter.replaceAll(",", '","')}"`;
      let sizes = `"${req.query.size.replaceAll(",", '","')}"`;
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? and product.size in (${sizes}) and product.category in (${filters}) and product.price <= ? LIMIT 6 OFFSET ? `;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    } else if (req.query.filter) {
      console.log("filter");

      let filters = `"${req.query.filter.replaceAll(",", '","')}"`;
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? and product.category in (${filters}) and product.price <= ? LIMIT 6 OFFSET ? `;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    } else if (req.query.size) {
      console.log("size");
      let sizes = `"${req.query.size.replaceAll(",", '","')}"`;
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? and product.size in (${sizes}) and product.price <= ? LIMIT 6 OFFSET ? `;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    } else {
      // console.log("query: ", req.query);
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? and product.price <= ? order by product.price LIMIT 6 OFFSET ?`;
      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    }
  }

  // [GET] /shop/count
  countProduct(req, res, next) {
    if (req.query.filter && req.query.size) {
      let filters = `"${req.query.filter.replaceAll(",", '","')}"`;
      let sizes = `"${req.query.size.replaceAll(",", '","')}"`;

      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product where product.gender = ? and product.category in (${filters}) and product.category in (${sizes}) and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    } else if (req.query.filter) {
      // console.log(req.query.filter);
      let filters = `"${req.query.filter.replaceAll(",", '","')}"`;
      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product where product.gender = ? and product.category in (${filters}) and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    } else if (req.query.size) {
      let sizes = `"${req.query.size.replaceAll(",", '","')}"`;
      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product where product.gender = ? and product.size in (${sizes}) and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    } else {
      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product where product.gender = ? and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? console.log(err) : res.json(result);
        }
      );
    }
  }

  // [GET] /shop/minPrice/maxPrice
  getPrice(req, res, next) {
    let sql = `SELECT max(product.price)as maxPrice, min(product.price)as minPrice FROM fashion_shop.product `;

    connection.query(`${sql}`, (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}

module.exports = new ShopControllers();

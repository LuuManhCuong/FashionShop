const connection = require("../config/database");
const authen = require("../middlewares/authen");

class AdminController {
  // [GET] /admin/
  adminUser(req, res, next) {
    // authen.verifyToken()
    let sql = `SELECT * FROM fashion_shop.user order by createAt desc  limit 10 offset ?`;
    connection.query(`${sql}`, [Number(req.query.page || 0)], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }

  // [GET] /admin/warehouse
  adminWarehouse(req, res, next) {
    // authen.verifyToken()
    let sql2 = `select * from product limit 10 offset ?`;

    connection.query(
      ` ${sql2}`,
      [Number(req.query.page || 0)],
      (err, result) => {
        err ? console.log(err) : res.json(result);
      }
    );
  }

  // [GET] /admin/count/user
  countUser(req, res, next) {
    let sql = `SELECT COUNT(*) as total FROM fashion_shop.user`;

    connection.query(`${sql}`, (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }

  // [GET] /admin/count/product
  countProduct(req, res, next) {
    let sql = `SELECT COUNT(*) as total FROM fashion_shop.product`;

    connection.query(`${sql}`, (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }

  // [DELETE] /admin/delete/user/:${id}
  deleteUser(req, res, next) {
    // console.log("params: ", req.params);
    let sql = `DELETE FROM user where idUser = ? `;

    connection.query(`${sql}`, [req.params.id], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }

  // [DELETE] /admin/delete/product/:${id}
  deleteProduct(req, res, next) {
    // console.log("params: ", req.params);
    let sql = `DELETE FROM product where idProduct = ? `;

    connection.query(`${sql}`, [req.params.id], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}

module.exports = new AdminController();

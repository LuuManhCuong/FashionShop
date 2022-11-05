const connection = require("../config/database");
const authen = require("../middlewares/authen");

class AdminController {
  // [GET] /admin
  admin(req, res, next) {
    // authen.verifyToken()
    let sql = `select * from user`;
    let sql2 = `select * from product`;

    connection.query(`${sql}; ${sql2}`, (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}

module.exports = new AdminController();

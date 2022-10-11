const connection = require("../config/database");
const authen = require("../middlewares/authen")

class HomeControllers {
  // [GET] /home
  home(req, res, next) {
    // authen.verifyToken()
    let sql2 = `select * from user`;
    connection.query(`${sql2}`, (err, result) => {
      err ? console.log(err) : res.send(result);
    });
  }
}

module.exports = new HomeControllers();

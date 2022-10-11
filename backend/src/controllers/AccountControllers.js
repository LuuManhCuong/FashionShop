const connection = require("../config/database");
const account = require("../middlewares/account");
const authen = require("../middlewares/authen");
const { v4: uuidv4 } = require("uuid");

class AccountControllers {
  //   [POST] /register
  register(req, res, next) {
    const id = uuidv4();
    const hashPassword = account.createPassword(req.body.password);

    let sql =
      "INSERT INTO user (idUser, username, password, email) VALUES (?, ?, ?, ?) ";
    // simple query
    connection.query(
      sql,
      [id, req.body.username, hashPassword, req.body.email],
      function (err, results) {
        if (err) {
          throw err;
        }
        res.redirect("/home");
      }
    );
  }

  //   [POST] /login
  login(req, res) {
    const sql = "select * from user where user.username = ? limit 1";
    connection.query(sql, [req.body.username], (err, results) => {
      if (err) {
        throw err;
      }
      if (results[0]) {
        let checkPassword = account.checkPassword(
          req.body.password,
          results[0].password
        );

        const dataToken = {
          username: req.body.username,
          email: results[0].email,
        };

        // kiểm tra password sau khi hash và kiểm tra so vs DB
        checkPassword === true || req.body.password === results[0].password
          ? res.json(authen.createToken(dataToken))
          : res.status(404).json("sai mật khẩu");
      } else {
        res.status(404).json("ko tìm thấy user");
      }
    });
  }

  // check username or email
  // check password
  // gửi token
  // cấu hình redux saga
  // sửa frontend
}

module.exports = new AccountControllers();

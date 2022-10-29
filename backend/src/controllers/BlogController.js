const connection = require("../config/database");
const authen = require("../middlewares/authen");

class BlogControllers {
  // [GET] /blog
  blog(req, res, next) {
    // authen.verifyToken()
    let sql = `SELECT *, DATE_FORMAT(blog.createAt, '%y/%m/%d') as timeCreate FROM fashion_shop.blog`;
    let sql2 = `SELECT *, DATE_FORMAT(blog.createAt, '%y/%m/%d') as timeCreate FROM fashion_shop.blog  ORDER BY blog.createAt DESC limit 3`;

    connection.query(`${sql}; ${sql2}`, (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}

module.exports = new BlogControllers();

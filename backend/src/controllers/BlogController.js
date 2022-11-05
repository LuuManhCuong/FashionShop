const connection = require("../config/database");
const authen = require("../middlewares/authen");

class BlogControllers {
  // [GET] /blog
  blog(req, res, next) {
    // authen.verifyToken()
    let sql = `SELECT *, DATE_FORMAT(blog.createAt, '%y/%m/%d') as timeCreate FROM fashion_shop.blog where blog.category = ? LIMIT 4 OFFSET ?`;
    let sql2 = `SELECT *, DATE_FORMAT(blog.createAt, '%y/%m/%d') as timeCreate FROM fashion_shop.blog  ORDER BY blog.createAt DESC limit 3`;
    connection.query(
      `${sql}; ${sql2}`,
      [req.query.category, Number(req.query.page || 0)],
      (err, result) => {
        err ? console.log(err) : res.json(result);
      }
    );
  }

  // [GET] /blog/count
  countBlog(req, res, next) {
    // console.log(req.query.category);
    let sql = `SELECT COUNT(*) as total FROM fashion_shop.blog where blog.category = ?`;

    connection.query(`${sql}`, [req.query.category], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
}

module.exports = new BlogControllers();

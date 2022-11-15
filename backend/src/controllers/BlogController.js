const connection = require("../config/database");
const authen = require("../middlewares/authen");
const cloudinary = require("../config/cloudnary");

const { v4: uuidv4 } = require("uuid");

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

  async createBlog(req, res, next) {
    console.log(req.body);

    const d = new Date();
    let day = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();

    let fullDay = `${year}-${month}-${day}`;

    const { field, content, title, image } = req.body;

    const id = uuidv4();
    // id author cho tương lai
    let sql = `INSERT INTO  blog (idblog,title,content,category,createAt,image,author)   value (?,?,?,?,?,?,'id author')`;

    connection.query(
      `${sql}`,
      [id, title, content, field, fullDay, image, "5555"],
      (err, result) => {
        err ? console.log(err) : res.json("");
      }
    );
  }

  // [get] blog/detail/:id
  getBlogDetail(req, res, next) {
    let sql = "select *   from blog where idblog = ?";

    connection.query(`${sql}`, [req.params.id], (err, result) => {
      err ? console.log(err) : res.json(result);
    });
  }
  
}

module.exports = new BlogControllers();

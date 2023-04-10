const connection = require("../config/database");

class SearchController {
  // [/search]
  SearchProduct(req, res, next) {
    const keySearch = req.query.name.replace("'", "");
    const size = req.query.size;
    console.log("keysearch: ", req.query.name.replace("'", ""));
    if (size == "less") {
      // render vào search

      let sql = `select* from product WHERE category LIKE '%${keySearch}%' GROUP BY category LIMIT ${5}`;
      let sql2 = `select* from product WHERE name LIKE '%${keySearch}%' LIMIT ${3}`;
      console.log("sql: ", sql);
      connection.query(`${sql};${sql2}`, function (err, result) {
        err ? console.log(err) : res.json(result);
      });
    } else {
      // render vao product
      let sql = `select* from product WHERE name LIKE '%?%' or category LIKE '%?%' `;
      console.log("pr");
      connection.query(sql, [keySearch, keySearch], function (err, result) {
        err ? console.log(err) : res.json(result);
      });
    }
  }
}
module.exports = new SearchController();

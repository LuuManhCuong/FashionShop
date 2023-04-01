const connection = require("../config/database");

class SearchController {
  // [/search]
  SearchProduct(req, res, next) {
    // const keySearch = req.query.name;
    // const size = req.query.size;
    // // console.log("query: ", req.query);
    // if (size == "less") {
    //   // render vào search
    //   let sql =
    //     "select* from product WHERE category LIKE `% ? %`  GROUP BY category LIMIT 5";
    //   let sql2 = "select* from product WHERE name LIKE `% ? %` LIMIT 3";

    //   let sql3 =
    //     "SELECT * FROM product WHERE category LIKE ? GROUP BY category LIMIT 5; SELECT * FROM product WHERE name LIKE ? LIMIT 3;";
    //   connection.query(
    //     `${sql3}}`,
    //     [`'%${keySearch}%'`, `'%${keySearch}%'`],
    //     function (err, result) {
    //       err ? console.log(err) : res.json(result);
    //     }
    //   );
    // } else {
    //   // render vao product
    //   let sql = `select* from product WHERE name LIKE '%?%' or category LIKE '%?%' `;
    //   connection.query(sql, [keySearch, keySearch], function (err, result) {
    //     err ? console.log(err) : res.json(result);
    //   });
    // }

    return 0;
  }
}
module.exports = new SearchController();

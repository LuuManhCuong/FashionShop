const connection = require("../config/database");
const { v4: uuidv4 } = require("uuid");

class ShopControllers {
  // [GET] /shop
  shop(req, res, next) {
    // console.log("filter: ", req.query.filter);
    // console.log("size: ", req.query.size);

    if (
      typeof req.query.filter != "undefined" &&
      typeof req.query.size != "undefined"
    ) {
      let filters = `"${req.query.filter.join('","')}"`;
      let sizes = `"${req.query.size.join('","')}"`;
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? 
      and product.size in (${sizes}) and product.category in (${filters}) 
      and product.price <= ? LIMIT 6 OFFSET ? `;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    } else if (
      typeof req.query.filter != "undefined" &&
      typeof req.query.size == "undefined"
    ) {
      let filters = `"${req.query.filter.join('","')}"`;
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? 
      and product.category in (${filters}) and product.price <= ? LIMIT 6 OFFSET ? `;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    } else if (
      typeof req.query.size != "undefined" &&
      typeof req.query.filter == "undefined"
    ) {
      // console.log("roi vaof size");
      let sizes = `"${req.query.size.join('","')}"`;
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? 
      and product.size in (${sizes}) and product.price <= ? LIMIT 6 OFFSET ? `;
      console.log(sql);
      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    } else {
      let sql = `SELECT * FROM fashion_shop.product where product.gender=? and product.price <= ? order by product.price LIMIT 6 OFFSET ?`;
      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price, Number(req.query.page || 0)],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    }
  }
  // [GET] /shop/detail/:id
  productDetail(req, res, next) {
    // console.log(req.params);
    let sql = `SELECT url FROM fashion_shop.image_product where 
    image_product.idProduct = ?  `;

    connection.query(`${sql}`, [req.params.id], (err, result) => {
      err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
    });
  }
  // [GET] /shop/detail/info/:id
  productDetailInfo(req, res, next) {
    // console.log(req.params)
    let sql = `SELECT * FROM fashion_shop.product where idProduct = ?  `;

    connection.query(`${sql}`, [req.params.id], (err, result) => {
      err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
    });
  }

  // [GET] /shop/count
  countProduct(req, res, next) {
    if (
      typeof req.query.filter != "undefined" &&
      typeof req.query.size != "undefined"
    ) {
      let filters = `"${req.query.filter.join('","')}"`;
      let sizes = `"${req.query.size.join('","')}"`;

      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product where product.gender = ? 
      and product.category in (${filters}) 
      and product.category in (${sizes}) and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    } else if (typeof req.query.filter != "undefined") {
      // console.log(req.query.filter);
      let filters = `"${req.query.filter.join('","')}"`;
      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product where product.gender = ? and product.category in (${filters}) and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    } else if (typeof req.query.size != "undefined") {
      let sizes = `"${req.query.size.join('","')}"`;
      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product 
      where product.gender = ? 
      and product.size in (${sizes}) and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    } else {
      let sql = `SELECT COUNT(*) as total FROM fashion_shop.product 
      where product.gender = ? and product.price <= ?`;

      connection.query(
        `${sql}`,
        [req.query.gender, req.query.price],
        (err, result) => {
          err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
        }
      );
    }
  }

  // [GET] /shop/minPrice/maxPrice
  getPrice(req, res, next) {
    let sql = `SELECT max(product.price)as maxPrice, min(product.price)as minPrice FROM fashion_shop.product `;

    connection.query(`${sql}`, (err, result) => {
      err ? res.status(401).json("có lỗi xảy ra") : res.json(result);
    });
  }

  // [POST] /cart/add
  cartAdd(req, res) {
    const id = uuidv4();

    let sql =
      "INSERT INTO cart (idCart, idUser, idProduct, time) VALUES (?, ?, ?, ?) ";

    connection.query(
      sql,
      [id, req.body.idUser, req.body.idProduct, req.body.time],
      function (err, results) {
        if (err) {
          return res.send("ko thể thêm vào giỏ hàng");
        }
        res.status(200).json("thêm vào giỏ hàng thành công");
      }
    );
  }

  // [GET] /cart/:idUser
  getCart(req, res) {
    let sql = `SELECT 
    cart.idCart, 
    product.avatar, 
    product.inCart, 
    user.username, 
    product.name as productName, 
    product.price, 
    product.idProduct
    FROM cart
    INNER JOIN user
    ON cart.idUser = user.idUser
    INNER JOIN fashion_shop.product
    ON cart.idProduct = product.idProduct 
    where cart.idUser = ? 
    order by cart.time desc`;

    connection.query(sql, [req.params.idUser], function (err, results) {
      if (err) {
        return res.status(404).send("lỗi");
      }
      res.status(200).json(results);
    });
  }

  // [DELETE] /cart/delete:idCart
  cartDelete(req, res) {
    let sql = `DELETE FROM cart where idCart = ?`;

    connection.query(sql, [req.params.idCart], function (err, results) {
      if (err) {
        return res.status(404).send("lỗi");
      }
      res.status(200).json(results);
    });
  }

  // [UPDATE] /cart/update/incart/:idProduct
  inCart(req, res) {
    let sql = `UPDATE product
    SET inCart = ?
    WHERE idProduct = ?`;

    connection.query(
      sql,
      [req.body.inCart, req.params.idProduct],
      function (err, results) {
        if (err) {
          return res.status(404).send("lỗi");
        }
        res.status(200).json(results);
      }
    );
  }

  // [POST] /like
  like(req, res) {
    const id = uuidv4();
    const date = new Date();
    let getDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    let sql = `INSERT INTO like_post 
    (id, idPost, idUser, createAt)
    VALUES (?, ?, ?, ?)`;

    // console.log(req.body);

    connection.query(
      sql,
      [id, req.body.idProduct, req.body.idUser, getDate],
      function (err, results) {
        if (err) {
          return res.status(404).send("lỗi");
        }
        res.status(200).json(req.body.idProduct);
      }
    );
  }

  // [GET] /like/:idProduct
  getLike(req, res) {
    let sql = `SELECT * FROM fashion_shop.like_post where idPost = ?`;
    // console.log("pream:", req.params);
    connection.query(sql, [req.params.idProduct], function (err, results) {
      if (err) {
        return res.status(404).send("lỗi");
      }
      res.status(200).json(results);
    });
  }

  // [DELETE] /dislike
  dislike(req, res) {
    let sql = `DELETE FROM like_post WHERE idPost=? and idUser = ?`;
    // console.log("quẻy:", req.query);
    connection.query(
      sql,
      [req.query.idProduct, req.query.idUser],
      function (err, results) {
        if (err) {
          return res.status(404).send("lỗi");
        }
        res.status(200).json(req.query.idProduct);
      }
    );
  }

  // [PATCH] /setlike/:idProduct
  setLike(req, res) {
    let sql = `UPDATE product
    SET product.like = ?
    WHERE idProduct = ?`;

    // console.log("prams:", req.params);
    // console.log("body:", req.body);

    connection.query(
      sql,
      [req.body.like, req.params.idProduct],
      function (err, results) {
        if (err) {
          return res.status(404).send("lỗi");
        }
        res.status(200).json(req.params.idProduct);
      }
    );
  }

  // [GET] /like/product/:idUser
  getProductLiked(req, res) {
    let sql = `SELECT idPost FROM fashion_shop.like_post where idUser = ?`;
    // console.log("pream:", req.params);
    connection.query(sql, [req.params.idUser], function (err, results) {
      if (err) {
        return res.status(404).send("lỗi");
      }
      res.status(200).json(results);
    });
  }
}

module.exports = new ShopControllers();

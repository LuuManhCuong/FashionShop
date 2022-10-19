const jwt = require("jsonwebtoken");

class authen {
  createToken(data) {
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });
    return token;
  }

  verifyToken(token) {
    const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return result;
  }

  
}

module.exports = new authen();

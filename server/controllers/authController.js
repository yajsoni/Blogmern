const jwt = require("jsonwebtoken");
const { expressjwt: expressjwt } = require("express-jwt");

exports.login = (req, res) => {
  //data of username, password
  const { username, password } = req.body;
  if (password == 12345678) {
    //Login
    const token = jwt.sign({ username }, "thisisforblogmern", {
      expiresIn: "1d",
    });
    return res.json({
      token,
      username,
    });
  } else {
    return res.status(400).json({
      error: "Invalid Password!",
    });
  }
};

// Token  validation
exports.requireLogin = expressjwt({
  secret: "thisisforblogmern",
  algorithms: ["HS256"], //มีหลายตัวให้เลือกใช้
  userProperty: "auth",
});

export default (req, res) => {
  console.log(req.headers.x_auth_token);
  if (req.headers.x_auth_token) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      authenticated: true,
    });
  } else {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.json({
      authenticated: false,
    });
  }
};

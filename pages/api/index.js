export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    running: true,
    version: 0.1,
    secure: true,
  });
};

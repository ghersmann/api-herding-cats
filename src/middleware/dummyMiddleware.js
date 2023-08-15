const { escape } = require("html-escaper");

module.exports = (jsonServer, req, res, next) => {
  const isDetailRoute = req.originalUrl.split("/").length > 2;
  if (
    (req.url === "/questions" || isDetailRoute) &&
    (req.method === "POST" || req.method === "PUT")
  ) {
  }
  next();
};

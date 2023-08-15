module.exports = (jsonServer, req, res) => {
  if (req.method !== "POST") {
    res
      .status(400)
      .send("Wrong HTTP method. Only post is allowed for this route.");
  }

  return res.json({
    msg: "Hello World",
  });
};

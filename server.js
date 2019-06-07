const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.NODE_ENV || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.post("/api/login", (req, res) => {
    console.log("got to server");
    const { email, password } = req.body;
    res.json({
      email,
      password,
      success: "true"
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`listening on port ${port}`);
  });
});

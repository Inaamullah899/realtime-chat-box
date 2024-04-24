var express = require("express");
var router = express.Router();
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 6000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
server.listen(PORT, () => console.log(`server has started on ${PORT}`));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

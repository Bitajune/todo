var express = require("express");
var router = express.Router();
const todos = require("../data/todos");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "My To-Do List", todos });
});

router.post("/", (req, res) => {
  todos.push({ todo: req.body.list, notDone: true });
  res.redirect("/");
});

module.exports = router;

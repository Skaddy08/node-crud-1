const express = require("express");
const userController = require("../controllers/user.controller.js");
const upload = require("../middlewares/multer.js");

const router = express.Router();

router.get("/", userController.getUserCount, (req, res) => {
  res.render("home");
});

router.get("/add", (req, res) => {
  res.render("form");
});

router.post(
  "/submit",
  upload.single("passportImage"),
  userController.createUser
);

router.get("/success", (req, res) => {
  res.render("success");
});

router.get("/users", userController.getAllUsers);

router.delete("/users/:id", userController.deleteUser);

router.get("/users/:id/edit", userController.renderUpdateForm);

router.put(
  "/users/:id",
  upload.single("passportImage"),
  userController.updateUser
);

module.exports = router;

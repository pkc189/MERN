const express = require("express");
const userCtrl = require("../controllers/user.controller.js");
const authCtrl = require("../controllers/auth.controller.js");

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);
// router
//   .route("/api/users/:userId")
//   .get(userCtrl.read)
//   .put(userCtrl.update)
//   .delete(userCtrl.remove);

router.param("userId", userCtrl.userByID);

router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

module.exports = router;

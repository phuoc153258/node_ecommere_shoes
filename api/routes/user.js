const express = require("express");
const router = express.Router();
const checkAuths = require("../middleware/check-auth");

const UserController = require("../controllers/user");

router.post("/signup", UserController.signUp);

router.post("/login", UserController.logIn);
router.get("/is-admin", checkAuths.userAuth, UserController.isAdmin);

router.delete("/:userId", checkAuths.adminAuth, UserController.deleteUser);

router.get("", checkAuths.adminAuth, UserController.getAll);

router.patch(
  "/me/password",
  checkAuths.userAuth,
  UserController.updatePassword
);

router.put("/me", checkAuths.userAuth, UserController.updateProfileUser);

router.get("/me", checkAuths.userAuth, UserController.getProfile);

module.exports = router;

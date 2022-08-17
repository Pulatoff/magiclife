const router = require("express").Router();
const controller = require("../controller/paymeController");
router.route("/payme").post(controller.handler);

module.exports = router;

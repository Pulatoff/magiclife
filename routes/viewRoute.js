const router = require("express").Router();
const controller = require("../controller/viewController");

router.route("/kassa").get(controller.openKassa);
router.route("/save-data").post(controller.onenPayme);
module.exports = router;

const express = require("express");
const router = express.Router();
const controllers = require("../Controllers/controller")

router.route('/').get(controllers.getAllLists).post(controllers.addList);
router.route('/:listID').get(controllers.getList).patch(controllers.updateList).delete(controllers.deleteList)

module.exports = router;
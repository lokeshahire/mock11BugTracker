const { createBug, getBug, updateBug, deleteBug } = require("../controllers/bug.controller");
const router = require("express").Router();
router.post("/create", createBug);
router.get("/", getBug);
router.put("/update/:id", updateBug)
router.delete("/delete/:id", deleteBug)
// router.put("/mark/:id", markBug)
module.exports = router;
const { getToDo, saveToDo, updateToDo, deleteToDo, getATodo } = require("../controller/todoController");
const { Router } = require("express");

const router = Router();
router.get("/get", getToDo);
router.get("/get/:id", getATodo);
router.post("/saved", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
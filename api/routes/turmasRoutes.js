const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();

router.get("/turmas", TurmaController.list);
router.get("/turmas/:id", TurmaController.listById);
router.post("/turmas", TurmaController.register);
router.put("/turmas/:id", TurmaController.update);
router.delete("/turmas/:id", TurmaController.delete);
router.post("/turmas/:id/restaura", TurmaController.restore);

module.exports = router;

const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

router.get("/niveis", NivelController.list);
router.get("/niveis/:id", NivelController.listById);
router.post("/niveis", NivelController.register);
router.put("/niveis/:id", NivelController.update);
router.delete("/niveis/:id", NivelController.delete);
router.post("/niveis/:id/restaura", NivelController.restore);

module.exports = router;

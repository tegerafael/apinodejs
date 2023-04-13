const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.list);
router.get("/pessoas/:id", PessoaController.listById);
router.post("/pessoas", PessoaController.register);
router.put("/pessoas/:id", PessoaController.update);
router.delete("/pessoas/:id", PessoaController.delete);

module.exports = router;

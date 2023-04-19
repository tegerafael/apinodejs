const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listAtivos);
router.get("/pessoas/todos", PessoaController.list);
router.get("/pessoas/:id", PessoaController.listById);
router.post("/pessoas", PessoaController.register);
router.put("/pessoas/:id", PessoaController.update);
router.delete("/pessoas/:id", PessoaController.delete);
router.post("/pessoas/:id/restaura", PessoaController.restore);
router.get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatricula);
router.get(
  "/pessoas/matricula/:turmaId/confirmadas",
  PessoaController.pegaMatriculaPorTurma
);
router.get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas);

router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.listMatricula
);
router.post(
  "/pessoas/:estudanteId/matricula",
  PessoaController.registerMatricula
);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.updateMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.deleteMatricula
);
router.post(
  "/pessoas/:estudanteId/matricula/:matriculaId/restaura",
  PessoaController.restoreMatricula
);

module.exports = router;

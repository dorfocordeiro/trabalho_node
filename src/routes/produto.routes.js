const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produto.controller");

// Quando chamarem GET /produtos, executa a função listarProdutos do Controller
router.get("/produtos", produtoController.listarProdutos);

router.get("/produtos/:id", produtoController.buscarProdutoPorId);

router.post("/produtos", produtoController.cadastrarProduto);

router.put("/produtos/:id", produtoController.atualizarProduto);

router.delete("/produtos/:id", produtoController.deletarProduto);

module.exports = router;

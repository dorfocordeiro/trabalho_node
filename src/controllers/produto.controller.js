const produtoService = require("../services/produto.service");

const listarProdutos = (req, res) => {
  const produtos = produtoService.buscarTodosOsProdutos();

  res.json(produtos);
};

const buscarProdutoPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtoService.buscarProdutoPorId(id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  return res.json(produto);
};

const cadastrarProduto = (req, res) => {
  const produto = produtoService.cadastrarProduto(req.body);

  return res.status(201).json(produto);
};

const atualizarProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtoService.atualizarProduto(id, req.body);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  return res.json(produto);
};

const deletarProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtoService.deletarProduto(id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  return res.status(204).send();
};

module.exports = {
  listarProdutos,
  buscarProdutoPorId,
  cadastrarProduto,
  atualizarProduto,
  deletarProduto,
};

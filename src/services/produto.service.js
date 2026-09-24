const produtoModel = require("../models/produto.model");

const buscarTodosOsProdutos = () => {
  return produtoModel.listar();
};

const buscarProdutoPorId = (id) => {
  return produtoModel.buscarPorId(id);
};

const cadastrarProduto = (produto) => {
  return produtoModel.criar(produto);
};

const atualizarProduto = (id, produtoAtualizado) => {
  return produtoModel.atualizar(id, produtoAtualizado);
};

const deletarProduto = (id) => {
  return produtoModel.remover(id);
};

module.exports = {
  buscarTodosOsProdutos,
  buscarProdutoPorId,
  cadastrarProduto,
  atualizarProduto,
  deletarProduto,
};

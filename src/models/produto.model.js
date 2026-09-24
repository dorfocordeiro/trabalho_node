const produtos = [];
let proximoId = 1;

class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

const listar = () => produtos;

const buscarPorId = (id) => produtos.find((produto) => produto.id === id);

const criar = (dados) => {
  const novoProduto = new Produto(proximoId++, dados.nome, dados.preco);

  produtos.push(novoProduto);
  return novoProduto;
};

const atualizar = (id, dados) => {
  const index = produtos.findIndex((produto) => produto.id === id);

  if (index === -1) return null;

  produtos[index] = new Produto(id, dados.nome, dados.preco);
  return produtos[index];
};

const remover = (id) => {
  const index = produtos.findIndex((produto) => produto.id === id);

  if (index === -1) return null;

  return produtos.splice(index, 1)[0];
};

module.exports = {
  Produto,
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};

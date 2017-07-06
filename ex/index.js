const produto = {
  nome: 'Notebook',
  preco: 2000,
  desconto: 0.05
}

function clone (objeto) {
  return { ...objeto };
}

const novoProduto = clone(produto);
novoProduto.nome = 'Smartphone';

console.log(produto, novoProduto);

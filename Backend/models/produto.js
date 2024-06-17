class Produto {
  constructor(id, nome, descricao, preco, imagemName) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.imagemName = imagemName;
  }
}

module.exports = Produto;
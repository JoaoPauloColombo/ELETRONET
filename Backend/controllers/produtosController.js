// Importando módulos necessários
const fs = require('fs');
const Produto = require('../models/produto');
const produtos = require('../database/produtos.json');
const multer = require("multer");
const sharp = require("sharp");
let nextId = 1;
const path = require('path');
const filePath = path.join(__dirname, '../database/produtos.json');

// Configurando o multer para lidar com uploads de arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Definindo o controlador de produto
const produtoController = {

  // GET todos os produtos
  async getAll(req, res) {
    // Se não houver produtos, retorna um erro 404
    if (produtos.length === 0) {
      res.status(404).json({ message: 'Nenhum produto encontrado' });
    } else {
      // Caso contrário, retorna todos os produtos
      res.json(produtos);
    }
  },

  // GET um único produto pelo id
  async getById(req, res) {
    const id = parseInt(req.params.id);
    // Verifica se o id é válido
    if (isNaN(id)) {
      res.status(400).json({ message: 'ID inválido' });
      return;
    }
    const produto = produtos.find(p => p.id === id);
    // Se o produto não for encontrado, retorna um erro 404
    if (!produto) {
      res.status(404).json({ message: 'Produto não encontrado' });
    } else {
      // Caso contrário, retorna o produto
      res.json(produto);
    }
  },

  // POST um novo produto
  async create(req, res) {
    try {
      // Loga o corpo da requisição e o arquivo
      console.log('Requisição recebida:', req.body, req.file);
      // Gera um novo id para o produto
      let nextId;
      if (produtos.length === 0) {
        nextId = 1;
      } else {
        nextId = produtos[produtos.length - 1].id + 1;
      }
      // Extrai as informações necessárias do corpo da requisição e do arquivo
      const originalName = req.file.originalname;
      const fileName = originalName.split('.').shift();
      const fileExtension = originalName.split('.').pop();
      let count = 1;
      let imagemName = `${fileName}.${fileExtension}`;
      // Verifica se um arquivo com o mesmo nome já existe
      while (fs.existsSync(`uploads/${imagemName}`)) {
        imagemName = `${fileName} (${count}).${fileExtension}`;
        count++;
      }
      const imageData = req.file.buffer;
      const { nome, descricao, preco } = req.body;
      if (preco <= 0) {
        res.status(400).json({ message: 'Preço deve ser um valor positivo' });
        return;
      }
      // Cria um novo produto com as informações extraídas
      const produto = new Produto(nextId, nome, descricao, preco, imagemName);
      produtos.push(produto);
      // Salva a imagem na pasta de uploads
      await sharp(imageData).toFile(`uploads/${imagemName}`);
      // Salva o array de produtos atualizado no arquivo JSON
      fs.writeFileSync(filePath, JSON.stringify(produtos, null, 2));
      // Retorna um código de status 201 e uma mensagem de sucesso
      res.status(201).send('Produto criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).send(`Erro ao criar produto: ${error.message}`);
    }
  },

  // PUT (atualizar) um produto pelo id
  async update(req, res) {
    try {
      // Encontra o produto para atualizar
      const id = req.params.id;
      const produto = produtos.find(p => p.id === parseInt(id));
      if (!produto) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        // Atualiza os campos do produto
        produto.nome = req.body.nome;
        produto.descricao = req.body.descricao;
        const preco = req.body.preco;
        if (preco <= 0) {
          res.status(400).json({ message: 'Preço deve ser um valor positivo' });
          return;
        }
        produto.preco = preco;

        // Se uma nova imagem for fornecida, atualiza a imagem
        if (req.file) {
          const originalName = req.file.originalname;
          const fileName = originalName.split('.').shift();
          const fileExtension = originalName.split('.').pop();
          let count = 1;
          let imagemName = `${fileName}.${fileExtension}`;

          while (fs.existsSync(`uploads/${imagemName}`)) {
            imagemName = `${fileName} (${count}).${fileExtension}`;
            count++;
          }

          // Deleta a imagem antiga
          if (fs.existsSync(`uploads/${produto.imagemName}`)) {
            fs.unlinkSync(`uploads/${produto.imagemName}`);
          }

          // Atualiza o nome da imagem do produto
          produto.imagemName = imagemName;
          await sharp(req.file.buffer).toFile(`uploads/${imagemName}`);
        }

        // Salva o produto atualizado no arquivo JSON
        const filePath = path.join(__dirname, '../database/produtos.json');
        const produtosJson = JSON.stringify(produtos, null, 2);
        fs.writeFileSync(filePath, produtosJson);

        res.json(produto);
      }
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
  },

  async delete(req, res) {
    // Encontra o produto para deletar
    const id = req.params.id;
    const index = produtos.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
      res.status(404).json({ message: 'Produto não encontrado' });
    } else {
      // Remove o produto do array
      const produto = produtos[index];
      produtos.splice(index, 1);

      // Deleta a imagem da pasta de uploads
      const imagePath = `uploads/${produto.imagemName}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      // Salva o array de produtos atualizado no arquivo JSON
      const filePath = path.join(__dirname, '../database/produtos.json');
      try {
        await fs.promises.writeFile(filePath, JSON.stringify(produtos, null, 2));
        res.json({ message: 'Produto deletado com sucesso' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar produto' });
      }
    }
  }
}

module.exports = produtoController;

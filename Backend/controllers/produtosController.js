const db = require('../db');

exports.createProduto = async (req, res) => {
  const { nome, texto } = req.body;
  const foto = req.file.filename; //path

  try {
    const [result] = await db.query(
      'INSERT INTO produtos (nome, texto, foto) VALUES (?,?,?)',
      [nome, texto, foto]
    );
    res.status(201).send(`Produto criado com o ID: ${result.insertId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.getAllProduto = async (req, res) => {
  try {
    const [produtos] = await db.query('SELECT * FROM produtos');
    res.status(200).json(produtos);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.getProdutoById = async (req, res) => {
  const id = req.params.id;
  try {
    const [produtos] = await db.query('SELECT * FROM produtos WHERE id =?', [id]);
    if (produtos.length > 0) {
      res.status(200).json(produtos[0]);
    } else {
      res.status(404).send('Produto não Encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

exports.updateProduto = async (req, res) => {
  const id = req.params.id;
  const { nome, texto } = req.body;
  const foto = req.file? req.file.filename : null;

  try {
    const fields = [];
    const values = [];
    if (nome) {
      fields.push('nome =?');
      values.push(nome);
    }
    if (texto) {
      fields.push('texto =?');
      values.push(texto);
    }
    if (foto) {
      fields.push('foto =?');
      values.push(foto);
    }
    if (fields.length === 0) {
      return res.status(400).send('Nenhum campo para atualizar');
    }
    values.push(id);
    const query = `UPDATE produtos SET ${fields.join(',')} WHERE id =?`;
    const [result] = await db.query(query, values);
    if (result.affectedRows > 0) {
      res.status(200).send('Foi atualizado!');
    } else {
      res.status(404).send('Não foi possível atualizar');
    }
  } catch (err) {
    console.error('Erro ao atualizar o Produto', err);
    res.status(500).send(err.message);
  }
};

exports.deleteProduto = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await db.query('DELETE FROM produtos WHERE id =?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).send('Produto deletada com sucesso');
    } else {
      res.status(404).send('Produto não encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
import db from '../db';

export const createNoticia = async (req, res) => {
  const { nome, texto } = req.body;
  const foto = req.file.filename;
  
  try {
    const [result] = await db.query(
      'INSERT INTO noticias (nome, texto, foto) VALUES (?,?,?)',
      [nome, texto, foto]
    );
    res.status(201).send(`Noticia criado com o ID: ${result.insertId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

export const getAllNoticia = async (req, res) => {
  try {
    const [noticias] = await db.query('SELECT * FROM noticias');
    res.status(200).json(noticias);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

export const getNoticiaById = async (req, res) => {
  const id = req.params.id;
  try {
    const [noticias] = await db.query('SELECT * FROM noticias WHERE id =?', [id]);
    if (noticias.length > 0) {
      res.status(200).json(noticias[0]);
    } else {
      res.status(404).send('Noticia não Encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

export const updateNoticia = async (req, res) => {
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
    const query = `UPDATE noticias SET ${fields.join(',')} WHERE id =?`;
    const [result] = await db.query(query, values);
    if (result.affectedRows > 0) {
      res.status(200).send('Foi atualizado!');
    } else {
      res.status(404).send('Não foi possível atualizar');
    }
  } catch (err) {
    console.error('Erro ao atualizar o noticia', err);
    res.status(500).send(err.message);
  }
};

export const deleteNoticia = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await db.query('DELETE FROM noticias WHERE id =?', [id]);
    if (result.affectedRows > 0) {
      res.status(200).send('Noticia deletada com sucesso');
    } else {
      res.status(404).send('Noticia não encontrada');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
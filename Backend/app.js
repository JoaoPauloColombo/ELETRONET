// Importa módulos necessários
const express = require('express');
const app = express();
const produtoRoute = require('./routes/produtoRoute');
const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

// Configuração de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Rota para produtos
app.use('/produtos', produtoRoute);

// Servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Inicia o servidor na porta 5000
app.listen(5000, () => {
  console.log('Server started on port 5000');
});

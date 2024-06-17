// Importa módulos necessários e o controlador de produtos
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtosController');
const multer = require('multer');

// Configura o armazenamento do multer na memória
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define rotas para as operações CRUD
router.get('/', produtoController.getAll);         
router.get('/:id', produtoController.getById);       
router.post('/', upload.single('image'), produtoController.create);  
router.put('/:id', upload.single('image'), produtoController.update); 
router.delete('/:id', produtoController.delete);     

// Exporta o roteador
module.exports = router;

const express = require('express')
const router = express.Router();
const produtosController = require('../controllers/produtosController')
const upload = require('../config/multerConfig')

router.post('/', upload.single('foto'), produtosController.createProduto)
router.put('/:id', upload.single('foto'), produtosController.updateProduto)
router.get('/', produtosController.getAllProduto)
router.get('/:id', produtosController.getProdutoById)
router.delete('/:id', produtosController.deleteProduto)

module.exports = router
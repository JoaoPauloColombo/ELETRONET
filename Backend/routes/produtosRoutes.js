import express from 'express';
import { noticiasController } from '../controllers/produtosController';
import { upload } from '../config/multerConfig';

const router = express.Router();

router.post('/', upload.single('foto'), noticiasController.createNoticia);
router.put('/:id', upload.single('foto'), noticiasController.updateNoticia);
router.get('/', noticiasController.getAllNoticia);
router.get('/:id', noticiasController.getNoticiaById);
router.delete('/:id', noticiasController.deleteNoticia);

export default router;
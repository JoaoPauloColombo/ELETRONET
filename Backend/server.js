import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname,process} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

import noticiasRoutes from './routes/produtosRoutes.js';
app.use('/api/noticias', noticiasRoutes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
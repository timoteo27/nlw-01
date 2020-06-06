import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(express.json()); //função use para adicionar plugins no express. Para entender json no corpo body (post)
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); //utilizado para servir arquivos estáticos (imagens, PDF, arquivos...)

app.use(errors());

app.listen(3333);
import express from 'express';
import cors from 'cors'
import routes from './routes/routes'

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || '3333';

app.use(express.json());
app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server started with port: ${port}`);
})
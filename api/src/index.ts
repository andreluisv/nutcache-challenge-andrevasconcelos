import express from 'express';
import cors from 'cors'

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || '3333';

app.use(express.json());
app.use(cors())

// Test route
app.use('/ok', express().get('/', async (_, res) => { return res.sendStatus(200); }))

app.listen(port, () => {
  console.log(`Server started with port: ${port}`);
})
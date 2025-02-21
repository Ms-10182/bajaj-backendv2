import express, { urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();

app.use(cors({
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(urlencoded({ extended: true })); 

import router from './routes/user.routes.js';

app.use("/api/v1/",router);

export {app}
import express, { Express } from "express";
import cors from 'cors';
import PromiseRouter from "express-promise-router";
import dotenv from 'dotenv';
import bodyParser from "body-parser";

import { MainRouter } from "./routes/MainRoutes";

const router = PromiseRouter();
const setupRouter = new MainRouter();
const mainRouter = setupRouter.router;

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

router.use(mainRouter);
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
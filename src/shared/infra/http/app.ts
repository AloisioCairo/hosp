import "reflect-metadata";
// import "dotenv/config";
// import express from "express";
import * as express from 'express';
// import "express-async-errors"

import createConnection from "../typeorm"; // Importação do banco de dados

import "../../container";

import { router } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use(router);

export { app }
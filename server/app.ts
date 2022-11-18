import { Application } from "express";
import express from "express";
import bodyParser from "express";
import cors from "cors";

import routes from "./app/router";

const app: Application = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));
/** */
app.use(routes);

export default app;

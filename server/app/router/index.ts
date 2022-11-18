import usuariosRoutes from "./usuariosRoutes";

import { Router } from "express";

const routes = Router();

routes.use("/usuarios/", usuariosRoutes);

export default routes;

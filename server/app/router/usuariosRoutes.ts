import usuariosController from "../controller/usuariosController";
import { Router } from "express";

const usuariosRoutes = Router();

usuariosRoutes.post("/verificaUsuario/", usuariosController.verificaUsuario);

export default usuariosRoutes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosController_1 = __importDefault(require("../controller/usuariosController"));
const express_1 = require("express");
const usuariosRoutes = (0, express_1.Router)();
usuariosRoutes.post("/verificaUsuario/", usuariosController_1.default.verificaUsuario);
exports.default = usuariosRoutes;

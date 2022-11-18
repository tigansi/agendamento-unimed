"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuariosController = {
    verificaUsuario(req, res) {
        const email = req.body.email;
        const senha = req.body.senha;
        if (email == "tigansi@unimedpelotas.com.br" && senha == "teste") {
            const result = {
                message: "Bem vindo",
                sucesso: true,
            };
            res.status(201).json(result);
        }
    },
};
exports.default = usuariosController;

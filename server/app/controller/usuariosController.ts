import { Request, Response } from "express";

const usuariosController = {
  verificaUsuario(req: Request, res: Response) {
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

export default usuariosController;

import express from "express";
import clientController from "../controllers/clientController.js";

const routes = express.Router();

routes.get("/clients-data", clientController.listarClientes)
routes.post("/clients-data", clientController.cadastrarCliente)
routes.post("/login", clientController.logaCliente)

export default routes;
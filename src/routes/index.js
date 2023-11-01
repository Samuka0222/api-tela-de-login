import express from "express";
import clients from "./clientsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Servidor do Samukinha está ONLINE"));

    app.use(express.json(), clients);
};

export default routes
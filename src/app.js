import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors"
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErro.js";

db.on("error", console.log.bind(console, "Erro de conexão"))

db.once("open", () => {
    console.log("conexão com o banco de dados estabelecida")
})

const origensPermitidas = ['http://127.0.0.1:5501', 'http://localhost:3000']

const corsOptions = {
    origin: origensPermitidas
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

routes(app)

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app
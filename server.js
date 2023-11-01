import app from "./src/app.js";
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`servidor escutando em http://localhost:${PORT}`)
})
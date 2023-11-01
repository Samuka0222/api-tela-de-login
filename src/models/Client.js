import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        nome: {
            type: String,
            required: [true, "É obrigatório ter um nome cadastrado."]
        },
        sobrenome: {
            type: String,
            required: [true, "É obrigatório ter um sobrenome cadastrado."]
        },
        email: {
            type: String,
            required: [true, "É obrigatório ter um e-mail cadastrado."]
        },
        usuario: {
            type: String,
            required: [true, "É obrigatório ter um usuário cadastrado."]
        },
        senha: {
            type: String,
            required: [true, "É obrigatório ter uma senha cadastrada."]
        },


    }, {
        versionKey: false
    }
)

const clients = mongoose.model("clients", clientSchema, "clients-data")

export default clients
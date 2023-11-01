import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: [true, "É necessário um usuário para autenticação"],
        // unique: true,
    },
    senha: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)

export default User
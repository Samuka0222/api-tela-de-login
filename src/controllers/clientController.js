import { clients } from "../models/index.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class clientController {
    // eslint-disable-next-line no-unused-vars
    static listarClientes = async (req, res, next) => {
        try {
            const buscaClients = await clients.find();
            res.status(200).json(buscaClients)
        } catch (erro) {
            next(erro)
        }
    }

    // eslint-disable-next-line no-unused-vars
    static cadastrarCliente = async (req, res, next) => {
        try {
            const {nome, sobrenome, email, usuario, senha} = req.body

            const usuarioExistente = await clients.findOne({ usuario });

            if (usuarioExistente) {
                return res.status(400).json({error: "Nome de usuário já está em uso."})
            }

            const senhaHashed = await bcrypt.hash(senha, 10)
            const novoCliente = new clients({nome, sobrenome, email, usuario, senha: senhaHashed})
            const clienteResultado = await novoCliente.save()
            res.status(201).send(clienteResultado.toJSON())
        } catch (erro) {
            next(erro)
        }
    }

    // eslint-disable-next-line no-unused-vars
    static logaCliente = async (req, res, next) => {
        // eslint-disable-next-line no-unused-vars
        const {usuario, senha} = req.body

        const cliente = await clients.findOne({usuario})
        
        if (!cliente) {
            return res.status(401).json({ error: "Cliente não encontrado"})
        }

        const comparaSenha = await bcrypt.compare(senha, cliente.senha)

        if (!comparaSenha) {
            return res.status(401).json({error: "Credenciais inválidas"})
        }

        const token = jwt.sign({usuario: cliente.usuario}, "secretpassword")
        res.json({ token })
    }
    
}

export default clientController

import express from 'express'
import { getUsuario, getUsuarios, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarioController'

const usuarioRoutes = express.Router()

usuarioRoutes.route('/')
    .get(getUsuarios)
    .post(createUsuario)

usuarioRoutes.route('/:id')
    .get(getUsuario)
    .put(updateUsuario)
    .delete(deleteUsuario)


export default usuarioRoutes
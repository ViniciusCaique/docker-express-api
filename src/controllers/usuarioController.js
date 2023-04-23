

import HttpStatus from '../config/httpStatus.js'
import database from '../config/mysql.js'
import Response from '../domain/response.js'
import QUERY from '../queries/usuarioQuery.js'

export const getUsuarios = (req, res) => {
    database.query(QUERY.SELECT_USUARIOS, (error, results) => {
        if(!results){
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No users found'))
        } else {
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Users found', { users: results }))
        }
    })
}

export const getUsuario = (req, res) => {
    database.query(QUERY.SELECT_USUARIO, [req.params.id], (error, results) => {
        if(!results[0]){
            res.status(HttpStatus.NOT_FOUND.code).send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `User by id ${req.params.id} was not found`))
        } else {
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Users found', results[0] ))
        }
    })
}

export const createUsuario = (req, res) => {
    database.query(QUERY.CREATE_USUARIO, Object.values(req.body), (error, results) => {
        if(!results){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, 'Error'))
        } else {
            const user = { id: results.insertId, ...req.body, created_at: new Date()}
            res.status(HttpStatus.CREATED.code).send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, 'User created', { user }))
        }
    })
}

export const updateUsuario = (req, res) => {
    database.query(QUERY.SELECT_USUARIO, [req.params.id], (error, results) => {
        if(!results[0]){
            res.status(HttpStatus.NOT_FOUND.code).send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `User by id ${req.params.id} was not found`))
        } else {
            database.query(QUERY.UPDATE_USUARIO, [...Object.values(req.body), req.params.id], (error, results) => {
                if(!error){
                    res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'User updated', { id: req.params.id, ...req.body }))
                } else {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, 'error'))
                }
            })
        }
    })
}

export const deleteUsuario = (req, res) => {
    database.query(QUERY.DELETE_USUARIO, [req.params.id], (error, results) => {
        if(results.affectedRows > 0){
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.code, 'User deleted', results[0] ))
        } else {
            res.status(HttpStatus.NOT_FOUND.code).send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, `User by id ${req.params.id} was not found`))
        }
    })
}

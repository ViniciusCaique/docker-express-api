

import HttpStatus from '../config/httpStatus.js'
import database from '../config/mysql.js'
import Response from '../domain/response.js'
import QUERY from '../query/userQuery.js'

export const getUsuarios = (req, res) => {
    database.QUERY(QUERY.SELECT_USUARIOS, (results) => {
        if(!results) {
            res.status(HttpStatus.NOT_FOUND.code).send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Users not found'))
        } else {
            res.status(HttpStatus.OK.code).send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'users found', { users: results }))
        }
    })
}

export const getUsuario = (req, res) => {
    database.QUERY(QUERY.SELECT_USUARIO, [req.params.id], (results) => {
        if(!results[0]) {
            res.status(HttpStatus.NOT_FOUND).send({ msg: 'User not found' })
        } else {
            res.status(HttpStatus.OK.code).send({ msg: 'user found' }, results[0])
        }
    })
}

export const createUsuario = (req, res) => {
    database.QUERY(QUERY.CREATE_USUARIO, Object.values(req.body), (results) => {
        if(!results) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send({ msg: 'error de servidor' })
        } else {
            const user = {
                id: results.insertId, ...req.body, 
                created_at: new Date()
            }
            res.status(HttpStatus.CREATED.code).send({ msg: 'user created'}, { user })
        }
    })
}

export const updateUsuario = (req, res) => {
    database.QUERY(QUERY.SELECT_USUARIO, [req.params.id], (results) => {
        if(!results[0]) {
            res.status(HttpStatus.NOT_FOUND.code).send({ msg: 'user not found' })
        } else {
            database.query(QUERY.UPDATE_USUARIO, [...Object.values(req.body), req.params.id], (results) => {
                if(!error) {
                    res.status(HttpStatus.OK.code).send({ msg: 'user updated'}, {
                        id: req.params.id,
                        ...req.body
                    })
                } else {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send({ msg: 'error de servidor' })
                }
            })
        }
    })
}

export const deleteUsuario = (req, res) => {
    database.QUERY(QUERY.DELETE_USUARIO, [req.params.id], (results) => {
        if(results.affectedRows > 0){
            res.status(HttpStatus.OK.code).send({ msg: 'User deleted' } , results[0])
        } else {
            res.status(HttpStatus.NOT_FOUND.code).send({ msg: `User by id ${req.params.id} was not found` })
        }
    })
}

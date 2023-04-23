
import express from 'express'
import dotenv from 'dotenv'
import Response from './domain/response.js'
import HttpStatus from './config/httpStatus.js'
import usuarioRoutes from './routes/usuarioRoute.js'


dotenv.config()
const PORT = process.env.SERVER_PORT || 3030
const app = express()

app.use(express.json())

app.use('/usuarios', usuarioRoutes)

app.get('/', (req, res) => {
    res.send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Investment API - v1.0'))
})

app.all('*', (req, res) => { 
    res.status(HttpStatus.OK.code).send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Route doesnt exist on the server'))
})

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`)
})


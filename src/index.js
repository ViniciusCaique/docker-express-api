
import express from 'express'
import dotenv from 'dotenv'
import Response from './domain/response.js'


dotenv.config()
const PORT = process.env.SERVER_PORT || 3030
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(new Response(200, 'OK', 'Investment API - v1.0'))
})

app.all('*', (req, res) => res.status(404).send(new Response(404, 'NOT_FOUND', 'Route doesnt exist on the server')))

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`)
})


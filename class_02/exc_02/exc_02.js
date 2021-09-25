const express = require("express")
const fs = require("fs")
const app = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.send('GET data')
})

router.post('/', (req, res) => {
    res.send('POST data')
})

router.put('/', (req, res) => {
    res.send('PUT data')
})

router.delete('/', (req, res) => {
    res.send('DELETE data')
})

app.use(router)

app.listen(3000, () => {
    try {
        console.log('Run server in port 3000')
    } catch (error) {
        console.error(error)
    }
})
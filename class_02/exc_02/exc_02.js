const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json())
app.use('/', require('./route/exc_02_itemsRoute'))

app.listen(3000, () => {
    try {
        console.log('Run server in port 3000')
    } catch (error) {
        console.error(error)
    }
})
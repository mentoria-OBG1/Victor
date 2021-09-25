const express = require('express')
const router = express.Router()

let items = []
let id = null

router.get('/items', async (req, res) => {
    res.status(200).send(items)
})

router.get('/items/:id', async (req, res) => {

})

router.post('/items', async (req, res) => {
    const objItem = req.body

    if (!objItem) {
        res.status(418).send({ message: 'No objItem' })
    }

    items.push({
        'id': id++,
        'title': objItem.title,
        'description': objItem.description
    })

    res.send({ message: `Add item: ${objItem.title}` })
})

router.put('/items/:id', async (req, res) => {

})

router.delete('/items', async (req, res) => {

})

module.exports = router
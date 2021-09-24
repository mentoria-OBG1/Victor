const { createServer } = require('http')
const fs = require('fs')

const TextFilePath = 'names.txt'
let names = []

const server = createServer((req, res) => {
    const fileBuffer = fs.readFileSync(TextFilePath)
    if (fileBuffer) {
        const txt = JSON.stringify(fileBuffer)
        return res.end(txt)
    }

    if (req.url.startsWith("/json") && req.method === "GET") {
        const queryString = req.url.split("?")[1]

        if (!queryString) {
            return res.end(JSON.stringify(names))
        }

        const userName = queryString.split("=")[1]
        console.log(userName)
        res.end(JSON.stringify({
            message: `Hello ${userName}`
        }))
    }

    if (req.url.startsWith("/json") && req.method === "POST") {
        let body = []
        req.on("data", chunck => body.push(chunck))
        req.on("end", () => {
            const json = JSON.parse(Buffer.concat(body).toString())

            if (!json || !json.name) {
                res.statusCode = 400
                return res.end("Bad request")
            }

            names.push(json.name)
            fs.writeFileSync(TextFilePath, names.toString(), "utf-8")

            res.end(JSON.stringify({
                message: `Name add: ${json.name}`
            }))
        })
    }
})

server.listen(3000, () => {
    try {
        console.log('Run server in port 3000')
    } catch (error) {
        console.error(error)
    }
})
const { createServer } = require('http')

let names = []

const server = createServer((req, res) => {
    if (req.url.startsWith("/json") && req.method === "GET") {
        const queryString = req.url.split("?")[1]

        if (!queryString) {
            return res.end(JSON.stringify(names))
        }

        const userName = queryString.split("=")[1]
        res.end(JSON.stringify({
            message: `Hello ${userName}`
        }))
    }

    if (req.url.startsWith("/json") && req.method === "POST") {
        let body = []
        req.on("data", chunck => body.push(chunck))
        req.on("end", () => {
            const json = JSON.parse(Buffer.concat(body).toString())
            names.push(json.name)
            res.end(JSON.stringify({
                message: `Name add: ${json.name}`
            }))
        })
    }
})

server.listen(3000, () => {
    try {
        console.log('Run server in port 3000');
    } catch (error) {
        console.error(error);
    }
})
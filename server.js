const http = require('http')
const app = require('./app')
const server = http.createServer(app)

server.listen(3331, console.log('Server is running at port 3331'))
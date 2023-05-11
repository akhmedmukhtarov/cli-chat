const http = require('http')
const {Server} = require('socket.io')

const server = http.createServer()
const io = new Server(server)

server.listen(4000)


io.on('connect', (socket)=>{
    socket.on('message',(msg)=>{
        if(!msg.includes('undefined: ')){
            socket.emit('chat',`\n${msg}`)
        }
    })
})
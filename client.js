const io = require('socket.io-client');

const socket = io('http://143.42.17.219:4000');

const username = process.argv.splice(2)[0]?.trim();

if (!username) {
    console.log('You should start the client like \'node client Matkarim\'');
    process.exit()
} else {
    socket.emit('message', username + ' joined chat :) ');
}

process.stdin.on('data', async (input) => {
    socket.emit('message', '--' + username + ': ' + input.toString());
});

socket.on('chat', (msg) => {
    let [user] = msg.split(' ');
    user = user.trim();
    if (user != `--${username}:`) {
        console.log('---------------' + msg);
    }
});

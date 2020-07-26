const server = require('ws').Server;
const ws = new server({port:8080});
var clients = 0;
var disconnected_clients = 0;

console.log("Connected: " + clients + " Disconnected: " + disconnected_clients);

ws.on('connection', client => {
    clients++;
    console.log("Connected: " + clients + " Disconnected: " + disconnected_clients);
    client.on('close', (reasonCode, description) => {
        disconnected_clients++;
        clients--;
        console.log("Connected: " + clients + " Disconnected: " + disconnected_clients);
    })

});
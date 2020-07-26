const WebSocket = require('ws');


for (i = 0; i < 60000; i++) {
    var ws = new WebSocket('ws://localhost:8080/');        
    ws.addEventListener('open',() =>{
    }); 
  }

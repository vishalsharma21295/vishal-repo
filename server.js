var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io');

server.listen(3000);
console.log("SERVER STArTED AT PORT 3000");

const socket = io.listen(server);

socket.on('connection', function(socket){
    console.log("server is connected");
    var arrayData = [
        {name:"THOR",id:"1"},
        {name:"DEATH NOTE",id:"2"},
        {name:"STRANGER THINGS",id:"3"},
        {name:"DEADPOOL",id:"4"}
    ];
    socket.emit('customEvent',arrayData);
    socket.emit('workEvent', {name:"CAPTAIN AMERICA",id:"2"});
    setInterval(function(){
        socket.emit('connects',{name:"DAREDEVIL",id:"3"});    
    },1000);

    socket.on('customEvents',function(data){
        console.log("datat server", data)
    })
    setInterval(function(){
        socket.emit('pushEvent',{name:"GHOUL",id:"4"});
    },3000);
})


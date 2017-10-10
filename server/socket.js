module.exports = function (io) {
    io.on('connection', function(socket){
        socket.on('sendMessage', function(message){
            socket.broadcast.emit('sendMessage', message);
        });

        socket.on('typing', function(data){
            socket.broadcast.emit('typing', data);
        });

        socket.on('doneTyping', function(id){
            socket.broadcast.emit('doneTyping', id);
        });
    });
}
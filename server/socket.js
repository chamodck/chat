module.exports = function (io) {
    io.on('connection', function(socket){
        socket.on('sendMessage', function(message){

            io.emit('message', message);

        });

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
}
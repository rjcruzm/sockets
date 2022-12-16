

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar-server-mensaje', payload);
    });
}

module.exports = {
    socketController
}
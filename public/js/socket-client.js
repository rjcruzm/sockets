
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = 'block';
});

socket.on('disconnect', () => {
    lblOnline.style.display = 'none';
    lblOffline.style.display = 'block';
});

socket.on('enviar-server-mensaje', (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener( 'click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123qwe',
        fecha: new Date(),
    }

    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('desde el server', id);
    });
});
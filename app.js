
const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conexion exitosa del bot');
});

client.on('message', message => {
	if(message.body === 'Hola') {
		client.sendMessage(message.from, 'Holiwis soy un bot. Mi creador se encuentra ocupado ahora');
	}
});


client.initialize();

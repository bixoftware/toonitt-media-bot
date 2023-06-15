const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client()

var startTime = new Date()
var endTime = new Date()
endTime.setMinutes(endTime.getMinutes() + 240)

client.initialize();

client.on('qr', (qr) => {
  console.log('QR Recieved:',qr)
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.on('ready', () => {
  console.log('Client is now ready to autorespond!');
  
});

client.on('message', (message) => {
  let body = message.body
  let lowerBody = body.toLowerCase()
  let nowTime = new Date()
  let minutesLeft = endTime.getMinutes() - nowTime.getMinutes()
  switch (lowerBody) {
    case 'hello': case 'hey': case 'hi': case 'hello!':
    message.reply(`Thank you for messaging Toonitt Media Bot 😊, ask me anything about Toonitt Media,
                  I'll be up for the next ${minutesLeft} hours`);
    break;
    case 'date': case 'what is the date': case 'tell me the date': case 'today':
      let date = new Date()
      message.reply(date.toLocaleDateString());
    break;
    case 'launch date': case 'what is the launch date':
      message.reply('The release date is not yet agreed')
    break;
    case 'why': case 'reason': case 'what is the reason':
      let perc = Math.random()
      if (perc < 0.5){
         message.reply('I may not have an answer to that question')
      }
      else if (perc < 0.8) {
        message.reply('You should be asking yourself that')
      }
      
      else {
        message.react('🫠')
      }
    break;
  }
});
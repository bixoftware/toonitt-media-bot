const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth(),
});

var startTime = new Date()
var endTime = new Date()
endTime.setMinutes(endTime.getMinutes() + 240)
var perc = 0
var isPrivate = true


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

client.on('incoming_call', (call) => {
  console.log('INCOMING CALL');
  
});

client.on('message', (message) => {
  console.log('MESSAGE: ',message.body)
  message.getChat()
  .then((chat)=>{
    isPrivate = !(chat.isGroup)
  })
  console.log('REPLY STATE (MENTION , PRIVATE)',message.body.indexOf('@2348127928004')>= 0 , isPrivate)
  if (message.body.indexOf('@2348127928004')>= 0 || isPrivate){
  
  
  let body = message.body.replace('@2348127928004','')
  let lowerBody = body.toLowerCase().trimStart().trimEnd()
  let nowTime = new Date()
  let minutesLeft = endTime.getMinutes() - nowTime.getMinutes()
  switch (lowerBody) {
    case 'hello': case 'hey': case 'hi': case 'hello!':
    perc = Math.random()
    if (perc < 0.2){
    message.reply('Toonitt Media Bot 😊 is at your service');}
    else if (perc < 0.4){
    message.reply('Nice to meet you')}
    else if (perc < 0.6){
      message.reply('Hello, there 😎')
    }
    else if (perc < 0.8) {
      message.reply('Hi, how is production 🧩')
    }
    else {
      message.reply('Hey, happy to see you ✨')
    }
    break;

    case 'welcome': case 'you are welcome':
    perc = Math.random()
    if (perc < 0.2){
    message.reply('Toonitt Media Bot 😊 is at your service');}
    else if (perc < 0.4){
    message.reply('Nice to meet you')}
    else if (perc < 0.6){
      message.reply('Hello, there 😎')
    }
    else if (perc < 0.8) {
      message.reply('Hi, how is production 🧩')
    }
    else {
      message.reply('Thank you, happy to see you ✨')
    }
    break;

    case 'goodnight': case 'good night': case 'good night!': case 'rest': case 'gn':
    perc = Math.random()
    if (perc < 0.2){
    message.reply('Goodnight, sweet dreams!');}
    else if (perc < 0.4){
    message.reply('Rest well')}
    else if (perc < 0.6){
      message.reply('Lay like a baby')
    }
    else if (perc < 0.8) {
      message.reply('sleep well')
    }
    else {
      message.reply('GN')
    }
    break;

    case 'goodmorning': case 'good morning': case 'good morning!': case 'gm':
    perc = Math.random()
    if (perc < 0.2){
    message.reply('Welcome to today, everyday is a blessing');}
    else if (perc < 0.4){
    message.reply('Good morning, nice to see you wake up')}
    else if (perc < 0.6){
      message.reply('Welcome to another production day, stay focused 😉')
    }
    else if (perc < 0.8) {
      message.reply(`Awn😌, Another morning. Let's see what today holds`)
    }
    else {
      message.reply('GM from this side, be productive ⚡')
    }
    message.react('☀️')
    break;

    case 'what can you do': case 'do something': case 'how can you help': case 'help me':
      message.reply(`I can ease your mind and at the same time blow it. Say 'fun fact' or 'motivate us'`);
    break;

    case 'what is your name': case 'name?': case 'what is your name?': case 'who is this':
      message.reply('I am Toonitt Media Bot or simply TMBot🙂');
    break;

    case 'who are you': case 'what are you': case 'who are you?': case 'who is this':
      message.reply('I am Toonitt Media Bot designed to keep you company during production. I am based on GPT-0 🫠. Mention me to get my reply');
    break;
    case 'how are you': case 'how are you doing': case 'how is it going': case 'how are you?':
      perc = Math.random()
      if (perc < 0.3){
         message.reply(`How can I say I'm not fine. Emmanuel would cease me`)
      }
      else if (perc < 0.5) {
        message.reply('Good as new')
      }
      
      else {
        message.react('Fresh and fine')
        message.react('👍')
      }
    break;
    case 'date': case 'what is the date': case 'tell me the date': case 'today':
      let date = new Date()
      message.reply(date.toLocaleDateString());
    break;
    case 'time': case 'what is the time': case 'tell me the time': case 'time':
      case 'what time is it': case 'what is the time now': case 'now': case 'what is the time now':
      let time = new Date()
      message.reply(time.toLocaleTimeString);
    break;
    case 'launch date': case 'what is the launch date': case 'when is the launch date':
      case 'when is lauch': case 'when are we lauching': case 'when is lauching': case 'when is lauching date':
      message.reply('The release date is not yet agreed, but we have relase goals which are 6 episodes and I hope we are working towards it')
    break;
    case 'why': case 'reason': case 'what is the reason':
      perc = Math.random()
      if (perc < 0.3){
         message.reply('I may not have an answer to that question')
      }
      else if (perc < 0.5) {
        message.reply('You should be asking yourself that')
      }
      
      else {
        message.react('🫠')
      }
    break;
    case 'nice': case 'going well':case 'well':case 'fine': case 'going fine':
      case 'going nice': case 'on God': case 'working': case 'producing':
      perc = Math.random()
      if (perc<0.4){
        message.reply('Good to hear that')
      }
      else if (perc <0.7) {
        message.reply('More grease to your elbows')
      }
      else {
        message.reply('Good news')
      }
      break;
      
      // Explain
      case 'explain': case 'explain that':
      perc = Math.random()
      if (perc<0.4){
        message.reply(`I don't think I can explain that. Maybe next time`)
      }
      else if (perc <0.7) {
        message.reply(`I don't have an explanation`)
      }
      else {
        message.reply('Ask yourself that question')
      }
      break;

    case 'motivate me': case 'tell me a quote': case 'inspire me': case 'inspire us':
      case 'motivate us': case 'tell us a quote': case 'tell a quote': case 'speak motivationally':
        case 'speak inspirationally':
      let seed = Math.trunc(Math.random()*7268)
      fetch(`https://quote-garden.onrender.com/api/v3/quotes?page=${seed}`)
      .then(res=>res.json())
      .then((data)=>{
        let text = data.data[0].quoteText
        let author = data.data[0].quoteAuthor
        let finaltext = text+' - _'+author+'_'
        message.reply(finaltext)
      })
      .catch(
        (err)=>{
          console.log(err)
          message.reply('Error from my side, give me a few seconds and retry')
        }
      )
    break;
    
    //Something random
    case 'tell me something random': case 'say something useless': case 'fun fact': case 'say something':
      case 'tell us something random': case 'tell a fact': case 'tell a fun fect': case 'speak randomly':
        case 'speak random': case 'say a fun fact': case 'say a fact': case 'fact': case 'fun facts':
      
      fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
      .then(res=>res.json())
      .then((data)=>{
        let finaltext = '😁 '+ data.text
        message.reply(finaltext)
      })
      .catch(
        (err)=>{
          console.log(err)
          message.reply('Error from my side, give me a few seconds and retry')
        }
      )
    break;

    case 'goodbye': case 'good bye': case 'bye': case 'cease': case 'lost':
      case 'get lost':
      message.reply('Bye!👋 for now')

      break;

        // Emmanuel
      case 'image: ekopimo': case 'image: emmanuel': case 'image: emmanuel akpan': 
        MessageMedia.fromUrl(`https://toonittmedia.netlify.app/images/emmanuel.png`)
        .then((messageMedia)=>{
            message.reply(messageMedia)
        })
        .catch((err)=>{
          console(err);
          message.reply('Error from my side, give me a few seconds and retry')
        })
        break;

         // John V
      case 'image: john': case 'image: john-v': case 'image: john-vidal': case 'image: john vidal': 
      MessageMedia.fromUrl(`https://toonittmedia.netlify.app/images/john.png`)
      .then((messageMedia)=>{
          message.reply(messageMedia)
      })
      .catch((err)=>{
        console(err);
        message.reply('Error from my side, give me a few seconds and retry')
      })
      break;

        // Gideon
        case 'image: gideon': case 'image: gideon etietop': case 'image: etietop': case 'image: gideon emmanuel etietop': 
        MessageMedia.fromUrl(`https://toonittmedia.netlify.app/images/gideon.png`)
        .then((messageMedia)=>{
            message.reply(messageMedia)
        })
        .catch((err)=>{
          console(err);
          message.reply('Error from my side, give me a few seconds and retry')
        })
        break;

        // Inibs
        case 'image: ini-ibehe': case 'image: inibs': case 'image: inibehe': case 'image: ini ibehe': 
        MessageMedia.fromUrl(`https://toonittmedia.netlify.app/images/ini-ibehe.png`)
        .then((messageMedia)=>{
            message.reply(messageMedia)
        })
        .catch((err)=>{
          console(err);
          message.reply('Error from my side, give me a few seconds and retry')
        })
        break;
        
          // Flicker
      case 'image: animation': case 'image: flicker': case 'image: flick': 
      MessageMedia.fromUrl(`https://toonittmedia.netlify.app/images/TopBarAnimation.gif`)
      .then((messageMedia)=>{
          message.reply(messageMedia)
      })
      .catch((err)=>{
        console(err);
        message.reply('Error from my side, give me a few seconds and retry')
      })
      break;
      
        
        // banner
      case 'lauch banner': case 'advert': case 'our advert': case 'our banner': 
      case 'banner advert': case 'banner': case 'image: advert': case 'image: banner':
        MessageMedia.fromUrl(`https://toonittmedia.netlify.app/images/news.png`)
        .then((messageMedia)=>{
            message.reply(messageMedia)
        })
        .catch((err)=>{
          console(err);
          message.reply('Error from my side, give me a few seconds and retry')
        })
        break;
    default:
      perc = Math.random()
      if (perc<0.5){
        message.reply('I need updates to my knowledge base to answer that question')
      }
      else if (perc <0.8) {
        message.react('😶')
      }
      else {
        message.reply(`I don't think I have an answer to that question 🥲`)
      }
  }}
});
const { Wechaty } = require('wechaty');
const QrcodeTerminal = require('qrcode-terminal');
const wxbotProcesser = require('./lib/wxbot-proceser');
const { wxMessageParser } = require('./helper/wx-message');


const { saveMessageToMongo } = require('./lib/db-saver');

const wechatBot = Wechaty.instance();

const messageTypeMap = {
  49: 'App',
  1: 'Text',
  3: 'IMAGE'
};

wechatBot.on('scan', (url, code) => {
  if (!/201|200/.test(String(code))) {
    const loginUrl = url.replace(/\/qrcode\//, '/l/');
    QrcodeTerminal.generate(loginUrl);
  }
  console.log(`${url}\n[${code}] Scan QR Code in above url to login: `);
});

wechatBot.on('login', user => console.log(`User ${user} logined`));

wechatBot.on('message', (message) => {
  if (messageTypeMap[message.type()] == 'App') {
    wxMessageParser(message.content())
      .then(messageObj => wxbotProcesser.processAppMessage(messageObj))
      .then(queueMessage => saveMessageToMongo(queueMessage))
      .then(() => message.say('Got it!'))
      .catch(() => message.say('Sorry I don\'t get it')
    );
  }
});

wechatBot.init();

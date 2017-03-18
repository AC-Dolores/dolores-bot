const QrcodeTerminal = require('qrcode-terminal');

const messageTypeMap = {
  49: 'App',
  1: 'Text',
  3: 'IMAGE'
}


module.exports = (wechatBoxInstance) => {
  wechatBoxInstance.on('scan', (url, code) => {
    if (!/201|200/.test(String(code))) {
      let loginUrl = url.replace(/\/qrcode\//, '/l/')
      QrcodeTerminal.generate(loginUrl)
    }
    console.log(`${url}\n[${code}] Scan QR Code in above url to login: `)
  });
  wechatBoxInstance.on('login', user => console.log(`User ${user} logined`));
  wechatBoxInstance.on('message', message => {
    console.log(message.type());
    console.log(unescape(message.content()));
    parseString(unescape(message.content()), (err, result) => {
          console.dir(result);
    });

    if(messageTypeMap[message.type()] == 'App') {
      wxMessageParser(message.content(), (messagedata)=>{
          const queueMessage = {
              dbType: 'sql',
        user: message.from(),
        costNum: parseInt(contentRegx.exec(messageContent)[1]),
        costSubject: contentRegx.exec(messageContent)[2]
      };

      },)
    }


    const messageContent = message.content();
    if (/^spend.*/i.test(messageContent)) {
      let contentRegx = /^spend (.*) on (.*)/i;

      const queueMessage = {
        dbType: 'sql',
        user: message.from(),
        costNum: parseInt(contentRegx.exec(messageContent)[1]),
        costSubject: contentRegx.exec(messageContent)[2]
      };

      console.log(queueMessage);
      // messageSender(queueMessage);
    }

    if (/^http.*/i.test(messageContent)) {
      let contentRegx = /^spend (.*) on (.*)/i;

      const queueMessage = {
        dbType: 'sql',
        user: message.from(),
        costNum: parseInt(contentRegx.exec(messageContent)[1]),
        costSubject: contentRegx.exec(messageContent)[2]
      };

      console.log(queueMessage);
      // messageSender(queueMessage);
    }


  })
  wechatBoxInstance.init()
}
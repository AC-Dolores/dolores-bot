// const messageSender = require('./message-sender')
module.exports = (controller) => {
  controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, 'Hello yourself.');
  });

  controller.hears('^spend (.*) on (.*)', ['direct_message', 'direct_mention', 'metion'], function (bot, message) {

    const queueMessage = {
      dbType: 'sql',
      user: message.user,
      costNum: message.match[1],
      costSubject: message.match[2]
    };

    console.log(queueMessage);
    // messageSender(queueMessage);

    bot.reply(message, 'got it');

  });


  controller.on('direct_message', function (bot, message) {

    const context = message.context
    const queueMessage = {
      dbType: 'nosql',
      user: message.user,
      postLink: message.match[1]
    };

    console.log(queueMessage);

    // messageSender(queueMessage);
    bot.reply(message, 'got the link.');
    bot.reply(message, 'I heard... something!');
  });


}
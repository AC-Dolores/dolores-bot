var Botkit = require('botkit');
var Config = require('./config');
var slackbotListener = require('./lib/slackbot-listener');

var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: true
});

controller.spawn({
  token: Config.SLACK_TOKEN,
}).startRTM()

slackbotListener(controller);
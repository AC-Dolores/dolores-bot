const _ = require('lodash');

const proccessAppMessage = (messageObj) => {
  const body ={
    type: "article",
    link: _.get(messageObj, msg.appmsg[0].url[0], null),
    title: _.get(messageObj, msg.appmsg[0].title[0], null),
    user: _.get(messageObj, msg.fromusername[0]),
    fullMessageBody:messageObj
  };

  const AppQueueMessage = {
    dbType:'NOSQL',
    body
  };

  return AppQueueMessage;
};

module.exports = {
  proccessAppMessage
};

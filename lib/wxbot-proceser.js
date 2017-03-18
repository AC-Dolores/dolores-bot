const _ = require('lodash');

const processAppMessage = (messageObj) => {
  console.log(messageObj);
  return new Promise((resolve)=> {
    const body ={
      type: "article",
      link: _.get(messageObj, 'msg.appmsg[0].url[0]', null),
      title: _.get(messageObj, 'msg.appmsg[0].title[0]', null),
      user: _.get(messageObj, 'msg.fromusername[0]', null),
      des: _.get(messageObj, 'msg.appmsg[0].des[0]', null),
      sourceAppInfo: _.get(messageObj, 'msg.appinfo[0]', null)
    };

    const AppQueueMessage = {
      dbType:'NOSQL',
      body
    };
    console.log(AppQueueMessage);
    resolve(AppQueueMessage);
  });

};

module.exports = {
  processAppMessage
};

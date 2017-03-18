const kue = require('kue');
const queue = kue.createQueue();
kue.app.listen(3004);

const sendMessageToQueue = (queueMessage) => {
  return new Promise((resolve, reject) => {
   queue.create('message', queueMessage).attempts(3).save(err => {
      if (err) {
        reject(err)
      } else {
        resolve();
      }
    })
  })
};

module.exports = {
  sendMessageToQueue
}

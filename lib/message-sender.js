const kue = require('kue');
const queue = kue.createQueue();

const sendMessageToQueue = (queueMessage) => {
  return new Promise((resolve, reject) => {
    const job = queue.create('message', queueMessage).attempts(3).save(err => {
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
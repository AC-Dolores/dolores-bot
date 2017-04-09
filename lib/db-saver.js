const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONOGURL;

const saveMessageToMongo = message => new Promise((resolve, reject) => {
  MongoClient.connect(url, (error, db) => {
    console.log(error);
    if (error) return reject('failed to connect mongo');
    console.log(url);
    const collection = db.collection('dolores');
    collection.insertMany([message], (error, result) => {
      if (error) {
        console.log(error);
        reject('failed to save mongo');
      } else {
        console.log(result.result);
        resolve(result);
      }
      db.close();
    });
  });
});


module.exports = {
  saveMessageToMongo
};

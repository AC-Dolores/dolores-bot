const { parseString } = require('xml2js');
const unescape = require('unescape');

const wxMessageParser = (messageString) => {
  return new Promise((resolve, reject) => {
    const xmlString = unescape(messageString).replace(/\<br\/\>/g, '');
    parseString(xmlString, (err, result) => {
      if (err) {
        reject('parse message xml error');
      } else {
        resolve(result);
      }
    });
  })
}

module.exports = {
  wxMessageParser
}
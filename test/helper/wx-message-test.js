const chai = require('chai');

const expect = chai.expect;

const { wxMessageParser } = require('../../helper/wx-message');

const wxMessage = require('../fixture/wxAppMessage');
const result = require('../fixture/result');


describe('wxMessageParser', () => {
  it('should parse the wx message', (done) => {
    wxMessageParser(wxMessage).then(
           (messageObj) => {
             expect(JSON.stringify(messageObj)).to.equal(result);
             done();
           }
       ).catch(done);
  });
});

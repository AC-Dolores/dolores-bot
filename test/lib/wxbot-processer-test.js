const chai = require('chai');
const expect = chai.expect;

const wxbotProcesser = require('../../lib/wxbot-proceser');
const message = require('../fixture/result');

describe('wxbot-processer', ()=>{

  it('should return correctly app message', (done)=> {

    wxbotProcesser.proccessAppMessage(JSON.parse((message)))
      .then(data => {
        expect(data.body.user).to.equal("seven_dong");
        expect(data.body.link).to.equal("https://gold.xitu.io/entry/58c9223ba22b9d0064149de6");
        expect(data.body.title).to.equal("一篇文章了解爬虫技术现状 - 掘金");

        done()
      })
      .catch(done);
  })
});
const {expect} = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
    const loremBlock = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    
    it('Returns empty string if empty string was provided', () => {
      expect(wrap("", 10)).to.equal("");
    });
    it("doesnt truncate words/sentences",()=>{
        expect(wrap("my name is lamine",7)).to.equal("my name\nis\nlamine")
    })
  });
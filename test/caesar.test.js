// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Requirements: ", () => {
    it("Should return false if 'shift value == 0'", ()=>{
        const zeroValueActual = caesar("thoughtful or thinkful", 0)
        expect(zeroValueActual).to.be.false;
    });

    it("Should return false if 'shift value > -25'" , ()=>{
        const negValueActual = caesar("thoughtful or thinkful", -26)
        expect(negValueActual).to.be.false;
    });

    it("Should return false if 'shift value < 25'", ()=>{
        const posValueActual = caesar("thoughtful or thinkful", 26)
        expect(posValueActual).to.be.false;
    });

    it("Should return false if 'shift value undefined'", ()=>{
        const undefinedValueActual = caesar("thoughtful or thinkful")
        expect(undefinedValueActual).to.be.false;
    });

    it("Should ignore capital letters.", ()=>{
        const expected = "wkrxjkwixoruwklqnixo"
        const actual = caesar("ThOuGhTfuLorThInKfuL",3)
        expect(expected).to.equal(actual);
    });

    it("Should 'wrap' around the alphabet for shifts that go 'past' the end of it", ()=>{
        const expected = "rfcosgaizpmuldmvhsknqmtcprfcjyxwbme"
        const actual = caesar("thequickbrownfoxjumpsoverthelazydog",24)
        expect(expected).to.equal(actual);
    });

    it("Should encode; given a message and shift value", ()=>{
        const expected = "sxdrooxnsdscswzyccslvoxyddylomywogrkdydrobclovsofoiyekbo"
        const actual = caesar("intheenditisimpossiblenottobecomewhatothersbelieveyouare",10)
        expect(expected).to.equal(actual);
    });

    it("Should decode; given a message and shift value", ()=>{
        const expected = "intheenditisimpossiblenottobecomewhatothersbelieveyouare"
        const actual = caesar("sxdrooxnsdscswzyccslvoxyddylomywogrkdydrobclovsofoiyekbo",10, false)
        expect(expected).to.equal(actual);
    });

    it("Should handle spaces, and non-alphabetical symbols while encoding", ()=>{
        const expected = "rfc osgai zpmul (dmv) hsknq mtcp rfc jyxw bme?!!%#"
        const actual = caesar("The quick brown (fox) jumps over the lazy dog?!!%#",24)
        expect(expected).to.equal(actual);
    });

    it("Should handle spaces, and non-alphabetical symbols while decoding", ()=>{
        const expected = "the quick brown (fox) jumps over the lazy dog?!!%#"
        const actual = caesar("rfc osgai zpmul (dmv) hsknq mtcp rfc jyxw bme?!!%#",24, false)
        expect(expected).to.equal(actual);
    });

});
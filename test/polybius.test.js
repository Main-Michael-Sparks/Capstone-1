// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("Polyius Requirements:", ()=>{

    it("should encode a message",()=>{
        const expected = "4432511454423152212443253312433542542353344315512444325113115545414322";
        const actual = polybius("thequickbrownfoxjumpsoverthelazydog");

        expect(actual).to.equal(expected)
    })

    it("should translate the letters i and j to 42 when encoding",()=>{
        const expected = "42113154555542";
        const actual = polybius("jacuzzi");

        expect(actual).to.equal(expected)
    })

    it("should maintain spaces in the message while encoding",()=>{
        const expected = "5343134521425434 341454112451";
        const actual = polybius("polybius Square");

        expect(actual).to.equal(expected)
    })

    it("should decode a message",()=>{
        const expected = "thequi/jckbrownfoxi/jumpsoverthelazydog";
        const actual = polybius("4432511454423152212443253312433542542353344315512444325113115545414322",false);

        expect(actual).to.equal(expected)
    })

    it("should translate 42 to (i/j) when decoding",()=>{
        const expected = "i/jacuzzi/j";
        const actual = polybius("42113154555542", false);

        expect(actual).to.equal(expected)
    })

    it("should maintain spaces in the message while decoding",()=>{
        const expected = "polybi/jus square";
        const actual = polybius("5343134521425434 341454112451",false);

        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters",()=>{
        const expected = "4432423352125413432444324354223244125413";
        const actual = polybius("ThInKfUloRtHoUgHtFul");

        expect(actual).to.equal(expected)
    })
})
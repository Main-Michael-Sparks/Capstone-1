// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Requirements:", ()=>{

    it("should return false if the given alphabet isn't exactly 26 characters long", ()=>{

        const actual = substitution("meh message","qwertyuiopasdfghjklzxcvbnm.")
        expect(actual).to.be.false
    })

    it("should return false if there are any duplicate characters in the given alphabet", ()=>{
        const actual = substitution("meh message","qqertyuiopasdfghjklzxcvbmm")

        expect(actual).to.be.false
    })

    it("should maintains spaces in the message while encoding", ()=>{
        const expected = "dti dtllqut"
        const actual = substitution("meh message", "qwertyuiopasdfghjklzxcvbnm")

        expect(actual).to.equal(expected)
    })

    it("should maintains spaces in the message while decoding", ()=>{
        const expected = "meh message"
        const actual = substitution("dti dtllqut","qwertyuiopasdfghjklzxcvbnm",false)

        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", ()=>{
        const expected = "doeiqts lhqkal"
        const actual = substitution("Michael Sparks","qwertyuiopasdfghjklzxcvbnm" )

        expect(actual).to.equal(expected)
    })

    it("should encode; given an substitution alphabet and message", ()=>{
        const expected = "vtokr dtll.ut"
        const actual = substitution("Weird Message", ".wertyuiop*sdfghjklzx^vbnm")

        expect(actual).to.equal(expected)
    })

    it("should decode; given an substitution alphabet and message", ()=>{
        const expected = "weird message"
        const actual = substitution("vtokr dtll.ut", ".wertyuiop*sdfghjklzx^vbnm",false)

        expect(actual).to.equal(expected)
    })
})

const assert = require("chai").assert
const st = require("../simpletype")

describe("Argument types with sequential array input", () => {
    it("should return an object containing { correct: true }", () => {
        let test = st.checkSync("string", "number", ["string", "number"], "array", ["johndoe", 42, "$57,000", [123, 456, 789]])

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.equal( test.correct, true )
    }),
    it("should return an object containing { correct: false, failed: [{}] } property", () => {
        let test = st.checkSync("string", "number", ["string", "number"], "array", ["johndoe", 42, { foo: "bar" }, [123, 456, 789]])

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.typeOf( test.failed[0], "object" )
        assert.typeOf( test.failed[0].index, "number" )
        assert.equal( test.failed[0].index, 2 )
        assert(Array.isArray(test.failed), `{ failed } property was not Array! Got ${typeof(test.failed)}...` )
        assert.equal( test.correct, false )
    })
})

describe("Argument types with sequential object input", () => {
    it("should return an object containing { correct: true }", () => {
        let test = st.checkSync("string", "number", ["string", "number"], "array", {username: "johndoe", age: 42, income: "$57,000", petIDs: [123, 456, 789]})

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.equal( test.correct, true )
    }),
    it("should return an object containing { correct: false, failed: [{}] } property", () => {
        let test = st.checkSync("string", "number", ["string", "number"], "array", {username: "johndoe", age: 42, income: { money: "$57,000" }, petIDs: [123, 456, 789]})

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.typeOf( test.failed[0], "object" )
        assert.typeOf( test.failed[0].index, "string" )
        assert.equal( test.failed[0].index, "income" )
        assert(Array.isArray(test.failed), `{ failed } property was not Array! Got ${typeof(test.failed)}...` )
        assert.equal( test.correct, false )
    })
})

describe("Array types with sequential Array input", () => {
    it("should return an object containing { correct: true }", () => {
        let test = st.checkSync(["string", "number", ["string", "number"], "array"], [ "johndoe", 42, "$57,000", [123, 456, 789] ])

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.equal( test.correct, true )
    }),
    it("should return an object containing { correct: false, failed: [{}] } property", () => {
        let test = st.checkSync(["string", "number", ["string", "number"], "array"], [ "johndoe", 42, { money: "$57,000" }, [123, 456, 789] ])

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.typeOf( test.failed[0], "object" )
        assert.typeOf( test.failed[0].index, "number" )
        assert.equal( test.failed[0].index, 2 )
        assert(Array.isArray(test.failed), `{ failed } property was not Array! Got ${typeof(test.failed)}...` )
        assert.equal( test.correct, false )
    })
})

describe("Array types with sequential Object input", () => {
    it("should return an object containing { correct: true }", () => {
        let test = st.checkSync(["string", "number", ["string", "number"], "array"], {username: "johndoe", age: 42, income: "$57,000", petIDs: [123, 456, 789]})

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.equal( test.correct, true )
    }),
    it("should return an object containing { correct: false, failed: [{}] } property", () => {
        let test = st.checkSync(["string", "number", ["string", "number"], "array"], {username: "johndoe", age: 42, income: { money: "$57,000" }, petIDs: [123, 456, 789]})

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.typeOf( test.failed[0], "object" )
        assert.typeOf( test.failed[0].index, "string" )
        assert.equal( test.failed[0].index, "income" )
        assert(Array.isArray(test.failed), `{ failed } property was not Array! Got ${typeof(test.failed)}...` )
        assert.equal( test.correct, false )
    })
})

describe("Object types with sequential Array input", () => {
    it("should return an object containing { correct: true }", () => {
        let test = st.checkSync({username: "string", age: "number", income: ["string", "number"], petIDs: "array"}, [ "johndoe", 42, "$57,000", [123, 456, 789] ])

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.equal( test.correct, true )
    }),
    it("should return an object containing { correct: false, failed: [{}] } property", () => {
        let test = st.checkSync({username: "string", age: "number", income: ["string", "number"], petIDs: "array"}, [ "johndoe", 42, { money: "$57,000" }, [123, 456, 789] ])

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.typeOf( test.failed[0], "object" )
        assert.typeOf( test.failed[0].index, "number" )
        assert.equal( test.failed[0].index, 2 )
        assert(Array.isArray(test.failed), `{ failed } property was not Array! Got ${typeof(test.failed)}...` )
        assert.equal( test.correct, false )
    })
})

describe("Object types with Object input", () => {
    it("should return an object containing { correct: true }", () => {
        let test = st.checkSync({username: "string", age: "number", income: ["string", "number"], petIDs: "array"}, {username: "johndoe", age: 42, income: "$57,000", petIDs: [123, 456, 789]})

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.equal( test.correct, true )
    }),
    it("should return an object containing { correct: false, failed: [{}] } property", () => {
        let test = st.checkSync({username: "string", age: "number", income: ["string", "number"], petIDs: "array"}, {username: "johndoe", age: 42, income: { money: "$57,000" }, petIDs: [123, 456, 789]})

        assert.typeOf( test, "object" )
        assert.typeOf( test.correct, "boolean" )
        assert.typeOf( test.failed[0], "object" )
        assert.typeOf( test.failed[0].index, "string" )
        assert.equal( test.failed[0].index, "income" )
        assert(Array.isArray(test.failed), `{ failed } property was not Array! Got ${typeof(test.failed)}...` )
        assert.equal( test.correct, false )
    })
})
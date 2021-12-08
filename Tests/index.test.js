const Todos = require('./../Server/index');
const assert = require('assert').strict;


describe("Testing", function() {
    it("should be able to complete to do items", function() {
        let todos = new Todos();
        todos.add("Make the breakfast");
        todos.add("Clean your room");
        assert.notStrictEqual(todos.list().length, 1);
    });
});

describe("Testing - 2", function() {
    it("should be able to do and complete to do items", function() {
        let todos = new Todos();
        todos.add("Wash your teeth");
        todos.add("Take a shower");
        assert.notStrictEqual(todos.list().length, 1);
    });
});
describe("Testing - 3", function() {
    it("should be able to add items to do", function() {
        let todos = new Todos();
        todos.add("Wear the clothes");
        todos.add("Get ready for the school DONE");
        assert.notStrictEqual(todos.list().length, 1);
    });
});

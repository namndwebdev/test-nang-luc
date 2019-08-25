let expect = require("chai").expect;

describe("Array", function() {

  describe("#sort number asc", function() {
    let numbers = [4, 5, 1, 8];
    // code here

    it("must be [1 4 5 8]", function() {
      expect(numbers).to.eql([1, 4, 5, 8]);
    });
  });

  describe("#sort number des", function() {
    let numbers = [4, 5, 1, 8];
    // code here

    it("must be [8, 5, 4, 1]", function() {
      expect(numbers).to.eql([8, 5, 4, 1]);
    });
  });

  // sort array object theo name
  let people = [
    { name: "dung", age: 22 },
    { name: "hai", age: 21 },
    { name: "tram", age: 28 },
    { name: "phu", age: 18 }
  ];

  var rs = [
    { name: "dung", age: 22 },
    { name: "hai", age: 21 },
    { name: "phu", age: 18 },
    { name: "tram", age: 28 }
  ];
  describe("#sort by name", function() {
    // code here

    it("correct order: dung hai phu tram", function() {
      expect(people).to.eql(rs);
    });
  });
});

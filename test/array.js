let expect = require("chai").expect;
describe("Array", function() {
  describe("Add last", function() {
    let numbers = [2, 3, 4];
    //code here

    it("should be [2, 3, 4, 5]", function() {
      expect(numbers).to.eql([2, 3, 4, 5]);
    });
  });

  describe("Add middle", function() {
    let numbers = [1, 3, 4];
    // code here

    it("should be [1, 2, 3, 4]", function() {
      expect(numbers).to.eql([1, 2, 3, 4]);
    });
  });
});

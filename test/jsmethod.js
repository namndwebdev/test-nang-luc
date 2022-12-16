let expect = require("chai").expect;
let { addARR, sapxeptangdan, sapxepgiamdan, sum, mystring } = require("./bai1");
let { age } = require("./bai2");
let { Number, sortsanpham, title } = require("./bai4");
let { timkiem, thaythe } = require("./bai6");
let { FunctionTest } = require("./bai7");
let { Print, Sum, PrintArr4, PrintArr4Odd } = require("./bai3");
let { DateQ1, TetDate } = require("./bai5");
var assert = require("assert");
//bai 1
describe("bai1", function () {
  describe("a", function () {
    it("case1", function () {
      var arr = [5, 3, 2, 14, 11, 16, 8];
      var newarr = addARR(arr);
      assert.equal(newarr[newarr.length - 1], 7);
    });
    it("case2", function () {
      var arr = [5, 3, 2, 14, 11, 16, 8];
      var newarr = addARR(arr);
      assert.equal(newarr.length, 8);
    });
  });
  describe("b1", function () {
    it("case 1", function () {
      var arr = [5, 3, 2, 14, 11, 16, 8, 7];
      var newarr = sapxeptangdan(arr);
      expect(newarr).to.eql([2, 3, 5, 7, 8, 11, 14, 16]);
    });
  });
  describe("b2", function () {
    it("case 1", function () {
      var arr = [5, 3, 2, 14, 11, 16, 8, 7];
      var newarr = sapxepgiamdan(arr);
      expect(newarr).to.eql([16, 14, 11, 8, 7, 5, 3, 2]);
    });
  });
  describe("c", function () {
    it("case 1", function () {
      var arr = [5, 3, 2, 14, 11, 16, 8, 7];
      var newarr = sum(arr);
      assert.equal(newarr, 40);
    });
  });
  describe("d", function () {
    it("case 1", function () {
      var arr = [5, 3, 2, 14, 11, 16, 8, 7];
      var newarr = mystring(arr);
      assert.equal(newarr, "5-3-2-14-11-16-8-7");
    });
  });
});
//bai 2
describe("bai2", function () {
  describe("cau1", function () {
    it("case1", function () {
      var newage = age(65);
      assert.equal(newage, "nguoi cao tuoi");
    });
  });
});
//bai 3
describe("bai3", function () {
  describe("a", function () {
    it("case1", function () {
      var arr = ["8", 2, 5, 12, "0", 1, 3, 10, "1", "7"];
      const newarr = Print(arr);
      // assert.equal(newarr, "5-3-2-14-11-16-8-7");
      expect(newarr).to.eql([2, 5, 12, 1, 3, 10]);
    });
  });
  describe("b", function () {
    it("case1", function () {
      var arr = [2, 5, 12, 1, 3, 10];
      var newarr = Sum(arr);
      // assert.equal(newarr, "5-3-2-14-11-16-8-7");
      assert.equal(newarr, 33);
    });
  });
  describe("c", function () {
    it("case1", function () {
      var arr = ["8", 2, 5, 12, "0", 1, 3, 10, "1", "7"];
      var newarr = PrintArr4(arr);
      expect(newarr).to.eql(["8", 2, 5, 12, "0", 3, 10, "1", "7"]);
    });
  });
  describe("d", function () {
    it("case1", function () {
      var arr = ["8", 2, 5, 12, "0", 1, 3, 10, "1", "7"];
      var newarr = PrintArr4Odd(arr);
      expect(newarr).to.eql(["1", "7"]);
    });
  });
});
//bai 4
describe("bai4", function () {
  describe("a", function () {
    it("case1", function () {
      var sanPham = [
        { ten: "Mũ", gia: 30000, soLuong: 100 },
        { ten: "Áo ", gia: 12000, soLuong: 50 },
        { ten: "Quan", gia: 12000, soLuong: 30 },
        { ten: " Túi", gia: 101000, soLuong: 20 },
      ];
      var newage = Number(sanPham);
      assert.equal(newage, 200);
    });
  });
  describe("b", function () {
    it("case1", function () {
      var sanPham = [
        { ten: "Mũ", gia: 30000, soLuong: 100 },
        { ten: "Áo ", gia: 12000, soLuong: 50 },
        { ten: "Quan", gia: 12000, soLuong: 30 },
        { ten: " Túi", gia: 101000, soLuong: 20 },
      ];
      var newage = sortsanpham(sanPham);
      expect(newage).to.eql([
        { ten: " Túi", gia: 101000, soLuong: 20 },
        { ten: "Quan", gia: 12000, soLuong: 30 },
        { ten: "Áo ", gia: 12000, soLuong: 50 },
        { ten: "Mũ", gia: 30000, soLuong: 100 },
      ]);
    });
  });
  describe("c", function () {
    it("case1", function () {
      var sanPham = [
        { ten: "Mũ", gia: 30000, soLuong: 100 },
        { ten: "Áo ", gia: 12000, soLuong: 50 },
        { ten: "Quan", gia: 12000, soLuong: 30 },
        { ten: "Túi", gia: 101000, soLuong: 20 },
      ];
      var newage = title(sanPham);

      assert.equal(newage, "Túi:20");
    });
  });
});
//bai 5
describe("bai5", function () {
  describe("cau a", function () {
    it("case1", function () {
      var newFunction = DateQ1();
      assert.equal(newFunction, "Năm nay không phải năm nhuận");
    });
  });
  describe("cau b", function () {
    it("case1", function () {
      var getvalue = TetDate();
      var nowDate = new Date();
      var TetDat = new Date("");
      TetDat.setFullYear(2023, 0, 1);
      var tinhngay = Math.ceil(
        (TetDat.getTime() - nowDate.getTime()) / (24 * 60 * 60 * 1000)
      );
      assert.equal(getvalue, tinhngay);
    });
  });
});
//bai 6
describe("bai6", function () {
  describe("a", function () {
    it("case1", function () {
      var Text = "JavaScript strings are for storing and manipulating text";
      var newage = timkiem(Text);
      assert.equal(newage, -1);
    });
  });
  describe("b", function () {
    it("case1", function () {
      var Text = "JavaScript strings are for storing and manipulating text";
      var newage = thaythe(Text);
      assert.equal(
        newage,
        "J@vaScript strings are for storing and manipulating text"
      );
    });
  });
});
//bai7
describe("bai7", function () {
  describe("bai7", function () {
    it("case1", function () {
      var newFunction = FunctionTest(4);
      assert.equal(newFunction, 24);
    });
  });
});

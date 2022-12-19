let expect = require("chai").expect;
let { addARR, sapxeptangdan, sapxepgiamdan, sum, mystring } = require("./bai1");
let { age } = require("./bai2");
let { Number, sortsanpham, title } = require("./bai4");
let { timkiem, thaythe,laychuoi } = require("./bai6");
let { FunctionTest } = require("./bai7");
let { Print, Sum, PrintArr4, PrintArr4Odd } = require("./bai3");
let { DateQ1, TetDate } = require("./bai5");
var assert = require("assert");
//bai 1
describe("bai1", function () {
  describe("a", function () {
    it("case1", function () {
      var arr = [18,3,2,20,11,9,1];
      var newarr = addARR(arr);
      assert.equal(newarr[newarr.length - 1], 7);
    });
    it("case2", function () {
      var arr = [18,3,2,20,11,9,1];
      var newarr = addARR(arr);
      assert.equal(newarr.length, 8);
    });
  });
  describe("b1", function () {
    it("case 1", function () {
      var arr = [18,3,2,20,11,9,1,7];
      var newarr = sapxeptangdan(arr);
      expect(newarr).to.eql([1,2,3,7,9,11,18,20]);
    });
  });
  describe("b2", function () {
    it("case 1", function () {
      var arr = [18,3,2,20,11,9,1,7];
      var newarr = sapxepgiamdan(arr);
      expect(newarr).to.eql([20,18,11,9,7,3,2,1]);
    });
  });
  describe("c", function () {
    it("case 1", function () {
      var arr = [18,3,2,20,11,9,1,7];
      var newarr = sum(arr);
      assert.equal(newarr, 71);
    });
  });
  describe("d", function () {
    it("case 1", function () {
      var arr = [18,3,2,20,11,9,1,7];
      var newarr = mystring(arr);
      assert.equal(newarr, "18-3-2-20-11-9-1-7");
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
      var arr = [12,2,5,"15","0", 1,20,10,"1","7"] ;
      const newarr = Print(arr);
      expect(newarr).to.eql([12, 2, 5, 1,20, 10]);
    });
  });
  describe("b", function () {
    it("case1", function () {
      var arr = [12, 2, 5, 1,20, 10];
      var newarr = Sum(arr);
      assert.equal(newarr, 50);
    });
  });
  describe("c", function () {
    it("case1", function () {
      var arr = [12,2,5,"15","0", 1,20,10,"1","7"] ;
      var newarr = PrintArr4(arr);
      expect(newarr).to.eql([12,2,5,"15","0",20,10,"1","7"]);
    });
  });
  describe("d", function () {
    it("case1", function () {
      var arr = [12,2,5,"15","0", 1,20,10,"1","7"] ;
      var newarr = PrintArr4Odd(arr);
      expect(newarr).to.eql(["15","1", "7"]);
    });
  });
});
//bai 4
describe("bai4", function () {
  describe("a", function () {
    it("case1", function () {
      var sanPham =
      [{ten :"Dienthoai",gia:40000,soLuong:120},
      {ten :"Xe",gia:12000,soLuong:60 },
      {ten :" Maytinh",gia:90000,soLuong:20}];
      var newage = Number(sanPham);
      assert.equal(newage, 200);
    });
  });
  describe("b", function () {
    it("case1", function () {
      var sanPham =
      [{ten :"Dienthoai",gia:40000,soLuong:120},
      {ten :"Xe",gia:12000,soLuong:60 },
      {ten :" Maytinh",gia:90000,soLuong:20}];
      var newage = sortsanpham(sanPham);
      expect(newage).to.eql([
        {ten :"Xe",gia:12000,soLuong:60 },
        {ten :"Dienthoai",gia:40000,soLuong:120},
        {ten :" Maytinh",gia:90000,soLuong:20}
      ]);
    });
  });
  describe("c", function () {
    it("case1", function () {
      var sanPham =
      [{ten :"Dienthoai",gia:40000,soLuong:120},
      {ten :"Xe",gia:12000,soLuong:60 },
      {ten :" Maytinh",gia:90000,soLuong:20}];
      var newage = title(sanPham);
      assert.equal(newage, "Xe:60");
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
      var Text = "Folder Lock uses a master password to control locked content";
      var newage = timkiem(Text);
      assert.equal(newage, -1);
    });
  });
  describe("b", function () {
    it("case1", function () {
      var Text = "Folder Lock uses a master password to control locked content";
      var newage = thaythe(Text);
      assert.equal(
        newage,
        "Folder Lock uses @ m@ster p@ssword to control locked content"
      );
    });
  });
  describe("c", function () {
    it("case1", function () {
      var Text = "Folder Lock uses a master password to control locked content";
      var newage = laychuoi(Text);
      assert.equal(
        newage,
        "ent"
      );
    });
  });
});
//bai7
describe("bai7", function () {
  describe("bai7", function () {
    it("case1", function () {
      var newFunction = FunctionTest(5);
      assert.equal(newFunction, 120);
    });
  });
});

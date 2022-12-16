// Bài 1 : Cho var arr= [5,3,2,14,11,16,8]
// a . Thêm số 7 vào cuối arr và loại bỏ phần tử đầu tiên của mảng
// B . Sắp xếp các phần tử arr theo thứ tự tăng dần và giảm dần
// c,Tính tổng các số chẵn có trong arr
// d ,Chuyển arr sang kiểu chuỗi và thêm dấu '-' giữa các phần tử ?

var arr = [5, 3, 2, 14, 11, 16, 8];

function addARR(arr) {
  arr.push(7);
  return arr;
}
function sapxeptangdan(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}
function sapxepgiamdan(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}
function sum(arr) {
  var newarr = arr.filter(function (value) {
    return value % 2 === 0;
  });
  var sumvalue = newarr.reduce(function (init, value) {
    return (init += value);
  }, 0);
  return sumvalue;
}
function mystring(arr) {
  var newarr = arr.join("-");
  return newarr;
}
module.exports = {
  addARR,
  sapxeptangdan,
  sapxepgiamdan,
  sum,
  mystring,
};

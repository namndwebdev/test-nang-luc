// Bài 1 : Cho var arr= [5,3,2,14,11,16,8] !!Chú ý "Các câu hỏi a,b,c,d có dữ liệu liên quan với nhau"
// a . Thêm số 7 vào cuối arr
// B . Sắp xếp các phần tử arr theo thứ tự tăng dần và giảm dần
// c,Tính tổng các số chẵn có trong arr
// d ,Chuyển arr sang kiểu chuỗi và thêm dấu '-' giữa các phần tử ?

//LƯU Ý CHỈ ĐƯỢC CHỈNH SỬA TRONG ĐOẠN
//* Code here
//* ...
//* End

function addARR(arr) {
  arr = [...arr, 7];
  return arr;
  //End
}

function sapxeptangdan(arr) {
  arr.sort((a, b) => a - b);
  return arr;
  //End
}
function sapxepgiamdan(arr) {
  arr.sort((a, b) => b - a);
  return arr;
  //End
}
function sum(arr) {
  var newarr1 = arr.filter(function (value) {
    return value % 2 == 0;
  });
  var newArr = newarr1.reduce(function (a, b) {
    return a + b;
  });
  return newArr;
  //End
}

function mystring(arr) {
  var newArr = arr.join("-");
  return newArr;
  //End
}
module.exports = {
  addARR,
  sapxeptangdan,
  sapxepgiamdan,
  sum,
  mystring,
};

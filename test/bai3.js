// Bài 3: var array4 = ["8",2,5,12,"0", 1,3,10,"1","7"]
// a.	Duyệt array4, Tạo numberArr chứa các số có trong array4
// b.	Tình tổng các phần tử trong numberArr
// c.	In ra các phần tử trong array4 trừ số 1
// e.	In ra các số dạng chuỗi là số lẻ

function Print(arr) {
  var numberArr = arr.filter((value) => {
    return typeof value === "number";
  });
  return numberArr;
}
function Sum(arr) {
    var numberArr = arr.reduce(function (init,value) {
        return init +=value
    },0)
    return numberArr;
  }
  
  function PrintArr4(arr) {
    var newArr= arr.filter(function (value) {
        return value !==1;
    })
    return newArr;
  }
  function PrintArr4Odd(arr) {
    var newArr= arr.filter(function (value) {
        return typeof value ==='string' && value % 2!==0;
    })
    
    return newArr;
  }
module.exports = {
  Print,
  Sum,
  PrintArr4,
  PrintArr4Odd
};


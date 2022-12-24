// Bài 3: var array4 = ["8",2,5,12,"0", 1,3,10,"1","7"]
// a.	Duyệt array4, Tạo numberArr chứa các số có trong array4
// b.	Tình tổng các phần tử trong numberArr
// c.	In ra các phần tử trong array4 trừ số 1
// e.	In ra các số dạng chuỗi là số lẻ

function Print(arr) {
  var numberArr = arr.filter(function (value) {
    if (typeof value === "number") {
      return true;
    }
  });
  return numberArr;
  //End
}
function Sum(arr) {
  var newArr = arr.reduce((a, b) => a + b);
  return newArr;
}

function PrintArr4(arr) {
  var newArrr = arr.filter(function(value){
    if(value !== 1) {
        return value
    }
   })
   return newArrr
}
function PrintArr4Odd(arr) {
 var newArr = arr.filter(function(value){
  if(typeof value === 'string'){
    return value %2 !== 0
  }
 })
 return newArr
}
module.exports = {
  Print,
  Sum,
  PrintArr4,
  PrintArr4Odd,
};

// Bài 7 : Cho hàm fuction MyFuction có tham số là X. Hãy sử dụng hàm function tính lũy thừa tham số được truyền vào ?
//  (Vd : X= 4 => MyFuction(4)=24)
function FunctionTest(number) {
if (number === 0){
  return 1
}else if (number < 0){
  return -1
}
else{
  return number * FunctionTest(number-1)
}
  }
  module.exports = {
    FunctionTest
  };
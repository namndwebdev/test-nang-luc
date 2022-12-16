// Bài 7 : Cho hàm fuction MyFuction có tham số là X. Hãy sử dụng hàm function tính lũy thừa tham số được truyền vào ?
//  (Vd : X= 4 => MyFuction(4)=24)
function FunctionTest(number) {
   //Tạo hàm Funciton mới vào đây
    function MyFuction(X=number) {
        var init=1;
        for (let i = X; i >=1 ; i--) {
          init *=i  
            
        }
        return init;
    }
    var newFunction=MyFuction()
    return newFunction
  }
  module.exports = {
    FunctionTest
  };
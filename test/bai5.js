// Bài 5 : Sử dụng hàm Date()
// a.  Viết chương trình để xét năm hiện tại nếu là năm nhuận thì in ra “Năm nay là năm nhuận”,
// nếu không thì in ra “Năm nay không phải năm nhuận ”?
//
// b. Sử dụng hàm Date() viết chương trình tính số ngày từ hiện tại cho đến Tết Dương Lịch (1/1/2023)

function DateQ1() {
  var getDate = new Date();

  return getDate.getFullYear % 4 === 0
    ? "Năm nay là năm nhuận"
    : "Năm nay không phải năm nhuận";
}
function TetDate() {
  var nowDate = new Date();
  var TetDat = new Date("");
  TetDat.setFullYear(2023, 0, 1); 
  var tinhngay = Math.ceil(
    (TetDat.getTime() - nowDate.getTime()) / (24 * 60 * 60 * 1000)
  );
  return tinhngay;
}
module.exports = {
  DateQ1,
  TetDate,
};

// Bài 6 : Cho biến var Text=  “JavaScript strings are for storing and manipulating text.”.
// a .  Tìm chuỗi ‘nodemy’ có trong đoạn text trên không ? Xuất hiện ở vị trí bao nhiêu ?.
// b . Thay thế tất cả các ký tự “a” trong biến Text thanh “@”?

var Text = "JavaScript strings are for storing and manipulating text";
function timkiem(Text) {
let index = Text.indexOf('nodemy')
return index

}
function thaythe(Text) { 
var newText = Text.replace('a','@')
  return newText;
 
}
module.exports = {
  timkiem,
  thaythe,
};

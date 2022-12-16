// Bài 6 : Cho biến var Text=  “JavaScript strings are for storing and manipulating text.”.
// a .  Tìm chuỗi ‘nodemy’ có trong đoạn text trên không ? Xuất hiện ở vị trí bao nhiêu ?.
// b . Thay thế tất cả các ký tự “a” trong biến Text thanh “@”?

var Text = "Folder Lock uses a master password to control locked content";
function timkiem(Text) {
  var index = Text.indexOf("nodemy");
  return index;
}
function thaythe(Text) {
  var index1 = Text.replace("a", "@");
  return index1;
}
function laychuoi(Text) {
 //Code here
  //...
  
  return Text;
  //End
}
module.exports = {
  timkiem,
  thaythe,
  laychuoi
};

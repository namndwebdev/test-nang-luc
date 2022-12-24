// Bài 2: Viết hàm xếp loại tuổi của người A , khi biết tuổi người A= 65 ?
// Nhỏ hơn 18 thì là trẻ em .
// Lớn hơn 18 và nhỏ hơn 60 là người trưởng thanh
// Còn lại là người cao tuổi.

function age(ageA) {
var newArr = ageA < 18 ? 'Trẻ em' : ageA < 60 ? "Người trưởng thành" : 'nguoi cao tuoi'
  return newArr;
  //End
}
module.exports = {
  age,
};

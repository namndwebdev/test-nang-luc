// Bài 5 : Sử dụng hàm Date()
// a.  Viết chương trình để xét năm hiện tại nếu là năm nhuận thì in ra “Năm nay là năm nhuận”,
// nếu không thì in ra “Năm nay không phải năm nhuận ”?
//
// b. Sử dụng hàm Date() viết chương trình tính số ngày từ hiện tại cho đến Tết Dương Lịch (1/1/2023)

function DateQ1() {
let year = new Date()
let nowYear = year.getFullYear()
let check = false;
if (nowYear % 4 === 0){
  check = true
}
if(check == true){
  return `Năm nay là năm nhuận`
}else{
  return `Năm nay không phải năm nhuận`
}
}
function TetDate() {
  let holiday = new Date('2023-01-01');
  let today = new Date();  
  const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};

let time = get_day_of_time(today,holiday)
return time
}
module.exports = {
  DateQ1,
  TetDate,
};

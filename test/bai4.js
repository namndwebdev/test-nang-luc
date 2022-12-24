// Bài 4: var sanPham =
// [{ten :"Mũ",gia:30000,soLuong:100},
// {ten :"Áo ",gia:12000,soLuong:50 },
// {ten :"Quan",gia:12000,soLuong:30},
// {ten :" Túi",gia:101000,soLuong:20}];
// a.	Tính tổng số lượng các sản phẩm trên  .
// b.	Xếp các sản phẩm theo giá tăng dần .
// c.	Sử dụng vòng lặp để tìm sản phẩm có giá là 12000 đ . (In ra tên giá và số lượng) (VD output: "Túi:20" )

function Number(sanPham) {
  let total = 0
 sanPham.forEach(function(value){
  total += value.soLuong
})
return total
}
function sortsanpham(sanPham) {
 var newArr = sanPham.sort((a,b) => a.gia - b.gia)
 return newArr
}
function title(sanPham) {
  var newArr = [];
  sanPham.forEach((value) =>{
    if(value.gia === 101000){
      newArr.push(`${value.ten}:${value.soLuong}`)
    }
  })
return newArr
}
module.exports = {
  Number,
  sortsanpham,
  title,
};

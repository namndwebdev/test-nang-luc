// Bài 4: var sanPham =
// [{ten :"Mũ",gia:30000,soLuong:100},
// {ten :"Áo ",gia:12000,soLuong:50 },
// {ten :"Quan",gia:12000,soLuong:30},
// {ten :" Túi",gia:101000,soLuong:20}];
// a.	Tính tổng số lượng các sản phẩm trên  .
// b.	Xếp các sản phẩm theo giá tăng dần .
// c.	Sử dụng vòng lặp để tìm sản phẩm có giá là 12000 đ . (In ra tên giá và số lượng) (output: "Túi:20" )
var sanPham = [
  { ten: "Mũ", gia: 30000, soLuong: 100 },
  { ten: "Áo ", gia: 12000, soLuong: 50 },
  { ten: "Quan", gia: 12000, soLuong: 30 },
  { ten: "Túi", gia: 101000, soLuong: 20 },
];
function Number(sanPham) {
  var sumproduct = sanPham.reduce(function (sumproduct, value) {
    return (sumproduct += value.soLuong);
  }, 0);
  return sumproduct;
}
function sortsanpham(sanPham) {
  var sort = sanPham.sort(function (a, b) {
    return a.soLuong - b.soLuong;
  });
  return sort;
}
function title(sanPham) {
  var product = sanPham.filter(function (value) {
    return value.gia === 101000;
  });
  for (var value of product) {
    var getValue = value.ten + ":" + value.soLuong;
    return getValue;
  }
}
module.exports = {
  Number,
  sortsanpham,
  title,
};

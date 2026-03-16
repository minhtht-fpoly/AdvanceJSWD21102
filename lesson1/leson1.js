//Khai báo biến
// var let const
// var a = 1;
// var b = "a";
// c = 3;
//const khai báo hằng số ( không thể thay đổi giá trị)
//var let
// Biến cục bộ và biến toàn cục
//Toàn cục : Có thể khai báo lại
//Cục bộ
// var a = 8;
// var a = 10;
// const b = 12;
// b = 14;

// const arr = [1, 2, 3, 4];
// // arr.pop();

// // console.log(arr);
// const arr1 = arr;
// arr1.pop();
// console.log(arr1);
// function add() {
//   var a = 1;
//   let b = 2;
// }
// console.log(a);

// Mảng:
// const arr = new Array(1, 2, 3, 4);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Truy xuất phần tử (chỉ mục (index))
console.log(arr.length);
//Thao túng phần tử mảng ( thêm sửa xóa)
//splice(bắt đầu từ đâu, xóa bao nhiêu phần tử,.....Thêm vào từ vị trí bắt đầu)
//Thêm đầu :
// arr.splice(0, 0, 0);
// arr.splice(arr.length, 0, 999);
arr.splice(-2, 1);

console.log(arr);
(function add() {
  var a = 9;
  var b = 10;
  alert(a + b);
})();

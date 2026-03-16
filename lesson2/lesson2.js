//Hàm
//Hàm không thực thi khi được khai báo mà thực thi khi được gọi
//Declaration function ( hàm khai báo)
// function add() {
//   alert(3 + 4);
// }
// add();
//Expression function ( hàm biểu thức)
// const addNumbers = function () {
//   var loiChao = "Xin chào";
//   alert(loiChao);
// };
// addNumbers();
// console.log(loiChao);
// let data = "";
// function logIn() {
//   data = {
//     ten: "Minh",
//   };
// }
// function loiChao() {
//   alert("Xin chào " + data.ten);
// }
// logIn();
// loiChao();
//Hàm mũi tên
// const loiChao = () => {
//   alert("Xin chào");
// };
// loiChao();
//IIFE
// (() => {
//   alert("Xin chào");
//   return 2;
// })();
// const ketQua = function () {
//   alert(2);
//   return 2;
//   alert("check");
// };
// ketQua();
// function add(a, b) {
//   alert(a - b);
// }
// add(5, 4);
// function logIn(callback) {
//   const data = {
//     id: 5436757675645,
//   };
//   callback(data.ten, data.ho, data.tuoi);
// }

// function loiChao(ten, ho, tuoi) {
//   alert(`Xin chào ${ho} ${ten} ${tuoi}`);
// }
// logIn(loiChao);
// const a = 10;
// console.log(b);
// console.log(a);
//Hàm mũi tên trả về giá trị
const returnValue = (a, b) => a + b;

console.log(returnValue(3, 4));

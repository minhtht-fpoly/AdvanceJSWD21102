// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);
// // console.log(a);
// // console.log(b);
// // var a = 8;
// // console.log(a);
// function logIn(callback) {
//   setTimeout(() => {
//     var data = { ten: "Minh", IGN: "noobmaster69" };
//     callback(data);
//   }, 1500);
// }
// logIn(greeting);
// function greeting(data) {
//   alert("welcome" + data.IGN);
// }
// callback, promise, async await
const moneyStatus = new Promise((resolve, reject) => {
  setTimeout(() => {
    const posibility = Math.random();
    if (posibility >= 0.5) {
      resolve("Lấy lại tiền thành công");
    } else {
      reject("Còn cái nịt");
    }
  }, 1800);
});
moneyStatus
  .then((thanhCong) => {
    console.log(thanhCong);
  })
  .catch((err) => {
    console.error(err);
  });

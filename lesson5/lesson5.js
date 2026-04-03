// const arr  = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// for(let i = 0; i< arr.length;i++){
//     console.log(arr[i])
// }
// arr.forEach((a)=>{
//     console.log(a)

// })
const productInfo = [
  {
    id: 1,
    name: "Laptop Dell Inspiron 15",
    price: 18500000,
    category: "Laptop",
    stock: 12,
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 15900000,
    category: "Điện thoại",
    stock: 8,
  },
  {
    id: 3,
    name: "Tai nghe Sony WH-1000XM4",
    price: 6500000,
    category: "Phụ kiện",
    stock: 15,
  },
  {
    id: 4,
    name: "Chuột Logitech G304",
    price: 850000000000,
    category: "Phụ kiện",
    stock: 25,
  },
];
let id;
//In ra màn hình thông tin của những sản phẩm này
function renderProduct() {
  let renderString = "";
  productInfo.forEach((product, i) => {
    renderString =
      renderString +
      `<tr>
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        ${
          product.stock > 20
            ? `<td style="background-color: green;">${product.stock}</td>`
            : product.stock > 10
              ? `<td style="background-color: yellow;">${product.stock}</td>`
              : `<td style="background-color: red;">${product.stock}</td>`
        }
        <td>
          <button class="btn btn-sm btn-primary me-2"onclick="fillEditInfo(${i})">Sửa</button>
          <button class="btn btn-sm btn-danger" onclick="xoa(${i})">Xóa</button>
        </td>
      </tr>`;
  });
  document.getElementById("renderBody").innerHTML = renderString;
}
function xoa(id) {
  if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    console.log(id);
    productInfo.splice(id, 1);
  }
  renderProduct();
}

renderProduct();
function fillEditInfo(i) {
  id = i;
  document.getElementById("eName").value = productInfo[i].name;
  document.getElementById("ePrice").value = productInfo[i].price;
  document.getElementById("eCategory").value = productInfo[i].category;
  document.getElementById("eStock").value = productInfo[i].stock;
}
function editProduct(event) {
  event.preventDefault();
  let pName = document.getElementById("eName").value;
  let pPrice = document.getElementById("ePrice").value;
  let pCategory = document.getElementById("eCategory").value;
  let pStock = document.getElementById("eStock").value;
  productInfo[id] = {
    name: pName,
    price: pPrice,
    category: pCategory,
    stock: pStock,
  };
  renderProduct();
}

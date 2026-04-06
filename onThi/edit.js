const params = new URLSearchParams(window.location.search);
const id = params.get("id");
alert(id);

//Lấy dữ liệu và điền dữ liệu cần sửa vào form
fetch(`http://localhost:3000/books/${id}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById("name").value = data.title;
    document.getElementById("price").value = data.price;
    document.getElementById("category").value = data.category;
    document.getElementById("author").value = data.author;
  });
async function editBook() {
  try {
    const tenSach = document.getElementById("name").value;
    const giaSach = document.getElementById("price").value;
    const danhMuc = document.getElementById("category").value;
    const tacGia = document.getElementById("author").value;
    const respon = await fetch(`http://localhost:3000/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: tenSach,
        price: giaSach,
        author: tacGia,
        category: danhMuc,
      }),
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
}

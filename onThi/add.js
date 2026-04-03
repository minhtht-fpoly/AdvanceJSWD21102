async function addBook() {
  const tenSach = document.getElementById("name").value;
  const giaSach = document.getElementById("price").value;
  const danhMuc = document.getElementById("category").value;
  const tacGia = document.getElementById("author").value;
  const respon = await fetch("http://localhost:3000/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: tenSach,
      price: giaSach,
      author: tacGia,
      category: danhMuc,
    }),
  });
  window.location.href = "index.html";
}

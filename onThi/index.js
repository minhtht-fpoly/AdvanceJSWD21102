async function renderProducts() {
  try {
    const respon = await fetch("http://localhost:3000/books");
    const data = await respon.json();
    console.log(data);
    let renderString = ``;
    data.forEach((book, i) => {
      renderString =
        renderString +
        `<tr>
            <td>${i + 1}</td>
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td>${book.category}</td>
            <td>${book.author}</td>
            <td>
              <button class="btn btn-sm btn-primary me-2">
              <a href="edit.html?id=${book.id}">Sửa</a>
              </button>
              <button class="btn btn-sm btn-danger" onclick = "xoa('${book.id}')">Xóa</button>
            </td>`;
    });
    document.getElementById("renderBody").innerHTML = renderString;
  } catch (error) {}
}
renderProducts();
async function xoa(id) {
  console.log(id);
  try {
    if (window.confirm("Bạn có chắc chắn muốn xóa thông tin này không?")) {
      const respon = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      });
    }
  } catch (error) {}
}

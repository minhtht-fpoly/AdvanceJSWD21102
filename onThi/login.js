async function loginAccount() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const respon = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    alert("Đăng nhập thành công");
    localStorage.setItem("accessToken", respon.data.accessToken);
  } catch (error) {
    alert("Đăng nhập thất bại");
  }

  //   window.location.href = "index.html";
}

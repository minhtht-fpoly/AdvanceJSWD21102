async function loginAccount(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  axios
    .post("http://localhost:3000/login", { email: email, password: password })
    .then((res) => {
      console.log(res);
      alert("Đăng nhập thành công");
      localStorage.setItem("accessToken", res.data.accessToken);
    })
    .catch((err) => {
      console.log(err);
    });

  // fetch("http://localhost:3000/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email: email, password: password }),
  // })
  //   .then((res) => {
  //     if (res.ok) {
  //       alert("Đăng nhập thành công");
  //     }
  //   })
  //   .catch((err) => alert("Đăng nhập thất bái"));

  //   window.location.href = "index.html";
}

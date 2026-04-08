async function registerAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("http://localhost:3000/register", {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
    });
  //   window.location.href = "index.html";
}

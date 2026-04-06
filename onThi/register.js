async function registerAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const respon = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  //   window.location.href = "index.html";
}

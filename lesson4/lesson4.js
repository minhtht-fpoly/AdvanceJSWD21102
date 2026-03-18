// document.querySelector("#target").style.backgroundColor = "red"
// document.querySelector("#target2").className = "border"
// document.querySelector("#target2").classList.toggle("bColor")

//innerText
// document.querySelector("#target").innerText = "<div>Text 1</div>"
// //innerHTML
// document.querySelector("#target2").innerHTML = "<div>Text 2</div>"
// const newDiv = document.createElement("div")
// newDiv.innerHTML = "Con út"
// document.querySelector("#target").appendChild(newDiv)
// document.querySelector("#target").insertAdjacentHTML("beforebegin", "<div>Anh</div>")
// document.querySelector("#target").insertAdjacentHTML("beforeend", "<div>Con út</div>")
// document.querySelector("#target").insertAdjacentHTML("afterend", "<div>Em</div>")
// document.querySelector("#target").insertAdjacentHTML("afterbegin", "<div>Con cả</div>")
const live = document.getElementsByClassName("con")
const static = document.querySelectorAll(".con")
const newNode = document.createElement("div")
newNode.className = "con"
document.querySelector("#target").appendChild(newNode)
console.log(live,static)




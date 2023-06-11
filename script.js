

var form = document.getElementById("form1")
var wrapper = document.getElementsByClassName("form-wrapper")[0]
var form_first = document.getElementsByClassName("form-first")[0]
var form_second = document.getElementsByClassName("form-second")[0]
var backBtn = document.getElementsByClassName("back-btn")[0]




form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("submit")
  wrapper.classList.add("wrapper-slide-left")

  //   setTimeout(() => {
  //     form_first.style.display = "none"
  //     form_second.style.display = "block"
  //     form_second.classList.add("form-first-slideIn")
  //   }, 500)
})

backBtn.addEventListener("click", () => {
  wrapper.classList.remove("wrapper-slide-left")
  wrapper.classList.add("wrapper-slide-right")
})







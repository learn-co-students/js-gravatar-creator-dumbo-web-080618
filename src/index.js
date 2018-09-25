const form = document.getElementById("identicon-form")
let big = document.getElementById('identicon')


document.addEventListener("DOMContentLoaded", () => {

form.addEventListener("submit", handleSubmit)

})

function handleSubmit(e) {
  e.preventDefault()
  let input = document.getElementById("text").value
  let obj = new Identicon(input);
  updateDOM(obj)

}

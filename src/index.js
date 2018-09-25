function handleSubmit(e) {
  e.preventDefault()
  const input = e.currentTarget.querySelector(".field input").value
  const user = new Identicon(input);
  e.currentTarget.querySelector(".field input").value = ""
  updateDOM(user);


}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", (e) => handleSubmit(e))
})

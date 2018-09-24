const form = document.getElementById("identicon-form")
const text = document.getElementById("text-entry")
function handleSubmit(e) {
  e.preventDefault()
  const identicon = new Identicon (text.value)
  // alert(`Identicon's hash is: ${identicon.colorHash}`)
  let squares = Identicon.getSquares()
  let colors = identicon.getColors()
  for (let key in squares){
    document.getElementById(key).style.backgroundColor = colors[squares[key]]
  }
  // alert(`Text value is: ${text.value}\nHashed is: ${md5.array(text.value)}`)
}
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", handleSubmit)
})

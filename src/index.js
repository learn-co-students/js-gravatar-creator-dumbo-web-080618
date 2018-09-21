function handleSubmit(e) {

}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", a => {
    a.preventDefault()
    let blockColor = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
    // let defColor = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
    let defColor = `rgb(255,255,255)`
    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 3; j++){
        if(getRandomInt(2) == 1){
          document.getElementById(`${i}-${j}`).style.backgroundColor = blockColor
          document.getElementById(`${i}-${4-j}`).style.backgroundColor = blockColor
        }
        else{
          document.getElementById(`${i}-${j}`).style.backgroundColor = defColor
          document.getElementById(`${i}-${4-j}`).style.backgroundColor = defColor
        }
      }
    }

  })
})

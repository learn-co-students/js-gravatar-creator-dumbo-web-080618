function handleSubmit(e) {

}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputValue = document.querySelector("input").value
    let randomMd5 = md5.array(inputValue)
    let random = md5.array(inputValue).slice(-4, -1)
    let blockColor = `rgb(${random})`
    let whiteColor = `rgb(256,256,256)`
    let c = 0
    console.log(random)

    while (c < randomMd5.length - 1) {
      for (let i=0; i<5; i++) {
        for (let x=0; x<3; x++) {
          if (randomMd5[c] > 100){
            document.getElementById(`${i}-${x}`).style.backgroundColor = blockColor
            document.getElementById(`${i}-${4-x}`).style.backgroundColor = blockColor
            c++
          }
          else{
              document.getElementById(`${i}-${x}`).style.backgroundColor = ""
              document.getElementById(`${i}-${4-x}`).style.backgroundColor = ""
            c++
          }
        }
      }
    }
    document.querySelector("input").value = ""
 })
})

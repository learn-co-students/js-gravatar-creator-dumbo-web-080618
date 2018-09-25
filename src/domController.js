function row(x){
  return splitIndex = x.id.split("-");

}

function sqFilter(sqs){
  let originalArr = []
  for (i in sqs){
    let target = row(sqs[i])
    if (target[1] != 3 && target[1] != 4){
    originalArr.push(sqs[i])
    }
  }
  return originalArr
}

function clearColor(x){
  for (i in x){
    x[i].setAttribute(`style`, "")
  }
  return x
}


function updateDOM(obj) {

  let yesNo = obj.tF()
  let squares = Array.from(big.children)

  squares = clearColor(squares)
  squares = sqFilter(squares)

  for (i = 0; i < squares.length; i++) {
    if (yesNo[i]){
      let index = row(squares[i])

      if (index[1] == 0){

        let mirrordSq = document.getElementById(`${index[0]}-4`);
        squares[i].setAttribute(`style`, `background: rgb(${obj.color()})`)

        mirrordSq.setAttribute(`style`, `background: rgb(${obj.color()})`)
      } else if (index[1] == 1){

        let mirrordSq = document.getElementById(`${index[0]}-3`);
        squares[i].setAttribute(`style`, `background: rgb(${obj.color()})`)

        mirrordSq.setAttribute(`style`, `background: rgb(${obj.color()})`)

      } else {
        squares[i].setAttribute(`style`, `background: rgb(${obj.color()})`)
      }
    }
  }
}

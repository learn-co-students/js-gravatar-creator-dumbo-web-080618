function updateDOM(identicon) {
  const grid = identicon.grid
  for (let r = 0; r < 5; r++){
    for (let c = 0; c < 5; c++){
      if (grid[r][c] === 1){
        document.getElementById(`${r}-${c}`).style.backgroundColor = identicon.color
      }
      else{
        document.getElementById(`${r}-${c}`).style.backgroundColor = "rgb(280,280,280)"
      }
    }
  }
}

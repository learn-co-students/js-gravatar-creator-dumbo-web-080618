class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(name){
    this.name = name
    this.md5array = md5.array(name)
    this.color = `rgb(${this.md5array[0]}, ${this.md5array[1]}, ${this.md5array[2]})`
    this.grid = this.createBlocks();

  }

  createBlocks(){
    let grid = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ]

    let count = 0;
    for (let r = 0; r < 5; r++){
      for (let c = 0; c < 3; c++){
        if (this.md5array[count]%2 === 0){
          grid[r][c] = 1
          if(c === 0){
            grid[r][4] = 1;
          }
          else if (c === 1){
            grid[r][3] = 1;
          }
        }
        count++;
      }
    }
    return grid
  }



}

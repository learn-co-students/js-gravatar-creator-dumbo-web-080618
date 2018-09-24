let Identicon = (function () {
  
  const empty = [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
  const squares = {
    '0-0' : 0, '0-1' : 1, '0-2' : 2, '0-3' : 1, '0-4' : 0,
    '1-0' : 3, '1-1' : 4, '1-2' : 5, '1-3' : 4, '1-4' : 3,
    '2-0' : 6, '2-1' : 7, '2-2' : 8, '2-3' : 7, '2-4' : 6,
    '3-0' : 9, '3-1' : 10, '3-2' : 11, '3-3' : 10, '3-4' : 9,
    '4-0' : 12, '4-1' : 13, '4-2' : 14, '4-3' : 13, '4-4' : 12
  }
  Object.freeze(squares)
  return class Identicon {
    // make use of the md5.array method, which is in scope because we required it in our index.html
    //generate md5 hasher
  
    constructor(text){
      this.text = text
      this.colorHash = md5.array(text)
      this.leaveBlank = this.colorHash.every((el, idx) => el === empty[idx])
    }

    static getSquares() {
      return squares
    }

    getColors(){
      let colors = []
     this.colorHash.forEach(num => {
      if(!this.leaveBlank){
        let color = num%2 === 0
          ? `rgb(${this.colorHash[0]},${this.colorHash[1]},${this.colorHash[2]})`
          : ""
        colors.push(color)} else {
          colors.push('')
        }
      })
      return colors
    }
  }
})()


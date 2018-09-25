let identId = 0;
let store = {identicons: []}
class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html

  constructor(name){
    this.name = name
    store.identicons.push(this)
    this.id = ++identId
    }
  hash(){
    return md5.array(this.name)
  }
  color(){
    let rgb = this.hash().slice(0,3)
    return rgb.join(", ")
  }
  tF(){
    let nums = this.hash().slice()
    return nums.map(num => num % 2 === 0)
  }
  //color() We can use these values to derive both our color as well as our block
// positions. For color, the bounds of 0 - 255 are very convenient! We could, for
// example, always use the first three values of the hash array and map them to an
// rgb value.
  // y/n for color sq
}

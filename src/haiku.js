export class Haiku {
  constructor(line1,line2,line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.fullHaiku = `${this.line1} ${this.line2} ${this.line3}`;
    this.haikuArray = this.fullHaiku.split(" ");
  }
  getFullHaiku(){
    return this.fullHaiku;
  }
  getHaikuWordArray(){
    return this.haikuArray;
  }
  getVowels(){
    let vowels = this.fullHaiku.match(/[aeiou]/gi);
    return vowels;
  }
  getVowelExceptions(){
    // let regEx = /e/;
    let vowelExceptionsArray = [];
    for (let i = 0; i < this.haikuArray.length; i++) {
      let word = this.haikuArray[i];
      if (word == "imagine") {
        return vowelExceptionsArray.push(word);
      } else {
        return vowelExceptionsArray.push(word);
      }
    }
    return vowelExceptionsArray;
  }
}

//
// ("I"||"A"||"O"||"i"||"a"||"o")
// let removeLastChar = word.substring(word.length-1,1);

export class Haiku {
  constructor(line1,line2,line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.fullHaiku = `${this.line1} ${this.line2} ${this.line3}`;
    this.haikuArray = this.fullHaiku.split(" ");
    this.lastCharVowel = [];
    this.doubleVowel = [];
    this.lastTwoCharEs = [];
    this.silentCompound = [];
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
  getLastCharVowel() {
    for (let i = 0; i < this.haikuArray.length; i ++) {
      let word = this.haikuArray[i];
      let lastChar = word.charAt(word.length-1);
      let sliceAt = word.length-1;
      let newWord = word.slice(0,sliceAt);
      let regEx = /[aeiou]/gi;
      if (word.length <= 2) {
        this.lastCharVowel.push(word);
      } else if (regEx.test(lastChar)) {
        this.lastCharVowel.push(newWord);
      } else {
        this.lastCharVowel.push(word);
      }
    }
  }
  getDoubleVowel() {
    for (let i = 0; i < this.haikuArray.length; i ++) {
      let word = this.haikuArray[i];
      let regEx = /[aeiou]+[a+eiou]+/gi;
      if (word.length <= 2)  {
        this.doubleVowel.push(word);
      } else if (regEx.test(word)) {
        let newWord = word.replace(regEx,"x");
        this.doubleVowel.push(newWord);
      } else {
        this.doubleVowel.push(word);
      }
    }
  }
  getLastTwoCharEs() {
    for (let i = 0; i < this.haikuArray.length; i ++) {
      let word = this.haikuArray[i];
      let sliceAt = word.length-2;
      let checkSlice = word.slice(word.length-2);
      let newWord = word.slice(0,sliceAt);
      let regEx = /es/gi;
      if (word.length <= 3) {
        this.lastTwoCharEs.push(word);
      } else if (regEx.test(checkSlice)) {
        this.lastTwoCharEs.push(newWord);
      } else {
        this.lastTwoCharEs.push(word);
      }
    }
  }
  getSilentCompounds(){
    for (let i = 0; i < this.haikuArray.length; i ++) {
      let word = this.haikuArray[i];
      let regEx = /above|care|cave|cheese|driveway|else|eye|fire|fore|here}home|horse|house|life|noise|sauce|shore|some|same|skate|stage|take|time|type|ware|wave|waste|wide|wipe/gi;
      if(regEx.test(word)){
        this.silentCompound.push(word+" bingo");
      } else {
        this.silentCompound.push(word);
      }
    }
  }
}

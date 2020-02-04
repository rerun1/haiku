export class Haiku {
  constructor(line1,line2,line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line1Array = this.line1.split(" ");
    this.vowelCount = 0;
    this.silentE = 0;
    this.doubleVowel = 0;
    this.lastTwoCharEs = 0;
    this.silentCompound = 0;
    this.vowelExceptions = 0;
  }

  getSilentE() {
    for(let i = 0; i < this.line1Array.length; i++) {
      let word = this.line1Array[i];
      let lastChar = word.charAt(word.length-1);
      let regEx = /e/i;
      if (regEx.test(lastChar) && word.length > 2){
        this.silentE += 1;
      }
    }
  }

  getDoubleVowel() {
    for(let i = 0; i < this.line1Array.length; i++) {
      let word = this.line1Array[i];
      let regEx = /[aeiouy]+[aeiouy]+/gi;
      let checkSlice1 = word.slice(word.length-1);
      if (regEx.test(word)&&checkSlice1!="e"){
        this.doubleVowel += 1;
      }
    }
  }
  getLastTwoCharEs() {
    for (let i = 0; i < this.line1Array.length; i ++) {
      let word = this.line1Array[i];
      let checkSlice3 = word.slice(word.length-3);
      let checkSlice2 = word.slice(word.length-2);
      let regEx = /[a-z]es/gi;
      if (regEx.test(checkSlice3)&&checkSlice2!="yes") {
        this.lastTwoCharEs += 1;
      }
    }
  }
  getSilentCompounds(){
    for (let i = 0; i < this.line1Array.length; i ++) {
      let word = this.line1Array[i];
      let regEx = /above[^ ].|care[^ ].|cave[^ ].|cheese[^ ].|driveway|else[^ ].|eye[^ ].|fire[^ ].|fore[^ ].|here[^ ].|home[^ ].|horse[^ ].|house[^ ].|life[^ ].|noise[^ ].|sauce[^ ].|shore[^ ].|some[^ ].|same[^ ].|skate[^ ].|stage[^ ].|take[^ ].|time[^ ].|type[^ ].|ware[^ ].|wave[^ ].|waste[^ ].|wide[^ ].|wipe[^ ]./gi;
      if(regEx.test(word)){
        this.silentCompound += 1;
      }
    }
  }
  getVowels(){
    let vowels = this.line1.match(/[aeiouy]/gi);
    if (vowels == null) {
      this.vowelCount = 0;
    } else {
      this.vowelCount = vowels.length;
    }
  }

  getVowelExceptions(){
    // silent last vowel
    for(let i = 0; i < this.line1Array.length; i++) {
      let word = this.line1Array[i];
      let lastChar = word.charAt(word.length-1);
      let regEx = /e/i;
      if (regEx.test(lastChar) && word.length > 2){
        this.silentE += 1;
      }
      // double vowel
      let regEx2 = /[aeiouy]+[aeiouy]+/gi;
      let checkSlice1 = word.slice(word.length-1);
      if (regEx2.test(word)&&checkSlice1!="e"){
        this.doubleVowel += 1;
      }
      // last two characters es
      let checkSlice3 = word.slice(word.length-3);
      let checkSlice2 = word.slice(word.length-2);
      let regEx3 = /[a-z]es/gi;
      if (regEx3.test(checkSlice3)&&checkSlice2!="yes") {
        this.lastTwoCharEs += 1;
      }
      // silent vowel in compound
      let regEx4 = /above[^ ].|care[^ ].|cave[^ ].|cheese[^ ].|driveway|else[^ ].|eye[^ ].|fire[^ ].|fore[^ ].|here[^ ].|home[^ ].|horse[^ ].|house[^ ].|life[^ ].|noise[^ ].|sauce[^ ].|shore[^ ].|some[^ ].|same[^ ].|skate[^ ].|stage[^ ].|take[^ ].|time[^ ].|type[^ ].|ware[^ ].|wave[^ ].|waste[^ ].|wide[^ ].|wipe[^ ]./gi;
      if(regEx4.test(word)){
        this.silentCompound += 1;
      }
      this.vowelExceptions = (this.silentE+this.doubleVowel+this.lastTwoCharEs+this.silentCompound);
    }
  }

}

    // this.fullHaiku = `${this.line1} ${this.line2} ${this.line3}`;

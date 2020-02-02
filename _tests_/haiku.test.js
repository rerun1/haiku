import { Haiku } from './../src/haiku.js';


describe('Haiku', () => {

  const line1 = "I close my eyes and";
  const line2 = "try to imagine all the";
  const line3 = "impossible things";

  test('Correctly determine if 3 strings a create haiku poem object', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    expect(haiku.line1).toEqual("I close my eyes and");
    expect(haiku.line2).toEqual("try to imagine all the");
    expect(haiku.line3).toEqual("impossible things");
  });
  test('Correctly concate three lines of haiku', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let fullHaiku = haiku.fullHaiku;
    expect(fullHaiku).toEqual("I close my eyes and try to imagine all the impossible things");
  });
  test('Correctly create an array of concated three strings', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let haikuArray = haiku.getHaikuWordArray();
    expect(haikuArray).toEqual(["I","close","my","eyes","and","try","to","imagine","all","the","impossible","things"]);
  });
  test('Correctly determine the vowels in concate of 3 strings', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let vowels = haiku.getVowels();
    expect(vowels).toEqual(["I", "o", "e", "e", "e", "a", "o", "i", "a", "i", "e", "a", "e", "i", "o", "i", "e", "i"]);
  });
  // test('Correctly returns the last vowel of words last letter is a vowel', ()=> {
  //   let haiku = new Haiku(line1,line2,line3);
  //   let haikuExceptions = haiku.getVowelExceptions();
  //   expect(haikuExceptions).toEqual(["I","clos","my","eyes","and","try","t","imagin","all","th","impossibl","things"]);
  // });
});


// class Haiku {
//   constructor(line1,line2,line3){
//     this.line1 = line1;
//     this.line2 = line2;
//     this.line3 = line3;
//   }
//   getVowelCount(){
//     let fullHaiku = `${this.line1} ${this.line2} ${this.line3}`;
//     let vowelCount = fullHaiku.match(/aeiou/gi);
//     return vowelCount;
//   }
// }
// const line1 = "I close my eyes and";
// const line2 = "try to imagine all the";
// const line3 = "impossible things";
// let haiku = new Haiku(line1,line2,line3);
// let fullHaiku = `${line1} ${line2} ${line3}`;

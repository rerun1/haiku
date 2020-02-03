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
  test('Correctly identify words in the full haiku array that end with vowels', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    haiku.getLastCharVowel();
    let vowelWordTest = haiku.lastCharVowel;
    expect(vowelWordTest).toEqual(["I","clos","my","eyes","and","try","to","imagin","all","th","impossibl","things"]);
  });
  test('Correctly identify words in the full haiku array that have a two vowel string - also tests for 2 or more consecutive vowels', ()=> {
    let haiku = new Haiku (line1,line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Arrrg greee moooat beu juus");

    haiku.getDoubleVowel();
    haiku2.getDoubleVowel();

    let doubleVowelWordTest = haiku.doubleVowel;
    let doubleVowelWordTest2 = haiku2.doubleVowel;

    expect(doubleVowelWordTest).toEqual(["I","close","my","eyes","and","try","to","imagine","all","the","impossible","things"]);
    expect(doubleVowelWordTest2).toEqual(["Hxkus","are","xsy","But","sometimes","they","don't","make","sense","Arrrg","grx","mxt","bx","jxs"]);
  });
  test('Correctly identify word with ending es', ()=> {
    let haiku = new Haiku (line1,line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Arrrges greee moooates beu juus");
    haiku.getLastTwoCharEs();
    haiku2.getLastTwoCharEs();
    let doubleVowelWordTest = haiku.lastTwoCharEs;
    let doubleVowelWordTest2 = haiku2.lastTwoCharEs;
    expect(doubleVowelWordTest).toEqual(["I","close","my","ey","and","try","to","imagine","all","the","impossible","things"]);
    expect(doubleVowelWordTest2).toEqual(["Haikus","are","easy","But","sometim","they","don't","make","sense","Arrrg", "greee", "moooat", "beu", "juus"]);
  });
  test('Correctly break compound words', ()=> {
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Carefree caveman cheeseburger noisemaker typewriter");

    haiku2.getSilentCompounds();

    let compoundFix = haiku2.silentCompound;

    expect(compoundFix).toEqual(["Haikus", "are", "easy", "But", "sometimes bingo", "they", "don't", "make", "sense", "Carefree bingo", "caveman bingo", "cheeseburger bingo", "noisemaker bingo", "typewriter bingo"]);
  });

});

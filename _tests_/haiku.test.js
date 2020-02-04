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
  test('Correctly create an array of the line 1 string within haiku object', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let haikuArray = haiku.line1Array;
    expect(haikuArray).toEqual(["I","close","my","eyes","and"]);
  });
  test('Correctly display the number of vowels in vowelCount property', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getVowels();
    haiku2.getVowels();
    haiku3.getVowels();
    haiku4.getVowels();
    haiku5.getVowels();
    haiku6.getVowels();
    expect(haiku.vowelCount).toEqual(8);
    expect(haiku2.vowelCount).toEqual(8);
    expect(haiku3.vowelCount).toEqual(0);
    expect(haiku4.vowelCount).toEqual(12);
    expect(haiku5.vowelCount).toEqual(14);
    expect(haiku6.vowelCount).toEqual(19);
  });
  test('Correctly display the number of vowels that have a silent e at the end of the word', ()=> {
    let haiku = new Haiku("I close my eyes and",line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getSilentE();
    haiku2.getSilentE();
    haiku3.getSilentE();
    haiku4.getSilentE();
    haiku5.getSilentE();
    haiku6.getSilentE();
    expect(haiku.silentE).toEqual(1);
    expect(haiku2.silentE).toEqual(1);
    expect(haiku3.silentE).toEqual(0);
    expect(haiku4.silentE).toEqual(2);
    expect(haiku5.silentE).toEqual(0);
    expect(haiku6.silentE).toEqual(1);
  });
  test('Correctly identify words in the line1 array that have a two vowel string - also tests for 2 or more consecutive vowels', ()=> {
    let haiku = new Haiku("I close my eyes and",line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getDoubleVowel();
    haiku2.getDoubleVowel();
    haiku3.getDoubleVowel();
    haiku4.getDoubleVowel();
    haiku5.getDoubleVowel();
    haiku6.getDoubleVowel();
    expect(haiku.doubleVowel).toEqual(1);
    expect(haiku2.doubleVowel).toEqual(2);
    expect(haiku3.doubleVowel).toEqual(0);
    expect(haiku4.doubleVowel).toEqual(1);
    expect(haiku5.doubleVowel).toEqual(4);
    expect(haiku6.doubleVowel).toEqual(2);
  });
  test('Correctly identify word with ending es', ()=> {
    let haiku = new Haiku("I close my eyes and",line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getLastTwoCharEs();
    haiku2.getLastTwoCharEs();
    haiku3.getLastTwoCharEs();
    haiku4.getLastTwoCharEs();
    haiku5.getLastTwoCharEs();
    haiku6.getLastTwoCharEs();
    expect(haiku.lastTwoCharEs).toEqual(1);
    expect(haiku2.lastTwoCharEs).toEqual(0);
    expect(haiku3.lastTwoCharEs).toEqual(0);
    expect(haiku4.lastTwoCharEs).toEqual(1);
    expect(haiku5.lastTwoCharEs).toEqual(3);
    expect(haiku6.lastTwoCharEs).toEqual(0);
  });
  test('Correctly break compound words', ()=> {
    let haiku = new Haiku("I close my eyes and",line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getSilentCompounds();
    haiku2.getSilentCompounds();
    haiku3.getSilentCompounds();
    haiku4.getSilentCompounds();
    haiku5.getSilentCompounds();
    haiku6.getSilentCompounds();
    expect(haiku.silentCompound).toEqual(0);
    expect(haiku2.silentCompound).toEqual(0);
    expect(haiku3.silentCompound).toEqual(0);
    expect(haiku4.silentCompound).toEqual(1);
    expect(haiku5.silentCompound).toEqual(0);
    expect(haiku6.silentCompound).toEqual(5);
  });
  test('Correctly tally the vowel exceptions on a line of a haiku object', ()=> {
    let haiku = new Haiku("I close my eyes and",line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getVowelExceptions();
    haiku2.getVowelExceptions();
    haiku3.getVowelExceptions();
    haiku4.getVowelExceptions();
    haiku5.getVowelExceptions();
    haiku6.getVowelExceptions();
    expect(haiku.vowelExceptions).toEqual(3);
    expect(haiku2.vowelExceptions).toEqual(3);
    expect(haiku3.vowelExceptions).toEqual(0);
    expect(haiku4.vowelExceptions).toEqual(5);
    expect(haiku5.vowelExceptions).toEqual(7);
    expect(haiku6.vowelExceptions).toEqual(8);
  });
  test('Correctly display the number of vowels in vowelCount property', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getVowels();
    haiku2.getVowels();
    haiku3.getVowels();
    haiku4.getVowels();
    haiku5.getVowels();
    haiku6.getVowels();
    expect(haiku.vowelCount).toEqual(8);
    expect(haiku2.vowelCount).toEqual(8);
    expect(haiku3.vowelCount).toEqual(0);
    expect(haiku4.vowelCount).toEqual(12);
    expect(haiku5.vowelCount).toEqual(14);
    expect(haiku6.vowelCount).toEqual(19);
  });
  test('Correctly display the number of syllables in line1 of the haiku object', ()=> {
    let haiku = new Haiku(line1,line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getVowels();
    haiku.getVowelExceptions();
    haiku.getSyllables();
    haiku2.getVowels();
    haiku2.getVowelExceptions();
    haiku2.getSyllables();
    haiku3.getVowels();
    haiku3.getVowelExceptions();
    haiku3.getSyllables();
    haiku4.getVowels();
    haiku4.getVowelExceptions();
    haiku4.getSyllables();
    haiku5.getVowels();
    haiku5.getVowelExceptions();
    haiku5.getSyllables();
    haiku6.getVowels();
    haiku6.getVowelExceptions();
    haiku6.getSyllables();
    expect(haiku.syllables).toEqual(5);
    expect(haiku2.syllables).toEqual(5);
    expect(haiku3.syllables).toEqual(0);
    expect(haiku4.syllables).toEqual(7);
    expect(haiku5.syllables).toEqual(7);
    expect(haiku6.syllables).toEqual(11);
  });
  test('Correctly display and test for right amount of syllables line1',()=>{
    let haiku = new Haiku("I close my eyes and",line2,line3);
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx",line2,line3);
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves",line2,line3);
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody",line2,line3);
    haiku.getLineSyllables(haiku.line1);

    expect(haiku.lineArray).toEqual(["I","close","my","eyes","and"]);
    haiku2.getLineSyllables(haiku2.line1);
    haiku3.getLineSyllables(haiku3.line1);
    haiku4.getLineSyllables(haiku4.line1);
    haiku5.getLineSyllables(haiku5.line1);
    haiku6.getLineSyllables(haiku6.line1);

    expect(haiku.vowelCount).toEqual(8);
    expect(haiku.vowelExceptions).toEqual(3);
    expect(haiku.syllables).toEqual(5);
    expect(haiku.firstLineSyllableTest).toEqual(true);

    expect(haiku2.vowelCount).toEqual(8);
    expect(haiku2.vowelExceptions).toEqual(3);
    expect(haiku2.syllables).toEqual(5);
    expect(haiku2.firstLineSyllableTest).toEqual(true);

    expect(haiku3.vowelCount).toEqual(0);
    expect(haiku3.vowelExceptions).toEqual(0);
    expect(haiku3.syllables).toEqual(0);
    expect(haiku3.firstLineSyllableTest).toEqual(false);

    expect(haiku4.vowelCount).toEqual(12);
    expect(haiku4.vowelExceptions).toEqual(5);
    expect(haiku4.syllables).toEqual(7);
    expect(haiku4.firstLineSyllableTest).toEqual(false);

    expect(haiku5.vowelCount).toEqual(14);
    expect(haiku5.vowelExceptions).toEqual(7);
    expect(haiku5.syllables).toEqual(7);
    expect(haiku5.firstLineSyllableTest).toEqual(false);

    expect(haiku6.vowelCount).toEqual(19);
    expect(haiku6.vowelExceptions).toEqual(8);
    expect(haiku6.syllables).toEqual(11);
    expect(haiku6.firstLineSyllableTest).toEqual(false);
  });
  test('Correctly display and test for right amount of syllables line2',()=>{
    let haiku = new Haiku("I close my eyes and","try to imagine all the","impossible things");
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx","xxxx xxxx xxx","xxxx xxx xxxx");
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beu jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves","try to imagine all the","impossible things");
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody","try to imagine all the","impossible things");
    haiku.getLineSyllables(haiku.line2);
    haiku2.getLineSyllables(haiku2.line2);
    haiku3.getLineSyllables(haiku3.line2);
    haiku4.getLineSyllables(haiku4.line2);
    haiku5.getLineSyllables(haiku5.line2);
    haiku6.getLineSyllables(haiku6.line2);

    expect(haiku.vowelCount).toEqual(8);
    expect(haiku.vowelExceptions).toEqual(1);
    expect(haiku.syllables).toEqual(7);
    expect(haiku.secondLineSyllableTest).toEqual(true);

    expect(haiku2.vowelCount).toEqual(12);
    expect(haiku2.vowelExceptions).toEqual(5);
    expect(haiku2.syllables).toEqual(7);
    expect(haiku2.secondLineSyllableTest).toEqual(true);

    expect(haiku3.vowelCount).toEqual(0);
    expect(haiku3.vowelExceptions).toEqual(0);
    expect(haiku3.syllables).toEqual(0);
    expect(haiku3.secondLineSyllableTest).toEqual(false);

    expect(haiku4.vowelCount).toEqual(8);
    expect(haiku4.vowelExceptions).toEqual(3);
    expect(haiku4.syllables).toEqual(5);
    expect(haiku4.secondLineSyllableTest).toEqual(false);

    expect(haiku5.vowelCount).toEqual(8);
    expect(haiku5.vowelExceptions).toEqual(1);
    expect(haiku5.syllables).toEqual(7);
    expect(haiku5.secondLineSyllableTest).toEqual(true);

    expect(haiku6.vowelCount).toEqual(8);
    expect(haiku6.vowelExceptions).toEqual(1);
    expect(haiku6.syllables).toEqual(7);
    expect(haiku6.secondLineSyllableTest).toEqual(true);
  });

  test('Correctly display and test for right amount of syllables line3',()=>{
    let haiku = new Haiku("I close my eyes and","try to imagine all the","impossible things");
    let haiku2 = new Haiku("Haikus are easy","But sometimes they don't make sense","Refrigerator");
    let haiku3 = new Haiku("x xxxx xxx xxxx xxxx","xxxx xxxx xxx","xxxx xxx xxxx");
    let haiku4 = new Haiku("But sometimes they don't make sense","Haikus are easy","Arrrg greee moooat beau jess");
    let haiku5 = new Haiku("monkeys with eyes say yes aboves","try to imagine all the","impossible things");
    let haiku6 = new Haiku("carefree driveway lifeboat stagecraft widebody","try to imagine all the","impossible things");
    haiku.getLineSyllables(haiku.line3);
    haiku2.getLineSyllables(haiku2.line3);
    haiku3.getLineSyllables(haiku3.line3);
    haiku4.getLineSyllables(haiku4.line3);
    haiku5.getLineSyllables(haiku5.line3);
    haiku6.getLineSyllables(haiku6.line3);

    expect(haiku.vowelCount).toEqual(5);
    expect(haiku.vowelExceptions).toEqual(0);
    expect(haiku.syllables).toEqual(5);
    expect(haiku.thirdLineSyllableTest).toEqual(true);

    expect(haiku2.vowelCount).toEqual(5);
    expect(haiku2.vowelExceptions).toEqual(0);
    expect(haiku2.syllables).toEqual(5);
    expect(haiku2.thirdLineSyllableTest).toEqual(true);

    expect(haiku3.vowelCount).toEqual(0);
    expect(haiku3.vowelExceptions).toEqual(0);
    expect(haiku3.syllables).toEqual(0);
    expect(haiku3.thirdLineSyllableTest).toEqual(false);

    expect(haiku4.vowelCount).toEqual(12);
    expect(haiku4.vowelExceptions).toEqual(3);
    expect(haiku4.syllables).toEqual(9);
    expect(haiku4.thirdLineSyllableTest).toEqual(false);

    expect(haiku5.vowelCount).toEqual(5);
    expect(haiku5.vowelExceptions).toEqual(0);
    expect(haiku5.syllables).toEqual(5);
    expect(haiku5.thirdLineSyllableTest).toEqual(true);

    expect(haiku6.vowelCount).toEqual(5);
    expect(haiku6.vowelExceptions).toEqual(0);
    expect(haiku6.syllables).toEqual(5);
    expect(haiku6.thirdLineSyllableTest).toEqual(true);
  });
});

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Haiku } from './haiku.js';


function resetForm(){
  $("input#line1").val("");
  $("input#line2").val("");
  $("input#line3").val("");
  // $("#firstLineRight").empty();
}
function clearFields(){
  $("ul#linesRight").empty();
  $("ul#linesWrong").empty();
}


$(document).ready(function(){
  $("form#inputLines").submit(function(event){
    event.preventDefault();

    clearFields();

    let userLine1 = $("input#line1").val();
    let userLine2 = $("input#line2").val();
    let userLine3 = $("input#line3").val();
    let haiku = new Haiku(userLine1,userLine2,userLine3);

    haiku.getLineSyllables(haiku.line1);
    haiku.getLineSyllables(haiku.line2);
    haiku.getLineSyllables(haiku.line3);

    let firstLine = haiku.line1;
    let secondLine = haiku.line2;
    let thirdLine = haiku.line3;

    $("#firstLine").text(firstLine);
    $("#secondLine").text(secondLine);
    $("#thirdLine").text(thirdLine);


    if (haiku.firstLineSyllableTest&&haiku.secondLineSyllableTest&&haiku.thirdLineSyllableTest) {
      $("ul#linesRight").append("<li>Great job! Your Haiku has a first line of 5 syllables, a second line of 7 syllables and the last line is 5 syllables.</li>");
    } else if (haiku.firstLineSyllableTest&&haiku.secondLineSyllableTest&&!haiku.thirdLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The third line does not have exactly 5 syllables.</li>");
    } else if (haiku.secondLineSyllableTest&&haiku.thirdLineSyllableTest&&!haiku.firstLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The first line does not have exactly 5 syllables.</li>");
    } else if (haiku.thirdLineSyllableTest&&haiku.firstLineSyllableTest&&!haiku.secondLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The second line does not have exactly 7 syllables.</li>");
    } else if (haiku.firstLineSyllableTest&&!haiku.secondLineSyllableTest&&!haiku.thirdLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The second line does not have 7 syllables and the third line does not have exactly 5 syllables.</li>");
    } else if (haiku.secondLineSyllableTest&&!haiku.thirdLineSyllableTest&&!haiku.firstLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The first and third lines do not have exactly 5 syllables.</li>");
    } else if (haiku.thirdLineSyllableTest&&!haiku.firstLineSyllableTest&&!haiku.secondLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The first line does not have exactly 5 syllables and the second line does not have exactly 7 syllables.</li>");
    } else if (!haiku.thirdLineSyllableTest&&!haiku.firstLineSyllableTest&&!haiku.secondLineSyllableTest) {
      $("ul#linesWrong").append("<li>Interesting poem, but it's not Haiku. The first line does not have exactly 5 syllables, the second does not have exactly 7 syllables and the third line does not have exactly 5 syllables.</li>");
    }

    resetForm();
  });
});




// right
// const line1 = "I close my eyes and";
// const line2 = "try to imagine all the";
// const line3 = "impossible things";

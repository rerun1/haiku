import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Haiku } from './haiku.js';

function resetForm(){
  $("input#line1").val("");
  $("input#line2").val("");
  $("input#line3").val("");
}

$(document).ready(function(){
  $("form#inputLines").submit(function(event){
    event.preventDefault();

    let userLine1 = $("input#line1").val();
    let userLine2 = $("input#line2").val();
    let userLine3 = $("input#line3").val();
    let haiku = new Haiku(userLine1,userLine2,userLine3);
    let firstLine = haiku.getLineSyllables(haiku.line1);
    $("p#firstLine").text(userLine1);
    $("span#firstLineRight").text("Great job! Your first line is "+haiku.)
    console.log(haiku);

    resetForm();
  });
});

// right
// const line1 = "I close my eyes and";
// const line2 = "try to imagine all the";
// const line3 = "impossible things";

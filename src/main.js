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

    console.log(haiku);

    resetForm();
  });
});

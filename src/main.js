import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

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

    console.log(userLine1);
    console.log(userLine2);
    console.log(userLine3);
    resetForm();
  });
});

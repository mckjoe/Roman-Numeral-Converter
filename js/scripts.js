//Business Logic
var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

function  makeRoman (userInput) {
  if (isNaN(userInput)) {
    return "Please enter a number!";
  } else if (userInput === 0 || userInput > 3999) {
    return "No conversion possible!";
  } else if ()

}


















//User Interface Logic
$(document).ready(function() {
  $("#formConverter").submit(function(event) {
    var userInput = parseInt($("#numberInput").val());
    var output = makeRoman(userInput);
    $("p").text(output);
    event.preventDefault();
  });
});

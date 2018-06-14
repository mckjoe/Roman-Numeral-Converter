//Business Logic
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romans = ['M', 'CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

function convertNumber(userInput) {
  var result = '';
  if (userInput > 0 && userInput <= 3999) {
    for (var i = 0; i < numbers.length; i++) {
      while (userInput >= numbers[i]) {
        result += romans[i];
        userInput -= numbers[i];
      }
    }
  } else {
    alert("Please enter a number between 1 and 3999");
  }
  return result;
}

//User Interface Logic
$(document).ready(function() {
  $("#formConverter").submit(function(event) {
    var userInput = parseInt($("#numberInput").val());
    var output = convertNumber(userInput);
    $("p").text(output);
    event.preventDefault();
  });
});

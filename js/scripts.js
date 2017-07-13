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
    $("p").text(userInput);
    event.preventDefault();
  });
});
//Original BackEnd

// function doIt (userInput) {
//   var result = '';
//   while (userInput >= 1000) {
//     result += 'M';
//     userInput -= 1000;
//   } while (userInput >= 900) {
//     result += 'CM';
//     userInput -= 900;
//   } while (userInput >= 500) {
//     result += 'D';
//     userInput -= 500;
//   } while (userInput >= 400) {
//     result += 'CD';
//     userInput -= 400;
//   } while (userInput >= 100) {
//     result += 'C';
//     userInput -= 100;
//   } while (userInput >= 90) {
//     result += 'XC';
//     userInput -= 90;
//   } while (userInput >= 50) {
//     result += 'L';
//     userInput -= 50;
//   } while (userInput >= 40) {
//     result += 'XL';
//     userInput -= 40;
//   } while (userInput >= 10) {
//     result += 'X';
//     userInput -= 10;
//   } while (userInput >= 9) {
//     result += 'IX';
//     userInput -= 9;
//   } while (userInput >= 5) {
//     result += 'V';
//     userInput -= 5;
//   } while (userInput >= 4) {
//     result += 'IV';
//     userInput -= 4;
//   } while (userInput >= 1) {
//     result += 'I';
//     userInput -= 1;
// } return result ;
// }

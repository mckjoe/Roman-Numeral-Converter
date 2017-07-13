//Business Logic
var result = '';

function  makeRoman (userInput) {
  if (isNaN(userInput)) {
    return false;
  } else if (userInput === 0 || userInput > 3999) {
    return false;
  } else {
    return true;
  }
}

function doIt (userInput) {
  while (userInput >= 1000) {
    result += 'M';
    userInput -= 1000;
  } while (userInput >= 900) {
    result += 'CM';
    userInput -= 900;
  } while (userInput >= 500) {
    result += 'D';
    userInput -= 500;
  } while (userInput >= 400) {
    result += 'CD';
    userInput -= 400;
  } while (userInput >= 100) {
    result += 'C';
    userInput -= 100;
  } while (userInput >= 90) {
    result += 'XC';
    userInput -= 90;
  } while (userInput >= 50) {
    result += 'L';
    userInput -= 50;
  } while (userInput >= 40) {
    result += 'XL';
    userInput -= 40;
  } while (userInput >= 10) {
    result += 'X';
    userInput -= 10;
  } while (userInput >= 9) {
    result += 'IX';
    userInput -= 9;
  } while (userInput >= 5) {
    result += 'V';
    userInput -= 5;
  } while (userInput >= 4) {
    result += 'IV';
    userInput -= 4;
  } while (userInput >= 1) {
    result += 'I';
    userInput -= 1;
} return result ;
}

//User Interface Logic
$(document).ready(function() {
  $("#formConverter").submit(function(event) {
    var userInput = parseInt($("#numberInput").val());
    var output = makeRoman(userInput);

    if (output === true) {
      doIt(userInput);
    } else if (output === false){
      result = "Please enter a valid number";
    }

    $("p").text(result);
    event.preventDefault();
  });
});

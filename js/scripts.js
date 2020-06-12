let userInput = "aerise3345h earith ret"
const consonantString = userInput;
const consonantArray = consonantString.split("");
const vowelizedArray = consonantArray.map(function(element) {
  return element + "a";
});
vowelizedArray.join("");  */

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const q = "q"
const u = "u"

function roboRodger(inputChar) {
  if (vowels.indexOf(inputChar[0]) >= 0) {
    return (inputChar.join("") + "way");
  } else if (inputChar[0] === q && inputChar[1] === u) {
    output = (inputChar).splice(0,2);
    output2 = output.join("");
    [(inputChar).push(output2 + "ay")];
    resultsString = inputChar.join("");
    return (resultsString);
  } else if (consonants.indexOf(inputChar[0]) >=0 && inputChar[1] === q) {
    output = (inputChar).splice(0,3);
    output2 = output.join("");
    [(inputChar).push(output2 + "ay")];
    resultsString = inputChar.join("");
    return (resultsString);
  } else if (consonants.indexOf(inputChar[0]) >= 0 && consonants.indexOf(inputChar[1]) >= 0){
    output = (inputChar).splice(0,2);
    output2 = output.join("");
    [(inputChar).push(output2 + "ay")];
    resultsString = inputChar.join("");
    return (resultsString);
  } else if (consonants.indexOf(inputChar[0]) >= 0) {
    output = (inputChar).shift();
    [(inputChar).push(output + "ay")];
    resultsString = inputChar.join("");
    return (resultsString);
  } else {
    return (inputChar.join(""));
  }
}

$(document).ready(function () {
  $("form#human").submit(function (event) {
    event.preventDefault();
    const input = $("#translate").val();
    let inputChar = input.split("");
    const result = roboRodger(inputChar);
    $("#result").text(result);
    console.log(inputChar);
  });
});

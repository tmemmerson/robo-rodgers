/* //BUSINESS LOGIC
let humanArray = []
let humanInput = function(input) {
  for (var i = 1; i <= input; i++) {
      humanArray.push(i*10)
  }
}
let intermediateArray = function(input) {
  let numArray = humanInput(input);
  let text = ""
  for (var i = 1; i <= numArray.length; i++) {
    if (input.includes(3)) {
      numArray.push("beep boop")
    } else {
      numArray.push(i)
    }
  }
  console.log(numArray);
  console.log(intermediateFunction);
};


//USER LOGIC
$(document).ready(function() {
  $("#submit").click(function() {
      var english = $("#input").val()
      var robot = intermediateFunction(english);
      $("#hidden").show()
      $("li").text("")
      $("li").append(robot)
  });

}) */


}
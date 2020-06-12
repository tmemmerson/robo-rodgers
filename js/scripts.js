//BUSINESS LOGIC
let humanArray = []
let humanInput = function(input) {
  for (var i = 1; i <= input; i++) {
      humanArray.push(i*10)
  }
  return humanArray
}
let intermediateFunction = function(input) {
  let numArray = humanInput(input);
  let text = ""
  for (var i = 1; i <= numArray.length; i++) {
    if element contains 3
      this beepboop
      else if element contains 2
      this boop
      else if element contains 3
      this beep
      else push?
  
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

})
//BUSINESS LOGIC
let humanArray = []
let humanInput = function(input) {
  for (var i = 1; i <= input; i++) {
      humanArray.push(i)
  }
  return humanArray
}
let intermediateSentence = function(input) {
  let numArray = humanInput(input);
  let text = ""
  for (var i = 1; i <= numArray.length; i++) {
/* add function to loop and check chars at this point*/
  
  }
  console.log(numArray);
};


//USER LOGIC
$(document).ready(function() {
  $("#submit").click(function() {
      var english = $("#input").val()
      var robot = intermediateSentence(english);
      $("#hidden").show()
      $("li").text("")
      $("li").append(robot)
  });

})
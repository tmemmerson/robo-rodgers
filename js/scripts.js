//BUSINESS LOGIC
let humanInput = function(input) {
  let humanArray = []
  for (var i = 1; i <= input; i++) {
      humanArray.push(i)
  }
  return humanArray
}
let intermediateSentence = function(input) {
  ??????
  ??????
  ??????
}


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
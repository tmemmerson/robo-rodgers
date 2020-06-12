var listSentence = function(input) {
  var numbers = []
  for (var i = 1; i <= input; i++) {
      numbers.push(i)
  }
  return numbers
}
var replaceSentence = function(input) {
  var numArray = listSentence(input);
  var text = ""
  for (var i = 1; i <= numArray.length; i++) {
      if (i.toString().includes("3")) {
          text += "wont you be my neighbor?"
      } else if (i.toString().includes("2")) {
          text += "boop"
      } else if (i.toString().includes("1")) {
          text += "beep"
      } else {
          text += i
      }
  }
  return text
};


$(document).ready(function() {
  $("#submit").click(function() {
      var entry = $("#input").val()
      var final = replaceSentence(entry);
      $("#hidden").show()
      $("li").text("")
      $("li").append(final)
  });
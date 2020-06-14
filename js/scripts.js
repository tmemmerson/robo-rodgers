//BUSINESS LOGIC
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
            text += "<li>wont you be my neighbor?</li>"
        } else if (i.toString().includes("2")) {
            text += "<li>boop</li>"
        } else if (i.toString().includes("1")) {
            text += "<li>beep</li>"
        } else {
            text += "<li>" + i + "</li>"
        }
    }
    return text
    };
    
    //USER LOGIC
    $(document).ready(function() {
    $("#submit").click(function() {
        var entry = $("#input").val()
        var final = replaceSentence(entry);
        $("#hidden").show()
        $("li").text("")
        $("li").append(final)
    })
    })
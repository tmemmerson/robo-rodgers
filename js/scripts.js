//BUSINESS LOGIC

const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;


const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) 

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);

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
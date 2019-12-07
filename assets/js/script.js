$("#currentDateTime").text(moment().format('dddd, DD MMMM YYYY, h:mm a'))

// color of table that is same time as current time will be green

var currentTime = (moment().format('hA'))

console.log(currentTime)

var findTime = $(".time")
var searchTime = currentTime;
var found;

console.log(searchTime);

for (var i = 0; i < findTime.length; i++) {
  if (findTime[i].textContent == searchTime) {
    var found = findTime[i];
    var currrentTimeCell = found.parentElement;
    currrentTimeCell.className = "active";
    changeCurrent();
    changePast();
    changeAfter();
    break;
  }
}


if (found == null) {
  $(".colorChange").addClass("tableColorAfter");
  $(".colorChange").children().addClass("tableColorAfter");
}


function changeCurrent() {
  $(".active").children(".colorChange").addClass("tableColorNow");
  $(".active").children(".colorChange").children().addClass("tableColorNow");
}

// color of table before current time is orange
function changePast() {
  $(".active").prevAll().children(".colorChange").addClass("tableColorBefore");
  $(".active").prevAll().children(".colorChange").children().addClass("tableColorBefore");
}

// color of table after current time is yelllow
function changeAfter() {
  $(".active").nextAll().children(".colorChange").addClass("tableColorAfter");
  $(".active").nextAll().children(".colorChange").children().addClass("tableColorAfter");
}

// saves content of table into local storage when save button is clicked
renderContent();

$("button").click(function() {
  event.preventDefault();
  console.log($(this))
  var textCell = $(this).parent().prev().children();
  console.log(textCell)
  var userInput = textCell.val();
  var index = $("button").index(this)
  console.log(userInput)
  localStorage.setItem("userInput" + index, userInput);
  renderContent();
});

function renderContent() {
  var textContent0 = localStorage.getItem("userInput0")
  var textContent1 = localStorage.getItem("userInput1")
  var textContent2 = localStorage.getItem("userInput2")
  var textContent3 = localStorage.getItem("userInput3")
  var textContent4 = localStorage.getItem("userInput4")
  var textContent5 = localStorage.getItem("userInput5")
  var textContent6 = localStorage.getItem("userInput6")
  var textContent7 = localStorage.getItem("userInput7")
  var textContent8 = localStorage.getItem("userInput8")
  var textContent9 = localStorage.getItem("userInput9")

  $(".textbox0").text(textContent0)
  $(".textbox1").text(textContent1)
  $(".textbox2").text(textContent2)
  $(".textbox3").text(textContent3)
  $(".textbox4").text(textContent4)
  $(".textbox5").text(textContent5)
  $(".textbox6").text(textContent6)
  $(".textbox7").text(textContent7)
  $(".textbox8").text(textContent8)
}















$("#currentDateTime").text(moment().format('dddd, DD MMMM YYYY, h:mm a'))

console.log(moment().format('hA'))

var currentTime = (moment().format('hA'))

console.log(currentTime)

var findTime = $(".time")
var searchTime = currentTime;
var found;

console.log(searchTime);

for (var i = 0; i < findTime.length; i++) {
  if (findTime[i].textContent == searchTime) {
    found = findTime[i];
    break;
  }
}

console.log(found);

var changeColorTd = found.nextSibling.nextSibling;
var changeColorTextArea =  found.nextSibling.nextSibling.children[0]


changeColorTd.className += " tableColorNow";
changeColorTextArea.className += " tableColorNow";
// if ("2am" == currentTime) {
//     $("textarea").addClass("tableColorNow")
//     $(".textBox").addClass("tableColorNow")
// }

// color of table that is same time as current time will be green


// color of table before current time is orange

// color of table after current time is yelllow

// saves content of table into local storage when save button is clicked



$("#currentDateTime").text(moment().format('dddd, DD MMMM YYYY, h:mm a'))

console.log(moment().format('ha'))

var currentTime = (moment().format('ha'))

console.log(currentTime)

console.log($(".time"))

if ("8pm" == currentTime) {
    $("td").css({"background-color": "#ffe"});
}



// color of table that is same time as current time will be green


// color of table before current time is orange

// color of table after current time is yelllow

// saves content of table into local storage when save button is clicked
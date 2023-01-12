// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  var ordinal;
  var actualHour = parseInt(today.format("H"));

  //ADD-UP
  //Function to determine ordinal termination of the number
  function determineOrdinal(){
    if (today.format("D") == 1) {
      ordinal = "st";
    } else if (today.format("D") == 2) {
      ordinal = "nd";
    } else if (today.format("D") == 3) {
      ordinal = "rd";
    } else {
      ordinal = "th";
    }
  }
  determineOrdinal();

  console.log(actualHour + " is the actual hour") //Checking for bugs
  console.log(ordinal + " is the ordinal termination of the day number") //Checking for bugs

  $('#currentDay').text(today.format('dddd, MMMM D')+ ordinal);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //Save shcedule text input
  $(document).on("click", ".saveBtn", function(){
    console.log ("saved") //Checking for bugs
    var container = $(this).closest(".time-block");
    inputValue = container.find(".description").val();
    var containerId = container.attr("id");
    localStorage.removeItem(containerId); //Reset the value in Local Storage
    localStorage.setItem(containerId, inputValue);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //Display input already stored
  function displaySchedule() {
    var divs = $(".time-block");
    for (var i = 0; i < divs.length; i++) {
        var containerId = divs[i].id;
        if(localStorage.getItem(containerId)){
            var scheduleSaved = $(divs[i]).find(".description");
            scheduleSaved.text(localStorage.getItem(containerId));
        }
    }
  }
  displaySchedule();

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  function changeStyle() {
    var divs = $(".time-block");
    for (var i = 0; i < divs.length; i++) {
      var idOfBlock = divs[i].id;
      var hourOfBlock = idOfBlock.substring(idOfBlock.length-2);
      console.log(hourOfBlock) //Checking for bugs
      console.log(actualHour) //Checking for bugs
      $("#hour-" + hourOfBlock).removeClass("past");
      $("#hour-" + hourOfBlock).removeClass("present");
      $("#hour-" + hourOfBlock).removeClass("future");

      if (hourOfBlock < actualHour) {
        $("#hour-" + hourOfBlock).addClass("past");
        console.log("past")
      } else if (hourOfBlock == actualHour) {
        $("#hour-" + hourOfBlock).addClass("present");
        console.log("present")
      } else if (hourOfBlock > actualHour) {
        $("#hour-" + hourOfBlock).addClass("future");
        console.log("future")
      }
  }
  }
  changeStyle()
});
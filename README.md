# Work-Day-Scheduler
## Criteria 1: Current Date
The first criteria that is asked to improve the performance of the work day planner is the current date. To achieve this, it is necessary to use an external API that sees this information through JavaScript and so that it can use the jQuery API (or using vanilla JavaScript is also possible) to insert this text directly into the HTML.

The API used is the same as seen during the course, that is, Day.js which, through the `dayjs()` function, gives us today's date. In addition to this, a function is used within JavaScript to determine the ordinal ending of the number, however, this will be discussed later.

![currentDate](https://user-images.githubusercontent.com/118247139/211972502-b61e6af3-a34d-4418-bac3-993b35956395.png)
> ###### Note: The use of different console.log() over the function are mainly use with the purpouse of following the track of what the user wants and what it doesn´t for its password.

## Criteria 2: Color code for past, present and future

```
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
```
![Captura de pantalla 2023-01-11 a la(s) 21 52 24](https://user-images.githubusercontent.com/118247139/211971785-e4e1c728-e51b-4a10-a2fa-ff0ab585181c.png)

## Criteria 3: Save schedule in Local Storage

![saveLocalStorage](https://user-images.githubusercontent.com/118247139/211972301-fff9a7ff-eba3-4822-95e6-c5c9e2cc3d43.png)
![Captura de pantalla 2023-01-11 a la(s) 21 53 24](https://user-images.githubusercontent.com/118247139/211971928-4a5dbdd0-bba2-424e-8b8c-c0d18364f3de.png)


## Add Ups



```
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
```

> Visualize the final page [here](https://drums180.github.io/Work-Day-Scheduler/)

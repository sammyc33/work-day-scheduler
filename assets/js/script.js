//Display today's date in the header
var currentDate = moment().format('dddd, MMM Do, YYYY, LTS');
$("#currentDay").text(currentDate);

//Declare remaining variable(s)
var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");
var now = moment().hours();
var hour = $(".hour");
var sched = $(".sched");

// Time blocks for standard business hours are displayed and times are color-coded
function changeColors() {
   timeBlock.each(function () {
        var hour = parseInt($(this).attr("id"));
        if (hour < now) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

        } else if (hour === now) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future")

        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
};

// When you add event text and click save, the event changes are saved in local storage
saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".sched").val();
    localStorage.setItem(time, text);
});

function showSchedule() {
    hour.each(function () {
        var theTime = $(this).text();
        var theSchedule = localStorage.getItem(theTime);
        if (theSchedule !== null) {
            $(this).siblings(sched).val(theSchedule);
        }
    });
}

// Remember to call the functions!
changeColors();
showSchedule();

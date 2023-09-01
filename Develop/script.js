$(function () {
  var SaveItem = $(".saveBtn");
  var eventInfo = JSON.parse(localStorage.getItem("events")) || {};

  SaveItem.on("click", storeEvents);

  for (const key in eventInfo) {
    var timeBlock = $("#" + key).children()[1];
    timeBlock.value = eventInfo[key];
    console.log(timeBlock);
  }

  function storeEvents(event) {
    var eventStore = {
      event: $(this).siblings()[1].value,
      time: $(this).parent().attr("id"),
    };
    eventInfo[eventStore.time] = eventStore.event;
    localStorage.setItem("events", JSON.stringify(eventInfo));

    console.log(typeof eventStore.time);
    console.log(eventStore.time);
  }

  var paraDate = $("#currentDay");
  var date = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  paraDate.text(date);

  var currentHour = dayjs().format("H");

  for (let i = 9; i < 18; i++) {
    var timeB = $("#hour-" + i);
    if (i < currentHour) {
      timeB.addClass("past");
    } else if (i == currentHour) {
      timeB.addClass("present");
    } else {
      timeB.addClass("future");
    }
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to display the current date in the header of the page.
});

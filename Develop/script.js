// JQuery function
$(function () {
  // variables
  //save button  variable
  var SaveItem = $(".saveBtn");
  // un strings and   pulls data from local storage and puts it into a variable
  var eventInfo = JSON.parse(localStorage.getItem("events")) || {};

  // triggers store events on save button click
  SaveItem.on("click", storeEvents);

  // for in loop that iterates over the properties of eventInfo object
  for (const key in eventInfo) {
    //grabs the id of event and test area and combines them
    var timeBlock = $("#" + key).children()[1];
    //sets time block value equal the eventinfokey which sting data stored in memory
    timeBlock.value = eventInfo[key];
   // console.log(timeBlock.value);
    // console.log(eventInfo[key]);
  }
// function to store events
  function storeEvents(event) {
  // var object 
    var eventStore = {
      // JQuery using "this" to refer to event trigger, then using DOM to locate text value in the sibling
      event: $(this).siblings()[1].value,
      // same as above but this time grabbing id from parent
      time: $(this).parent().attr("id"),
    };
  // makes the eventStore time the key to the object and the value is the event info
    eventInfo[eventStore.time] = eventStore.event;
    // converts info to string and adds it to local memory
    localStorage.setItem("events", JSON.stringify(eventInfo));

    // console.log(typeof eventStore.time);
    // console.log(eventStore.time);
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
});

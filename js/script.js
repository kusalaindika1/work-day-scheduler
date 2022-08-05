

// Set up an element to display the current date
function setupCurrentDateEl() {

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// Set up the save button 
function setupSaveButtonHandlers() {

    $("#saveItem0").on("click", () => {
        saveText(0);
    });
    $("#saveItem1").on("click", () => {
        saveText(1);
    });
    $("#saveItem2").on("click", () => {
        saveText(2);
    });
    $("#saveItem3").on("click", () => {
        saveText(3);
    });
    $("#saveItem4").on("click", () => {
        saveText(4);
    });
    $("#saveItem5").on("click", () => {
        saveText(5);
    });
    $("#saveItem6").on("click", () => {
        saveText(6);
    });
    $("#saveItem7").on("click", () => {
        saveText(7);
    });
    $("#saveItem8").on("click", () => {
        saveText(8);
    });

}

// Save each calendar event text to localstorage by inserting it into the array
function saveText(id) {

    // Get the current event array from localstorage
    var currentEvents = JSON.parse(localStorage.getItem("events"));

    // Get new input text user has typed
    var inputText = $(`#input${id}`).val();

    // Store the input text in the localstorage array at the correct time block
    currentEvents[id] = inputText;

    // Resave the array to localstorage
    localStorage.setItem("events", JSON.stringify(currentEvents));
}

// Set up the local storage
function setupLocalStorage() {

    // Get an array of the events saved on the calendar
    var calendarEvents = JSON.parse(localStorage.getItem("events"));

    // If there is no calendar array yet, create a new one and return
    if (!calendarEvents) {
        localStorage.setItem("events", JSON.stringify([]));
        return;
    }

    // Populate in the calendar event elements with saved events
    for (var i = 0; i < 9; i++) {
        var textAreaEl = $(`#input${i}`);
        if (calendarEvents[i]) {
            textAreaEl.val(calendarEvents[i]);
        }
    }
}

// Set the background color of the calendar event

function setColors() {

    // Get the 24 hour value of the current time
    var now = moment().format("H");

    // Set each element
    for (var i = 0; i < 9; i++) {

        // Get the time block element in order to set its background
        var hourBlock = $(`#input${i}`);

        // Get the 24 hour value of the time block via data-attributes
        var hour = hourBlock.attr("data-hour");

        // Set the background color of the calendar event
        
        if (now > hour) {
            hourBlock.addClass("bg-secondary");
        } else if (now < hour) {
            hourBlock.addClass("bg-success");
        } else if (now == hour) {
            hourBlock.addClass("bg-danger");
        }
    }
}

// Do initial setup for the application:
function init() {

    // Display current date
    setupCurrentDateEl();

    //  Create event handlers for each save button
    setupSaveButtonHandlers();

    //  Populate time blocks with previously saved events
    setupLocalStorage();

    //  Set the colors 
    setColors();
}

// Start up
init();
console.log(init);

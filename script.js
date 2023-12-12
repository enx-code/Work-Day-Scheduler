$(document).ready(function () {
    console.log(this)
    function updateCurrentDay() {
      var currentDay = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDay);
      return currentDay
    }
    
    function updateColor(){
        var currentHour = dayjs().hour();

        $(".hour").each(function(){
            var blockHour = parseInt($(this).text().replace("AM", "").replace("PM", ""), 10)
        if (blockHour < currentHour) {
            console.log($(this).parent())
            $(this).parent().addClass("past")
        } else if (blockHour === currentHour) {
            $(this).parent().addClass("present");
        } else {
            $(this).parent().addClass("future")
        }
        })
    }

    // console.log(updateColor())

    function loadEvents() {
      $(".time-block").each(function () {
        const hour = $(this).find(".hour").text();
        const savedEvent = localStorage.getItem(hour);

        if (savedEvent) {
          $(this).find("textarea").val(savedEvent);
        }
      });
    }
    $(".saveBtn").on("click", function () {
      const hour = $(this).siblings(".hour").text();
      const eventText = $(this).siblings("textarea").val();

      localStorage.setItem(hour, eventText);
    });

    updateCurrentDay();
    updateColor();
    loadEvents();

    setInterval(updateColor, 60000);



});

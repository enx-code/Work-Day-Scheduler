console.log("hello")
$(document).ready(function () {
    function updateCurrentDay() {
      var currentDay = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDay);
      return currentDay
    }
    console.log(updateCurrentDay())
console.log("hello from jquery")
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
    console.log(updateColor())

});

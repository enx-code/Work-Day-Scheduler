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
        var currentDay = dayjs().hour();
        $(".hour").each(function(){
            console.log(parseInt($(this).text().replace("AM", "").replace("PM", ""), 10))
        })
    }
    console.log(updateColor())

});

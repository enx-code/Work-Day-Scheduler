console.log("hello")
$(document).ready(function () {
    function updateCurrentDay() {
      const currentDay = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDay);
      return currentDay
    }
    console.log(updateCurrentDay())
console.log("hello from jquery")
    

});

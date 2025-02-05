$(document).ready(function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let trys = 0;

  $("#sendGuess").click(function () {
    let userGuess = parseInt($("#guess").val());
    trys++;
    $("#trys").text(trys);
    $('#guess').val('');

    if (trys == 10) {
      $("#warning")
        .text("بیشتر از 10 بار نمیتونی امتحان کنی")
        .css("color", "red");
      $("#sendGuess , #guess").attr("disabled", true);
      $("#message").fadeOut(100);
      
    } else {
      $("#warning")
        .text("حواست باشه 10 تا حدس بیشتر نداری")
        .css("color", "blue");
    }

    if (userGuess === randomNumber) {
      $("#message").text("تبریک عدد درست را حدس زدی").css("color", "green");
      $("#warning , #sendGuess , #guess").fadeOut(2000);
    } else if (userGuess > randomNumber) {
      $("#message").text("عدد کوچکتری حدس بزن").css("color", "red");
    } else {
      $("#message").text("عدد بزرگتری حدس بزن").css("color", "red");
    }

    
  });
  $("#again").click(function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    trys = 0;
    $("#trys").text(trys);
    $("#message").text("");
    $("#guess").val("");
    $("#warning").text("");
    $("#sendGuess , #guess").attr("disabled", false);
    $("#warning , #sendGuess , #guess").fadeIn(2000);
    $("#message").fadeIn(100);
  });
});

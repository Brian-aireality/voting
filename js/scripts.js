$(document).ready(function () {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());

    $(".outputAge").text(age);

    if (age >= 18) {
      $(".adult").show();
    } else {
      $(".minors").show();
    }


  });

});

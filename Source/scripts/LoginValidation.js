$(document).ready(function() {

  $("#log").click(function() {
    let email = $("#inp1").val().trim();
    let password = $("#inp2").val().trim();

    if (!email) {
      $("#emailMsg").html("email should not be empty");
      $("#emailMsg").css({ "color": "red", "margin-left": "15%", "font-size": "20px" });
      return false;
    }
    else {
      $("#emailMsg").html("");
      $("#inp1").html("");
    }

    if (!password) {
      $("#passMsg").html("password should not be empty");
      $("#passMsg").css({ "color": "red", "margin-left": "15%", "font-size": "20px" });
      return false;
    }
    //else if (password.length < 8) {
    //$("#passMsg").html("password length should not be 8 characters");
    // $("#passMsg").css({ "color": "red", "margin-left": "15%", "font-size": "20px" });
    //   return false;
    //}
    else {
      $("#passMsg").html("");
    }

  });
});
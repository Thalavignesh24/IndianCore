$(document).ready(function() {

  $("#sub").click(function() {
    let name = $("#fn").val().trim();
    let email = $("#em").val().trim();
    let dob = $("#db").val();
    let phone = $("#ph").val().trim();
    let new_pass = $("#ip").val().trim();
    let con_pass = $("#cp").val().trim();
    let country = $("#cn").val().trim();


    if (!name) {
      //alert("Name should not be empty");
      $("#val1").html("Name should not be empty");
      return false;
    } else {
      $("#val1").html("");
    }

    if (!email) {
      $("#val2").html("Email should not be empty");
      return false;
    } else {
      $("#val2").html("");
    }


    if (!dob) {
      $("#val3").html("DOB should not be empty");
      return false;
    } else {
      $("#val3").html("");
      let dob1 = new Date(dob);
      let currentDate = new Date();
      let age = currentDate.getFullYear() - dob1.getFullYear();
      $("#ag").val(age);
    }

    if (!phone) {
      $("#val5").html("Phone number should not be empty");
      return false;
    } else {
      $("#val5").html("");
    }


    if (!new_pass) {
      $("#val6").html("New password should not be empty");
      return false;
    } else {
      $("#val6").html("");
    }


    if (!con_pass) {
      $("#val7").html("Confirm password should not be empty ");
      return false;
    } else {
      $("#val7").html("");
    }


    if (new_pass !== con_pass) {
      $("#val7").html("Confirm password and password are mismatch");
      return false;
    } else {
      $("#val7").html("");
    }

    if (!country) {
      $("#val8").html("Country should not be empty");
      return false;
    } else {
      $("#val7").html("");
    }

    alert("Your form submitted Successfully redirect to login page");


  });

});
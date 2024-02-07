$(document).ready(function() {

  $("#sub").click(function() {
    let name = $("#fn").val().trim();
    let email = $("#em").val().trim();
    let dob = $("#db").val();
    let phone = $("#ph").val().trim();
    let new_pass = $("#ip").val().trim();
    let con_pass = $("#cp").val().trim();


    if (!name) {
      alert("Name should not be empty");
      //$("#registerForm").submit();
      return false;
    }

    if (!email) {
      alert("Email should not be empty");
      return false;
    }

    if (!dob) {
      alert("DOB should not be empty");
      return false;
    }
 
      let dob1 = new Date(dob);
      let currentDate = new Date();
      let age = currentDate.getFullYear() - dob1.getFullYear();
      $("#ag").val(age);

    if (!phone) {
      alert("Phone number should not be empty");
      return false;
    }

    if (!new_pass) {
      alert("New password should not be empty");
      return false;
    }

    if (!con_pass) {
      alert("Confirm password should not be empty ");
      return false;
    }
    
    if(new_pass!==con_pass){
      alert("Confirm password and password are mismatch");
      return false;
    }

  });

});
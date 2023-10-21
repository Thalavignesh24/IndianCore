$(document).ready(function() {
 
  $("#log").click(function() {
    let email=$("#inp1").val();
    let password=$("#inp2").val();
    
    if (!email) {
      $("#emailMsg").html("email should not be empty");
      $("#emailMsg").css({ "color": "red", "margin-left": "15%", "font-size": "20px" });
    }
    else {
      $("#emailMsg").html("");
    }
    
    if (!password) {
      $("#passMsg").html("password should not be empty");
      $("#passMsg").css({ "color": "red", "margin-left": "15%", "font-size": "20px" });
    }
    else if (password.length<8) {
         $("#passMsg").html("password length should not be 8 characters");
         $("#passMsg").css({ "color": "red", "margin-left": "15%", "font-size": "20px" });
   }
    else {
      $("#passMsg").html("");
    }
    
  });
});
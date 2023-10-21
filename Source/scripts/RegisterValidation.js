$(document).ready(function(){
  
  $("#sub").click(function(){
    let name=$("#fn").val().trim();
    let email=$("#em").val();
    let dob=$("#db").val();
    
    
    if(!name){
      alert("Name should not be empty");
      return;
    }
    
    if(!email){
      alert("Email should not be empty");
      return;
    }
    
    if(!dob){
      alert("DOB should not be empty");
    }
    
    let dob1=new Date(dob);
    let currentDate=new Date();
    let age=currentDate.getFullYear() - dob1.getFullYear();
    $("#ag").val(age)
   
  });
  
});
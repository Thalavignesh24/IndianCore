<?php
include("../Php/connection.php");

if(isset($_POST["submit"])){
    $email=$_POST['email'];
    $confirmPassword=$_POST['pwd'];
    
    $getData ="SELECT * FROM Users WHERE user_email='$email' AND confirm_password = '$confirmPassword'";
    
    $query = mysqli_query($conn,$getData);
   
    if(mysqli_num_rows($query)>0){
        header("Location: http://localhost:7700/Source/main.html");
       exit();
    }else{
       header("Location: http://localhost:7700/Source/Invalid.html");
       exit();
    }
}else{
    die("Connection failed: " .$conn->connect_error);
}


?>
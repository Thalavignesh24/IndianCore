<?php
include("../Php/connection.php");

if(isset($_POST["submit"])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $dob=$_POST['date'];
    $age=$_POST['age'];
    $phone=$_POST['phone'];
    $newPassword=$_POST['ipassword'];
    $confirmPassword=$_POST['cpassword'];
    $country=$_POST['country'];
    
    $insert = "INSERT INTO Users (user_name,user_email,date_of_birth,user_age,user_mobile,new_password,confirm_password,user_country) VALUES ('$name','$email','$dob','$age','$phone','$newPassword','$confirmPassword','$country')" ;
    
    $query = mysqli_query($conn,$insert);
    
    if($query){
        echo "inserted";
    }else{
        die("Connection failed: " .$conn->connect_error);
    }
    
}else{
    die;
}


?>
<?php
include("../Php/connection.php");

if(isset($_POST["submit"])){
    // Escape user inputs to prevent SQL injection
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $confirmPassword = mysqli_real_escape_string($conn, $_POST['pwd']);
    
    // Prepare SQL query to fetch user data
    $getData = "SELECT * FROM Users WHERE user_email=? AND confirm_password=?";
    
    // Prepare statement
    $stmt = mysqli_prepare($conn, $getData);
    
    // Bind parameters
    mysqli_stmt_bind_param($stmt, "ss", $email, $confirmPassword);
    
    // Execute query
    mysqli_stmt_execute($stmt);
    
    // Get result set
    $result = mysqli_stmt_get_result($stmt);
    
    $loginData = mysqli_fetch_assoc($result);
    
    //echo $loginData;
    
    
    // Check if a row was returned
    if(mysqli_num_rows($result) == 1){
        // Authentication successful, redirect to success page
        header('Location: http://localhost:7700/Source/main.html');
        exit;
    } else {
        // Authentication failed, redirect or show error message
        die("Login failed. Please check your credentials.");
    }
} else {
    die("Form submission error.");
}

?>

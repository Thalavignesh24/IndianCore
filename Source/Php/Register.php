<?php
// Include connection.php assuming it correctly connects to your database

include("../Php/connection.php");

// Check if form was submitted
if(isset($_POST["submit"])){
    
    // Sanitize and validate input (for illustration, add proper validation/sanitization methods)
    
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $dob = mysqli_real_escape_string($conn, $_POST['date']);
    $age = mysqli_real_escape_string($conn, $_POST['age']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $newPassword = mysqli_real_escape_string($conn, $_POST['ipassword']);
    $confirmPassword = mysqli_real_escape_string($conn, $_POST['cpassword']);
    $country = mysqli_real_escape_string($conn, $_POST['country']);
    
    // Insert query with prepared statement
    $insert = "INSERT INTO Users (user_name, user_email, date_of_birth, user_age, user_mobile, new_password, confirm_password, user_country) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $insert);
    mysqli_stmt_bind_param($stmt, "sssissss", $name, $email, $dob, $age, $phone, $newPassword, $confirmPassword, $country);
    
    // Execute query
    $query = mysqli_stmt_execute($stmt);
    
    // Check if insert was successful
    if($query){
        // Redirect to success page
        header("Location: http://localhost:7700/Source/index.html");
        exit;
    } else {
        // Handle error (for example, logging the error or showing an error message)
        die("Insert failed: " . mysqli_error($conn));
    }
} else {
    die("Form submission error.");
}

?>

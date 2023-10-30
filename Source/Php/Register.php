<?php
include("Php/connection.php");

if(isset($_POST('submit'))){
    $name=$_POST('name');
    echo $name;
}
?>
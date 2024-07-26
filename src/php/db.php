<?php
    $host = "localhost";
    $user_name = "proflujo";
    $password = "letmein1!";
    $db_name = "crud";

    $conn = mysqli_connect($host, $user_name, $password, $db_name);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

?>
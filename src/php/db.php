<?php
    $host = "localhost";
    $user_name = "";
    $password = "";
    $db_name = "";

    $conn = mysqli_connect($host, $user_name, $password, $db_name);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

?>

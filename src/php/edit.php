<?php
include 'db.php';
    $id = htmlspecialchars($_REQUEST['id']);
    
    $sql = "SELECT * FROM users WHERE active_status = 1 AND id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $users = array();
        
        while($row = $result->fetch_assoc()) {
            $users[] = $row;
        }

        $response = array(
            'status' => 'success',
            'data' => $users
        );

        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'No records found'
        );

        header('Content-Type: application/json');
        echo json_encode($response);
    }

    $conn->close();
?>
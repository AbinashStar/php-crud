<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name']) && isset($_POST['age']) && isset($_POST['phone']) && isset($_POST['email'])) {
        $name = htmlspecialchars($_POST['name']);
        $age = htmlspecialchars($_POST['age']);
        $phone = htmlspecialchars($_POST['phone']);
        $email = htmlspecialchars($_POST['email']);
        
        if (isset($_POST['id'])) {
            $id = intval($_POST['id']);
            $stmt = $conn->prepare("UPDATE users SET name = ?, age = ?, phone = ?, email = ? WHERE id = ?");
            $stmt->bind_param("sissi", $name, $age, $phone, $email, $id);
        } else {
            $stmt = $conn->prepare("INSERT INTO users (name, age, phone, email) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("siss", $name, $age, $phone, $email);
        }

        $messages = "SQL Query: " . $stmt->sqlstate;

        if ($stmt->execute()) {
            $messages .= " - New record created successfully";
        } else {
            $messages .= " - Error: " . $stmt->error;
        }

        $response = array(
            'status' => 'success',
            'message' => $messages
        );

        header('Content-Type: application/json');
        echo json_encode($response);

        $stmt->close();
    } else {
        http_response_code(400);
        echo json_encode(array('error' => 'Name, age, phone, and email parameters are required'));
    }
} else {
    http_response_code(405);
    echo json_encode(array('error' => 'Method Not Allowed'));
}

$conn->close();
?>

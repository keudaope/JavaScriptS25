<?php
include 'connect.php';

$name = $_POST['name'];

$sql = "INSERT INTO items (name) VALUES ('$name')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}
$conn->close();
?>

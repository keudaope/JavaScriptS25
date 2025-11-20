<?php
include 'connect.php';

$id = $_POST['id'];
$name = $_POST['name'];

$sql = "UPDATE items SET name = '$name' WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}
$conn->close();
?>

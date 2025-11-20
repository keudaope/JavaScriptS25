<?php
// Tietokantayhteyden tiedot
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'customer_management';

// Yhdistetään tietokantaan
$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
    die('Database connection failed: ' . mysqli_connect_error());
}

// Haetaan JSON-pyyntö
$data = json_decode(file_get_contents('php://input'), true);
$action = isset($_GET['action']) ? $_GET['action'] : (isset($data['action']) ? $data['action'] : null);

// Lisätään uusi asiakas
if ($action == 'add') {
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $phone = mysqli_real_escape_string($conn, $data['phone']);

    $query = "INSERT INTO customers (name, email, phone) VALUES ('$name', '$email', '$phone')";
    $result = mysqli_query($conn, $query);

    echo json_encode(['success' => $result]);
}
// Haetaan asiakkaat
elseif ($action == 'read') {
    $query = "SELECT * FROM customers";
    $result = mysqli_query($conn, $query);

    $customers = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $customers[] = $row;
    }
    echo json_encode($customers);
}
// Poistetaan asiakas
elseif ($action == 'delete') {
    $id = intval($data['id']);
    $query = "DELETE FROM customers WHERE id = $id";
    $result = mysqli_query($conn, $query);

    echo json_encode(['success' => $result]);
}
// Päivitetään asiakkaan tiedot
elseif ($action == 'update') {
    $id = intval($data['id']);
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $phone = mysqli_real_escape_string($conn, $data['phone']);

    $query = "UPDATE customers SET name = '$name', email = '$email', phone = '$phone' WHERE id = $id";
    $result = mysqli_query($conn, $query);

    echo json_encode(['success' => $result]);
}
// Virheellinen toiminto
else {
    echo json_encode(['success' => false, 'message' => 'Invalid action']);
}

// Suljetaan tietokantayhteys
mysqli_close($conn);
?>

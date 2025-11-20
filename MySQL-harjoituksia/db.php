<?php
// db.php – tietokantayhteys MySQLi:llä (proceduraalinen)

$host   = "localhost";
$user   = "root";
$pass   = ""; // laita oma salasanasi tähän
$dbname = "asiakasrekisteri";

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die("Tietokantayhteys epäonnistui: " . mysqli_connect_error());
}

if (!mysqli_set_charset($conn, "utf8mb4")) {
    die("Merkkikoodin asettaminen epäonnistui: " . mysqli_error($conn));
}

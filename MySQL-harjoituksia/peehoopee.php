<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hr";

// Create connection
$conn = new mysql($servername, $username, $password, $dbname);
// Check connection
if (mysqli_connect_error()) {
  die("Database connection failed: " . mysqli_connect_error());
}

$sql = "SELECT first_name, last_name FROM employees";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    echo " - Name: " . $row["first_name"]. " " . $row["last_name"]. "<br>";
  }
} else {
  echo "0 results";
}

mysqli_close($conn);
?>
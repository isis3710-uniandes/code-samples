<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "neptuno";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

  $sql = "SELECT * FROM clientes";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["idCliente"]. " - Name: " . $row["NombreCompania"]. " " . $row["NombreContacto"]. "<br>";
    }
  } else {
    echo "0 results";
  }
  $conn->close();
?>

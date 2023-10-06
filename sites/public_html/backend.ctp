<?php
// Configura tu conexión a la base de datos MySQL
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir los datos del testimonio del frontend
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$testimonial = $data->testimonial;

// Guardar el testimonio en la base de datos
$sql = "INSERT INTO testimonios (nombre, testimonio) VALUES ('$name', '$testimonial')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "Testimonio guardado con éxito"));
} else {
    echo json_encode(array("error" => "Error al guardar el testimonio: " . $conn->error));
}

// Cerrar la conexión
$conn->close();
?>

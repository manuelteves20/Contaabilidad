<?php  

// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "manueltevesroman2019@gmail.com";


$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('contactos.html');

?>
<?php
// Koneksi database
$host = 'localhost';
$db   = 'ekskul_crud';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die('Koneksi gagal: ' . $conn->connect_error);
}

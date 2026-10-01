<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: ../auth/login.php');
    exit;
}

require 'db.php';

$id   = $_GET['id'];
$stmt = $conn->prepare('DELETE FROM mahasiswa WHERE id = ?');
$stmt->bind_param('i', $id);
$stmt->execute();

header('Location: index.php');
exit;

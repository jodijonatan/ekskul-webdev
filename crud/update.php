<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: ../auth/login.php');
    exit;
}

require 'db.php';

$id   = $_GET['id'];
$stmt = $conn->prepare('SELECT * FROM mahasiswa WHERE id = ?');
$stmt->bind_param('i', $id);
$stmt->execute();
$row = $stmt->get_result()->fetch_assoc();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama'];
    $nim  = $_POST['nim'];

    $stmt = $conn->prepare('UPDATE mahasiswa SET nama = ?, nim = ? WHERE id = ?');
    $stmt->bind_param('ssi', $nama, $nim, $id);
    $stmt->execute();

    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Edit Data</title>
</head>
<body>
    <h2>Edit Mahasiswa</h2>
    <a href="index.php">← Kembali</a><br><br>

    <form method="POST">
        <label>Nama:</label><br>
        <input type="text" name="nama" value="<?= $row['nama'] ?>" required><br><br>

        <label>NIM:</label><br>
        <input type="text" name="nim" value="<?= $row['nim'] ?>" required><br><br>

        <button type="submit">Update</button>
    </form>
</body>
</html>

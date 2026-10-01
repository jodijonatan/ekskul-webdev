<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: ../auth/login.php');
    exit;
}

require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama'];
    $nim  = $_POST['nim'];

    $stmt = $conn->prepare('INSERT INTO mahasiswa (nama, nim) VALUES (?, ?)');
    $stmt->bind_param('ss', $nama, $nim);
    $stmt->execute();

    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tambah Data</title>
</head>
<body>
    <h2>Tambah Mahasiswa</h2>
    <a href="index.php">← Kembali</a><br><br>

    <form method="POST">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>NIM:</label><br>
        <input type="text" name="nim" required><br><br>

        <button type="submit">Simpan</button>
    </form>
</body>
</html>

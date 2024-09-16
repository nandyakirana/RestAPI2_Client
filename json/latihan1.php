<?php

// $mahasiswa = [
//     "Nama" => "Giacinta Marescotti Nandya Kirana Permatdewi",
//     "NIM" => "215314211",
//     "Email" => "flaviakirana@gmail.com"
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', 'root');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
?>
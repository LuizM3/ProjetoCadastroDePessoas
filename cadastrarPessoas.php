<?php

include_once("conexao.php");

$nome = $_POST["inNome"];
$idade = $_POST["inIdade"];
$CPF = $_POST["inCPF"];

if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

$sql = "INSERT INTO pessoa (nome, idade, CPF) VALUES ('$nome', '$idade', '$CPF')";

if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso";
} else {
    echo "Erro ao inserir os dados: " . $conn->error;
}

$conn->close();
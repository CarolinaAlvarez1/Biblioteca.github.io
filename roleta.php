<?php
if (!isset($_POST['livro1'])) {
    header('Location: index.php');
    exit;
}

$livros = [
    $_POST['livro1'],
    $_POST['livro2'],
    $_POST['livro3'],
    $_POST['livro4'],
    // $_POST['livro5']
];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>🎡 Roleta de Livros</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h1>🎡 Roleta de Livros</h1>
<div id="resultado"></div>
    <button id="botaoGirar">Girar Roleta</button>

    <div class="roleta-container">
        <div class="ponteiro"></div>
        <canvas id="roleta" width="400" height="400"></canvas>
    </div>
    
<button onclick="window.location.href = 'index.php'">Voltar</button>
    <script>
        const livrosPHP = <?php echo json_encode($livros); ?>;
    </script>
    <script src="assets/script.js"></script>
</body>
</html>

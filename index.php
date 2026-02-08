<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>🎡 Inserir Livros</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h2> Infome os livros </h2>

    <form action="roleta.php" method="POST" class="form-livros">
        <?php for ($i = 1; $i <= 4; $i++): ?>
            <input type="text" name="livro<?= $i ?>" placeholder="Livro <?= $i ?>" required><br>
        <?php endfor; ?>
        <button type="submit">Ir para a roleta 🎡</button>
    </form>
</body>
</html>

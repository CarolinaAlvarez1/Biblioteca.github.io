const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");
const numSetores = 4;
let livros = livrosPHP;
const cores = ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"];
const raio = canvas.width / 2;
let anguloAtual = 0;
let sorteado = null;

function desenharRoleta() {
    const anguloSetor = (2 * Math.PI) / numSetores;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numSetores; i++) {
        const inicio = anguloSetor * i;
        const fim = inicio + anguloSetor;
        ctx.beginPath();
        ctx.moveTo(raio, raio);
        ctx.arc(raio, raio, raio, inicio, fim);
        ctx.fillStyle = cores[i % cores.length];
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Nome nas bordas
        ctx.save();
        ctx.translate(raio, raio);
        ctx.rotate(inicio + anguloSetor / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 14px Poppins";
        ctx.fillText(livros[i], raio - 10, 5);
        ctx.restore();
    }
}

function girarRoleta(anguloFinal, duracao) {
    const inicio = performance.now();
    function animar(tempo) {
        const progresso = Math.min((tempo - inicio) / duracao, 1);
        const easeOut = 1 - Math.pow(1 - progresso, 3);
        const angulo = anguloAtual + easeOut * (anguloFinal - anguloAtual);
        ctx.save();
        ctx.translate(raio, raio);
        ctx.rotate(angulo);
        ctx.translate(-raio, -raio);
        desenharRoleta();
        ctx.restore();
        if (progresso < 1) {
            requestAnimationFrame(animar);
        } else {
            anguloAtual = angulo % (2 * Math.PI);
        }
    }
    requestAnimationFrame(animar);
}

document.getElementById("botaoGirar").addEventListener("click", () => {
    const indice = Math.floor(Math.random() * livros.length);
    sorteado = livros[indice];

    const anguloPorSetor = (2 * Math.PI) / numSetores;
    const alvo = (2 * Math.PI) - (indice * anguloPorSetor + anguloPorSetor / 2);
    const voltas = 5 * 2 * Math.PI;
    const anguloFinal = anguloAtual + voltas + alvo;

    girarRoleta(anguloFinal, 4000);

    setTimeout(() => {
        document.getElementById("resultado").innerHTML = `📖 Livro sorteado: <strong>${sorteado}</strong>`;
    }, 4200);
});

desenharRoleta();


const finalTime = new Date().setHours(17, 0, 0, 0) + 24 * 60 * 60 * 1000; // Amanhã às 17:00
const tempoElement = document.getElementById('tempo');

function updateCountdown() {
    const currentTime = new Date();
    const diff = finalTime - currentTime;

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    tempoElement.innerText = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (diff <= 0) {
        clearInterval(interval);
        tempoElement.innerText = "O resultado foi divulgado!";
    }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

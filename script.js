// Efecto máquina de escribir
const letterElement = document.getElementById("letter");
const message = `
¡Hola Gigi! 💙

Este año es súper especial porque estás terminando una gran etapa, ¡te gradúas de sexto grado! 🎓✨

Quiero decirte que, aunque no nos veamos mucho, estoy MUY orgulloso de vos. Sos una crack total y sé que la vida tiene cosas enormes y hermosas esperándote. 🌈💫

Nunca dejés de soñar en grande, de reír como lo hacés, y de ser tan genial como ya sos.

¡Te deseo lo mejor en esta nueva aventura! 🚀💙

Con cariño,
El novio de tu hermana 😄
`;

let index = 0;

function typeLetter() {
    if (index < message.length) {
        letterElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeLetter, 30);
    }
}

typeLetter();

// Corazones cayendo
const heartContainer = document.querySelector(".heart-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💙";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Efecto máquina de escribir
const letterElement = document.getElementById("letter");
const message = `
¡Hola Gigi! 💙

Este año es súper especial porque estás terminando una gran etapa de su vida, ¡te gradúas de sexto grado! 🎓✨

Quiero decirte que, aunque no nos veamos mucho, estoy MUY orgulloso de usted. Eres una crack y sé que la vida tiene cosas enormes y muy chivas esperándote. 🌈💫

Nunca dejés de soñar en grande.

¡Te deseo lo mejor en esta nueva aventura! 🚀💙

Con cariño,
Tuti 😄
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

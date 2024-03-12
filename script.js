document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.5}s`;
        title.appendChild(span);
        setTimeout(function () {
            for (let j = 0; j < 10; j++) {
                setTimeout(function () {
                    span.textContent = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
                }, (j * 50));
            }
        }, i * 0.5 * 1000);
        setTimeout(function () {
            span.textContent = text[i];
        }, (i + 2) * 0.5 * 1000);
    }
});

const heartColors = ['#ff5e5e', '#ffb6b6', '#ff8484', '#ff9292', '#ffaaaa'];
const heartInterval = 15;
const numberOfHearts = 100;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
let secondClick = false;

yesButton.addEventListener('click', function () {
    if (!secondClick) {
        generateHearts();
        const title = document.querySelector('.title');
        title.textContent = 'Yaşasınnnn uwu!';
        setTimeout(() => {
            noButton.style.display = 'none';
        }, 500);
        var audio = document.getElementById("audio");
        audio.play();
        secondClick = true
        yesButton.textContent = "Bana ulaş (Butona bas)";
    } else {
        setTimeout(() => {
            window.location.href = 'https://discord.com/users/853011311328100411';
        }, 2500);
    }
});

function generateHearts() {
    const symbols = ['🍆','❤️', '💖', '💗', '💕', '💓'];
    const heartInterval = 100;
    setInterval(() => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        createHeart(symbol);
    }, heartInterval);
}

function createHeart(symbol) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = symbol;
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.animationName = 'heartAnimation';
    heart.style.animationDuration = '.9s';
    document.body.appendChild(heart);
}

const btn = document.getElementById('noButton');

let isMoved = false;
btn.addEventListener("mouseover", function () {
    if (!isMoved) {
        btn.style.transform = `translate(-150px, 0px)`;
        isMoved = true;
    } else {
        btn.style.transform = `translate(100px, 0px)`;
        isMoved = false;
    }
    btn.style.transition = "all 0.3s ease";
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        noButton.style.animation = 'explode 0.5s forwards'
        setTimeout(() => noButton.style.display = 'none', 500);
        event.preventDefault();
        const title = document.querySelector('.title');
        title.textContent = 'Hile yapmak yok :)';
        setTimeout(() => {
            var audio = document.getElementById("audio");
            audio.play();
            title.textContent = 'Çıkalım mı artık?';
        }, 2000);
    }
});

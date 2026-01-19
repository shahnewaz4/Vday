const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartsContainer = document.getElementById('hearts');


yesBtn.addEventListener('click', () => {
document.querySelector('.card').innerHTML = `
<h1>🥰 Yay!!! 🥰</h1>
<p>Can't wait to spend Valentine's Day with you ❤️</p>
`;
createHearts();
});


noBtn.addEventListener('mouseover', () => {
const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
noBtn.style.position = 'absolute';
noBtn.style.left = `${x}px`;
noBtn.style.top = `${y}px`;
});

function createHearts() {
for (let i = 0; i < 30; i++) {
const heart = document.createElement('div');
heart.className = 'heart';
heart.textContent = '❤️';
heart.style.left = Math.random() * 100 + 'vw';
heart.style.animationDelay = Math.random() * 2 + 's';
heartsContainer.appendChild(heart);


setTimeout(() => heart.remove(), 4000);
}
}
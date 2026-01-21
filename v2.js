const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartsContainer = document.getElementById('hearts');
const next = document.getElementById('next');

yesBtn.addEventListener('click', () => {
document.querySelector('.container').innerHTML = `
<div class="card">
    <h1>🥰 Yay!!! 🥰</h1>
    <p>I love you so much baby mwah mwah mwah</p>
    
</div>
<h2>To Countdown</h2>
<div class="next">
        <button id="next" class="buttons">
            
            <i class="arrow right"></i>
        </button>
            
    </div>
`;
createHearts();
const next = document.getElementById('next');

next.addEventListener('click', () => {
    window.location.href ="countdown.html"
});

});


noBtn.addEventListener('click', () => {
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


setTimeout(() => heart.remove(), 10000);
}
};

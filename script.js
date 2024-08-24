document.getElementById('yes').addEventListener('click', function() {
    // Kalbi göster
    const heart = document.getElementById('heart');
    heart.classList.add('show-heart');
});

document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

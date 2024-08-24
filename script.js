document.getElementById('yes').addEventListener('click', function() {
    // Kalp yaratma fonksiyonunu çağır
    createHearts(20); // Ekranda 20 tane kalp çıkacak
});

document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(heart);

        // Belirli bir süre sonra kalbi kaldır
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

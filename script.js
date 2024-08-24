document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('heart').classList.remove('hidden');
});

document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

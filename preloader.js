window.addEventListener('DOMContentLoaded', () => {
    let loader = document.getElementById('loader');
    let bar = document.getElementById('loader-bar-inner');
    setTimeout(() => { bar.style.width = '100%'; }, 200);
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => loader.style.display = 'none', 700);
    }, 1800);
});
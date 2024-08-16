document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const svg1 = document.getElementById('svg1');
    const svg2 = document.getElementById('svg2');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (svg1.classList.contains('hidden')) {
            svg1.classList.remove('hidden');
            svg2.classList.add('hidden');
        } else {
            svg2.classList.remove('hidden');
            svg1.classList.add('hidden');
        }
    });
});


const mainBtn = document.getElementById('mainBtn');
const container = document.getElementById('container');
const overlay = document.getElementById('overlay');

mainBtn.addEventListener('click', function() {
    // Alterna a classe 'active' para mostrar/esconder os sub-botões
    container.classList.toggle('active');
    // Mostra ou esconde o overlay
    overlay.style.display = container.classList.contains('active') ? 'block' : 'none';
});

// Fecha os botões e o overlay ao clicar no overlay
overlay.addEventListener('click', function() {
    container.classList.remove('active');
    overlay.style.display = 'none';
});
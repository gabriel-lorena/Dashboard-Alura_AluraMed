// Função para atualizar a hora da barra de status 
function exibirHora() {
    const agora = new Date(); 
    const hour = agora.toLocaleTimeString('pt-BR', { hour12: false }); // Formato 24h
    
    // Atualiza todos os elementos que possuem a classe "hora"
    document.querySelectorAll(".hour").forEach(el => {
        el.textContent = hour;
    });
}

// Atualiza o relógio a cada segundo
setInterval(exibirHora, 1000);
exibirHora();
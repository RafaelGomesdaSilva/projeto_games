// scroll suave para os links do menu
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
            // Fecha o menu hamburguer em mobile
            document.getElementById('menu-toggle').checked = false;
        }
    });
});

// scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-cyber, .card-jogo, .depoimento-card');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active-reveal');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// animação nos cards jogos (brilho extra no hover)
document.querySelectorAll('.card-jogo').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-brilho');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-brilho');
    });
});

// validação do formulário 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    if (form) {
        form.addEventListener('submit', function (e) {
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            let erro = '';

            if (nome.length < 3) {
                erro += 'O nome deve ter pelo menos 3 caracteres.\n';
            }
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                erro += 'Digite um e-mail válido.\n';
            }
            if (mensagem.length < 10) {
                erro += 'A mensagem deve ter pelo menos 10 caracteres.\n';
            }

            if (erro) {
                alert(erro);
                e.preventDefault();
            }
        });
    }
});

// efeito reveal (fade/slide) via CSS
const style = document.createElement('style');
style.innerHTML = `
.section-cyber, .card-jogo, .depoimento-card {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(.77,0,.18,1), transform 0.8s cubic-bezier(.77,0,.18,1);
}
.active-reveal {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
.card-jogo.hover-brilho {
    box-shadow: 0 0 60px #ff00cc, 0 0 40px #00fff7, 0 0 24px #a259ff;
    border-color: #ffe600;
}
`;
document.head.appendChild(style);
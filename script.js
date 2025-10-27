// ===================================
// MENU HAMBÚRGUER (MOBILE)
// ===================================

// Seleciona os elementos do menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Adiciona evento de clique no botão do menu
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Anima o ícone do hambúrguer
    menuToggle.classList.toggle('active');
});

// Fecha o menu quando clicar em um link (mobile)
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ===================================
// BOTÃO FLUTUANTE DO WHATSAPP
// ===================================

// Seleciona o botão flutuante
const whatsappFloat = document.querySelector('.whatsapp-float');

// Função para mostrar/ocultar o botão baseado no scroll
function toggleWhatsappButton() {
    // Mostra o botão após rolar 300px da página
    if (window.scrollY > 300) {
        whatsappFloat.classList.add('show');
    } else {
        whatsappFloat.classList.remove('show');
    }
}

// Adiciona o evento de scroll
window.addEventListener('scroll', toggleWhatsappButton);

// Executa a função ao carregar a página
toggleWhatsappButton();

// ===================================
// SCROLL SUAVE PARA SEÇÕES
// ===================================

// Adiciona comportamento de scroll suave para todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Ignora se for apenas "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calcula a posição considerando o header fixo
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // Faz o scroll suave
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ===================================

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar animação aos cards quando aparecem na tela
function animateOnScroll() {
    const cards = document.querySelectorAll('.service-card, .testimonial-card');
    
    cards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            // Adiciona um pequeno delay para cada card criar efeito cascata
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}

// Inicializa os cards com opacidade 0 e deslocados
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .testimonial-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Executa a animação
    animateOnScroll();
});

// Adiciona o evento de scroll para animar os cards
window.addEventListener('scroll', animateOnScroll);

// ===================================
// PREVENÇÃO DE COMPORTAMENTO PADRÃO
// ===================================

// Previne o comportamento padrão de links vazios
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===================================
// LOG DE CARREGAMENTO (OPCIONAL)
// ===================================

console.log('🐾 Landing Page da Kikão carregada com sucesso!');
console.log('💛 Desenvolvido por @mayasrl');


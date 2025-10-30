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
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .team-card');
    
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
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .team-card');
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
// CARROSSEL DE GALERIA
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn-next');
    const prevButton = document.querySelector('.carousel-btn-prev');
    const dotsContainer = document.querySelector('.gallery-dots');
    
    // Verifica se os elementos existem antes de continuar
    if (!track || slides.length === 0) return;
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Cria os dots de navegação
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('gallery-dot');
        dot.setAttribute('aria-label', `Ir para foto ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(dotsContainer.children);
    
    // Posiciona os slides lado a lado
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    
    let currentSlide = 0;
    
    // Função para mover para um slide específico
    const moveToSlide = (targetIndex) => {
        const currentDot = dots[currentSlide];
        const targetDot = dots[targetIndex];
        
        track.style.transform = 'translateX(-' + (slideWidth * targetIndex) + 'px)';
        
        currentDot.classList.remove('active');
        targetDot.classList.add('active');
        
        currentSlide = targetIndex;
    };
    
    // Botão próximo
    nextButton.addEventListener('click', () => {
        const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        moveToSlide(nextIndex);
    });
    
    // Botão anterior
    prevButton.addEventListener('click', () => {
        const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        moveToSlide(prevIndex);
    });
    
    // Navegação por dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
    
    // Auto-play do carrossel (opcional - a cada 5 segundos)
    setInterval(() => {
        const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        moveToSlide(nextIndex);
    }, 5000);
});

// ===================================
// FAQ (PERGUNTAS FREQUENTES)
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            // Fecha todas as outras respostas
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle da resposta atual
            if (isExpanded) {
                question.setAttribute('aria-expanded', 'false');
                answer.classList.remove('active');
            } else {
                question.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
            }
        });
    });
});

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

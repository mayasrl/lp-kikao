const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

const whatsappFloat = document.querySelector('.whatsapp-float');

function toggleWhatsappButton() {
    if (window.scrollY > 300) {
        whatsappFloat.classList.add('show');
    } else {
        whatsappFloat.classList.remove('show');
    }
}

window.addEventListener('scroll', toggleWhatsappButton);
toggleWhatsappButton();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .team-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    
    function animateCards() {
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }
    
    animateCards();
    window.addEventListener('scroll', animateCards);
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn-next');
    const prevButton = document.querySelector('.carousel-btn-prev');
    const dotsContainer = document.querySelector('.gallery-dots');
    
    if (!track || slides.length === 0) return;
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('gallery-dot');
        dot.setAttribute('aria-label', `Ir para foto ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(dotsContainer.children);
    
    let currentSlide = 0;
    
    const moveToSlide = (targetIndex) => {
        const currentDot = dots[currentSlide];
        const targetDot = dots[targetIndex];
        
        track.style.transform = 'translateX(-' + (slideWidth * targetIndex) + 'px)';
        
        currentDot.classList.remove('active');
        targetDot.classList.add('active');
        
        currentSlide = targetIndex;
    };
    
    nextButton.addEventListener('click', () => {
        const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        moveToSlide(nextIndex);
    });
    
    prevButton.addEventListener('click', () => {
        const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        moveToSlide(prevIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
    
    setInterval(() => {
        const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        moveToSlide(nextIndex);
    }, 8000);
});

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
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

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

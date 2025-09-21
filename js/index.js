// Elementos DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const languageToggleBtn = document.getElementById('language-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const motivationalMessage = document.getElementById('motivational-message');
const messageImage = document.getElementById('message-image');
const backToTopBtn = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');
const logoTop = document.getElementById('logoTop');
const faqItems = document.querySelectorAll('.faq-item');

// Mensajes motivacionales en español e inglés
const motivationalMessages = {
    es: [
        "Domingo: Que este día esté lleno de paz y serenidad. Un masaje puede ser el regalo perfecto para despedir la semana y prepararte para lo que viene.",
        "Lunes: Comienza la semana renovando tu energía con un masaje relajante. Tu bienestar es tu prioridad.",
        "Martes: Cada tensión liberada es un paso hacia una mente y cuerpo más equilibrados. ¡Disfruta de tu sesión de masoterapia hoy!",
        "Miércoles: Recuerda que tu cuerpo merece cuidados constantes. Un masaje es la mejor manera de consentirte a ti mismo.",
        "Jueves: A medida que la semana avanza, deja que la masoterapia libere el estrés acumulado y restaure tu vitalidad.",
        "Viernes: Prepárate para el fin de semana con un masaje que revitalice tu cuerpo y mente. ¡Estás a punto de recargar tus energías!",
        "Sábado: El fin de semana es perfecto para reconectar contigo mismo. Regálate un masaje y permite que la relajación te renueve por completo."
    ],
    en: [
        "Sunday: May this day be full of peace and serenity. A massage can be the perfect gift to say goodbye to the week and prepare for what's to come.",
        "Monday: Start the week by renewing your energy with a relaxing massage. Your well-being is your priority.",
        "Tuesday: Every released tension is a step towards a more balanced mind and body. Enjoy your massage therapy session today!",
        "Wednesday: Remember that your body deserves constant care. A massage is the best way to pamper yourself.",
        "Thursday: As the week progresses, let massage therapy release accumulated stress and restore your vitality.",
        "Friday: Prepare for the weekend with a massage that revitalizes your body and mind. You're about to recharge your energies!",
        "Saturday: The weekend is perfect to reconnect with yourself. Give yourself a massage and allow relaxation to completely renew you."
    ]
};

// Imágenes reales de masoterapia para cada día de la semana
const backgroundImages = [
    "url('../img/01.jpg')", // Domingo
    "url('../img/02.jpg')", // Lunes
    "url('../img/03.jpg')", // Martes
    "url('../img/04.jpg')", // Miércoles
    "url('../img/05.jpg')", // Jueves
    "url('../img/06.jpg')", // Viernes
    "url('../img/07.jpg')"  // Sábado
];

// Cargar preferencias guardadas
function loadPreferences() {
    // Cargar tema
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        updateTooltip(themeToggleBtn, 'dark');
    }
    
    // Cargar idioma
    if (localStorage.getItem('language') === 'en') {
        switchLanguage('en');
        languageToggleBtn.innerHTML = '<i class="fas fa-globe-americas"></i>';
        updateTooltip(languageToggleBtn, 'en');
    }
}

// Cambiar idioma
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-es]');
    
    elements.forEach(el => {
        if (lang === 'en') {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute('data-lang-en');
            } else {
                el.textContent = el.getAttribute('data-lang-en');
            }
        } else {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute('data-lang-es');
            } else {
                el.textContent = el.getAttribute('data-lang-es');
            }
        }
    });
    
    // Actualizar botones de tema e idioma
    //updateTooltip(themeToggleBtn, lang); // Fix error 2025-09-10
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
        updateTooltip(themeToggleBtn, lang);
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
        updateTooltip(themeToggleBtn, lang);
    }
    updateTooltip(languageToggleBtn, lang);
    
    localStorage.setItem('language', lang);
    
    // Actualizar mensaje motivacional según el idioma
    updateMotivationalMessage();
}

// Actualizar tooltips según el idioma
function updateTooltip(element, lang) {
    if (lang === 'en') {
        element.setAttribute('title', element.getAttribute('data-lang-en'));
    } else {
        element.setAttribute('title', element.getAttribute('data-lang-es'));
    }
}

// Actualizar mensaje motivacional según el día
function updateMotivationalMessage() {
    const dayOfWeek = new Date().getDay(); // 0 (domingo) a 6 (sábado)
    const language = localStorage.getItem('language') || 'es';
    
    // Ajustar para que el domingo sea el día 0 en nuestro array
    const adjustedDay = dayOfWeek;
    
    motivationalMessage.textContent = motivationalMessages[language][adjustedDay];
    messageImage.style.backgroundImage = backgroundImages[adjustedDay];
    
    // Actualizar el texto de la imagen según el idioma
    const imageText = messageImage.querySelector('span');
    if (language === 'en') {
        imageText.textContent = imageText.getAttribute('data-lang-en');
    } else {
        imageText.textContent = imageText.getAttribute('data-lang-es');
    }
}

// Función para la barra de progreso
function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / documentHeight) * 100;
    progressBar.style.width = progress + '%';
}

// Función para mostrar/ocultar el botón de volver arriba
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

// Función para hacer scroll suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para alternar preguntas FAQ - CORREGIDA
function setupFaqToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Cerrar otras preguntas abiertas (opcional)
            /* faqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            }); */
        });
    });
}

// Event Listeners
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
        updateTooltip(themeToggleBtn, localStorage.getItem('language') || 'es');
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
        updateTooltip(themeToggleBtn, localStorage.getItem('language') || 'es');
    }
});

languageToggleBtn.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'es';
    
    if (currentLang === 'es') {
        switchLanguage('en');
        languageToggleBtn.innerHTML = '<i class="fas fa-globe-americas"></i>';
    } else {
        switchLanguage('es');
        languageToggleBtn.innerHTML = '<i class="fas fa-globe"></i>';
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Cerrar menú hamburguesa al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Event listeners para scroll
window.addEventListener('scroll', () => {
    updateProgressBar();
    toggleBackToTop();
});

// Event listener para el botón de volver arriba
backToTopBtn.addEventListener('click', scrollToTop);

// Event listener para el logo
logoTop.addEventListener('click', scrollToTop);

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    updateMotivationalMessage();
    updateProgressBar();
    toggleBackToTop();
    setupFaqToggle(); // Configurar el toggle de FAQ
});
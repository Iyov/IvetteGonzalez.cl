// Elementos DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const languageToggleBtn = document.getElementById('language-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const motivationalMessage = document.getElementById('motivational-message');
const messageImage = document.getElementById('message-image');

// Mensajes motivacionales en español e inglés
const motivationalMessages = {
    es: [
        "Comienza la semana renovando tu energía con un masaje relajante. Tu bienestar es tu prioridad.",
        "Cada tensión liberada es un paso hacia una mente y cuerpo más equilibrados. ¡Disfruta de tu sesión de masoterapia hoy!",
        "Recuerda que tu cuerpo merece cuidados constantes. Un masaje es la mejor manera de consentirte a ti mismo.",
        "A medida que la semana avanza, deja que la masoterapia libere el estrés acumulado y restaure tu vitalidad.",
        "Prepárate para el fin de semana con un masaje que revitalice tu cuerpo y mente. ¡Estás a punto de recargar tus energías!",
        "El fin de semana es perfecto para reconectar contigo mismo. Regálate un masaje y permite que la relajación te renueve por completo.",
        "Que este día esté lleno de paz y serenidad. Un masaje puede ser el regalo perfecto para despedir la semana y prepararte para lo que viene."
    ],
    en: [
        "Start the week by renewing your energy with a relaxing massage. Your well-being is your priority.",
        "Every released tension is a step towards a more balanced mind and body. Enjoy your massage therapy session today!",
        "Remember that your body deserves constant care. A massage is the best way to pamper yourself.",
        "As the week progresses, let massage therapy release accumulated stress and restore your vitality.",
        "Prepare for the weekend with a massage that revitalizes your body and mind. You're about to recharge your energies!",
        "The weekend is perfect to reconnect with yourself. Give yourself a massage and allow relaxation to completely renew you.",
        "May this day be full of peace and serenity. A massage can be the perfect gift to say goodbye to the week and prepare for what's to come."
    ]
};

// Imágenes reales de masoterapia para cada día de la semana
const backgroundImages = [
    "url('https://images.unsplash.com/photo-1544161515-73676e544c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')", // Lunes - Masaje de espalda
    "url('https://images.unsplash.com/photo-1544168212-5d5c78c777f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')", // Martes - Masaje de pies
    "url('https://images.unsplash.com/photo-1591348278994-42bbd3f566737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')", // Miércoles - Masaje de cuello
    "url('https://images.unsplash.com/photo-1591348278994-42bbd3f566737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')", // Jueves - Masaje de hombros
    "url('https://images.unsplash.com/photo-1544168212-5d5c78c777f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')", // Viernes - Masaje de manos
    "url('https://images.unsplash.com/photo-1544168515-7157a5fbe2f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')", // Sábado - Ambiente relajante
    "url('https://images.unsplash.com/photo-1544168515-7157a5fbe2f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')"  // Domingo - Ambiente de spa
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
    
    // Actualizar tooltips
    updateTooltip(themeToggleBtn, lang);
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

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    updateMotivationalMessage();
});

// Plan details data
const planDetails = {
    starter: {
        title: "Plan Starter",
        price: "5 - 10 USD",
        period: "Paquete único",
        description: "Perfecto para comunidades pequeñas o nuevos servidores que necesitan una base sólida.",
        features: [
            "Estructura de canales clara y funcional, incluyendo canales de texto, voz y categorías básicas para una buena organización.",
            "Roles básicos configurados con jerarquía y colores diferenciados para facilitar la gestión y permisos.",
            "Bots esenciales integrados, que pueden incluir moderación automática, música o sistema básico de niveles.",
            "Mensaje de bienvenida simple configurado para dar la bienvenida a nuevos miembros de forma automática.",
            "Diseño estético con uso adecuado de emojis y nombres claros para mejorar la experiencia visual del servidor.",
            "Configuración rápida y ordenada, garantizando que el servidor quede listo para usar en poco tiempo."
        ]
    },
    pro: {
        title: "Plan Pro",
        price: "15 - 20 USD",
        period: "Pensado para comunidades en crecimiento, creadores de contenido o proyectos con más actividad.",
        description: "La opción más popular para comunidades que quieren mayor estructura, personalización y funcionalidades avanzadas.",
        features: [
            "Incluye todo lo del Plan Starter para asegurar una base sólida.",
            "Canales personalizados organizados por secciones temáticas, como eventos, sugerencias, soporte y más, para mejor navegación.",
            "Sistema de reglas implementado mediante mensajes embed y roles automáticos asignados con reacciones para facilitar el cumplimiento.",
            "Bots configurados para funciones avanzadas como tickets de soporte, registros de actividad (logs), anti-spam y asignación de roles por reacción.",
            "Diseño visual completo que incorpora emojis personalizados, separadores y una estructura estética para una experiencia atractiva.",
            "Asesoramiento en seguridad, permisos y mejores prácticas para administrar el servidor con eficiencia.",
            "Revisión final antes de la entrega para garantizar que todo funcione correctamente y esté optimizado."
        ]
    },
    premium: {
        title: "Plan Premium",
        price: "25 - 30 USD",
        period: "Hecho para marcas, grandes comunidades o proyectos que buscan un servidor de alta calidad.",
        description: "Diseñado para proyectos profesionales que requieren una configuración avanzada y diseño exclusivo.",
        features: [
            "Incluye todo lo del Plan Pro para mantener una base sólida y completa.",
            "Diseño exclusivo personalizado y adaptado completamente a la temática o estilo del cliente para destacar.",
            "Creación de un logo personalizado para el servidor, aumentando la identidad visual y profesionalismo.",
            "Zona privada para el staff, con canales exclusivos que incluyen registros (logs), comandos administrativos y backups para seguridad.",
            "Bots avanzados integrados, incluyendo sistemas de verificación para evitar bots maliciosos, economía virtual, formularios personalizados e incluso integración con IA.",
            "Guía rápida para administradores, facilitando la gestión y capacitación del equipo de moderación.",
            "Soporte post-entrega para ajustes, resolución de dudas y mejoras durante un período acordado."
        ]
    },
    express: {
        title: "Plan Express",
        price: "60 - 65 USD",
        period: "Paquete único",
        description: "Servicio premium con entrega ultrarrápida para proyectos urgentes y exclusivos.",
        features: [
            "Configuración completa de servidor de Discord con canales, roles y bots totalmente personalizados.",
            "Canales organizados con un diseño claro y profesional, incluyendo texto, voz y categorías bien definidas.",
            "Diseño y desarrollo de página web estética y funcional, ideal para presentación, mostrar enlaces y promocionar el servidor.",
            "Hosting gratuito en Netlify para la página web, con posibilidad de dominio personalizado .netlify.app o dominio propio comprado por el cliente.",
            "Soporte prioritario 24/7 para resolver cualquier inconveniente o consulta de forma rápida y eficiente.",
            "Diseño responsive que asegura una correcta visualización tanto en dispositivos móviles como en PC.",
            "Edición rápida y soporte express para adaptaciones o cambios necesarios luego de la entrega."
        ]
    },
    web: {
        title: "Pagina Web",
        price: "45 USD",
        period: "Paquete único",
        description: "Servicio premium con entrega ultrarrápida para proyectos urgentes y exclusivos.",
        features: [
            "Diseño web totalmente personalizado, adaptado a tu temática, marca o comunidad, con identidad visual única.",
            "Diseño responsive, asegurando que la página se vea perfecta tanto en PC como en dispositivos móviles",
            "Hosting gratuito en Netlify, con dominio .netlify.app o posibilidad de usar uno personalizado propio.",
            "Hosting gratuito en Netlify para la página web, con posibilidad de dominio personalizado .netlify.app o dominio propio comprado por el cliente.",
            "Estructura clara y funcional, con secciones como Inicio, Sobre Nosotros, Contacto, Galería o Vínculos útiles.",
            "Botones integrados a redes y plataformas, incluyendo Discord, TikTok, YouTube, Patreon o Linktree.",
            "Optimización de velocidad y experiencia, con animaciones suaves, carga rápida y diseño visual atractivo."
        ]
    },
    personalizado: {
        title: "Personalizado",
        price: "Desde 80 USD",
        period: "Paquete único",
        description: "Servicio premium con entrega ultrarrápida para proyectos urgentes y exclusivos.",
        features: [
            "Diseño integral personalizado, desde la estructura del servidor hasta los colores, íconos y visuales, alineado con tu idea o marca.",
            "Organización avanzada de canales y roles, con nombres, categorías y permisos completamente adaptados a tu lógica de comunidad.",
            "Bots a pedido, con funciones específicas (formularios, juegos, logs, comandos únicos, integración con IA, etc.).",
            "Página web opcional con secciones, textos y estilo únicos, desarrollada según tu contenido o lo que querés mostrar.",
            "Configuración de seguridad personalizada, desde restricciones, verificaciones, hasta zonas exclusivas de staff.",
            "Comunicación directa durante el desarrollo, con revisiones, ajustes y entregas parciales para validar cada parte del proyecto.",
        ]
    }
};


// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update active link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Set the clicked link as active
    if (pageId === 'home') {
        document.querySelector('.nav-links a:first-child').classList.add('active');
    } else if (pageId === 'about') {
        document.querySelectorAll('.nav-links a')[1].classList.add('active');
    } else if (pageId === 'pricing') {
        document.querySelectorAll('.nav-links a')[2].classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Plan Details Modal
const modal = document.getElementById('planModal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');

// Show modal with plan details
function showPlanDetails(plan) {
    const planData = planDetails[plan];

    // Create modal content
    modalContent.innerHTML = `
    <div class="modal-buttons">
        <button class="cta-button" onclick="showOrderPage()">
            <i class="fas fa-shopping-cart"></i> Comprar Ahora
        </button>
        <button class="cta-button secondary" onclick="closePlanModal()">
            <i class="fas fa-times"></i> Cerrar
        </button>
    </div>

    <h2>${planData.title}</h2>
    <p><strong>${planData.price}</strong> - ${planData.period}</p>
    <p>${planData.description}</p>
    
    <h3>Características Incluidas:</h3>
    <ul class="modal-features">
        ${planData.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
    </ul>
`;


    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closePlanModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicked on the button
        if (!e.target.classList.contains('cta-button')) {
            const plan = card.getAttribute('data-plan');
            showPlanDetails(plan);
        }
    });

    // Button inside card
    const button = card.querySelector('.cta-button');
    button.addEventListener('click', () => {
        const plan = card.getAttribute('data-plan');
        showPlanDetails(plan);
    });
});

closeModal.addEventListener('click', closePlanModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closePlanModal();
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Función para mostrar la página de pedido
function showOrderPage() {
    // Cerrar el modal si está abierto
    closePlanModal();

    // Mostrar la página de pedido
    showPage('order');
}

// Actualizar la función showPlanDetails para usar showOrderPage
function showPlanDetails(plan) {
    const planData = planDetails[plan];

    modalContent.innerHTML = `
                <h2>${planData.title}</h2>
                <p><strong>${planData.price}</strong> - ${planData.period}</p>
                <p>${planData.description}</p>
                
                <h3>Características Incluidas:</h3>
                <ul class="modal-features">
                    ${planData.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                
                <div class="modal-buttons">
                    <button class="cta-button" onclick="showOrderPage()">
                        <i class="fas fa-shopping-cart"></i> Comprar Ahora
                    </button>
                    <button class="cta-button secondary" onclick="closePlanModal()">
                        <i class="fas fa-times"></i> Cerrar
                    </button>
                </div>
            `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Animation on Scroll
function checkScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight * 0.9) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Background Animations
function createParticles() {
    const particlesContainer = document.getElementById('particles');

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size (3px to 10px)
        const size = Math.random() * 7 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation duration (10s to 30s)
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);
    }

    // Create floating Discord icons
    for (let i = 0; i < 20; i++) {
        const icon = document.createElement('div');
        icon.classList.add('discord-icon');
        icon.innerHTML = '<i class="fab fa-discord"></i>';

        // Random position
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 100}%`;

        // Random animation duration (15s to 40s)
        const duration = Math.random() * 25 + 15;
        icon.style.animationDuration = `${duration}s`;

        // Random delay
        icon.style.animationDelay = `${Math.random() * 10}s`;

        // Random size (1.5rem to 3rem)
        const size = Math.random() * 1.5 + 1.5;
        icon.style.fontSize = `${size}rem`;

        // Random opacity (0.05 to 0.2)
        const opacity = Math.random() * 0.15 + 0.05;
        icon.style.opacity = opacity;

        particlesContainer.appendChild(icon);
    }
}

// Función para volver atrás
function goBack() {
    // Si hay una página anterior, volvemos a ella
    if (previousPage) {
        showPage(previousPage);
    } else {
        // Si no hay registro de página anterior, vamos al inicio
        showPage('home');
    }
}

// Variables para guardar la navegación
let currentPage = 'home';
let previousPage = null;

// Modificamos showPage para guardar el historial
function showPage(pageId) {
    // Actualizar historial
    previousPage = currentPage;
    currentPage = pageId;

    // Resto del código de showPage (sin cambios)
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    if (pageId === 'home') {
        document.querySelector('.nav-links a:first-child').classList.add('active');
    } else if (pageId === 'about') {
        document.querySelectorAll('.nav-links a')[1].classList.add('active');
    } else if (pageId === 'pricing') {
        document.querySelectorAll('.nav-links a')[2].classList.add('active');
    }

    window.scrollTo(0, 0);
}

// Tipo de cambio (1 USD = 1000 ARS)
const EXCHANGE_RATE = 1280;

// Actualizar precios según la moneda seleccionada
function updatePrices(currency) {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        const priceElement = card.querySelector('.pricing-price');
        const periodElement = card.querySelector('.pricing-period');
        const plan = card.getAttribute('data-plan');

        // Precios originales en USD
        const usdPrices = {
            'starter': '5-10',
            'pro': '15-20',
            'premium': '25-30',
            'web': '40',
            'express': '60-65',
            'personalizado': '80'
        };

        if (currency === 'ARS') {
            // Convertir a pesos argentinos
            if (usdPrices[plan].includes('-')) {
                const [min, max] = usdPrices[plan].split('-').map(Number);
                const minARS = min * EXCHANGE_RATE;
                const maxARS = max * EXCHANGE_RATE;
                priceElement.textContent = `${minARS.toLocaleString('es-AR')}-${maxARS.toLocaleString('es-AR')} ARS$`;
            } else {
                const price = Number(usdPrices[plan]) * EXCHANGE_RATE;
                priceElement.textContent = `${price.toLocaleString('es-AR')} ARS$`;
            }

            // Actualizar el período si es necesario
            if (periodElement.textContent.includes('USD$')) {
                periodElement.textContent = periodElement.textContent.replace('USD$', 'ARS$');
            }
        } else {
            // Volver a dólares
            priceElement.textContent = `${usdPrices[plan]} USD$`;

            // Restaurar el período original
            const originalPeriods = {
                'starter': 'Paquete único',
                'pro': 'Pensado para comunidades en crecimiento, creadores de contenido o proyectos con más actividad.',
                'premium': 'Hecho para marcas, grandes comunidades o proyectos que buscan un servidor de alta calidad.',
                'web': 'Paquete único',
                'express': 'Paquete único',
                'personalizado': 'Paquete único'
            };
            periodElement.textContent = originalPeriods[plan];
        }
    });
}

// Manejar cambio de moneda
document.getElementById('currency').addEventListener('change', function () {
    updatePrices(this.value);
});

// Inicializar precios en USD
updatePrices('USD');

// Initialize animations
createParticles();

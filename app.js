function initMainApp() {

    // ─── 1. Cursor Glow (Eliminado a petición del usuario) ───────────────

    // ─── 2. Mobile Menu Toggle ────────────────────────────────────────────────
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks   = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.innerHTML = isOpen
                ? '<i data-lucide="x"></i>'
                : '<i data-lucide="menu"></i>';
            lucide.createIcons();
        });
        // Close on nav link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', false);
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            });
        });
    }

    // ─── 3. 3D Tilt Effect ────────────────────────────────────────────────────
    document.querySelectorAll('.tilt-card, [data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = ((e.clientY - rect.top)  / rect.height - 0.5) *  6; // Suavizado
            const rotateY = ((e.clientX - rect.left) / rect.width  - 0.5) * -6; // Suavizado
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`; // Zoom incrementado
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        });
    });

    // ─── 4. Smooth Scroll ─────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ─── 5. Navbar & Hero Scroll Effects (requestAnimationFrame Throttling) ───
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function handleScrollEffects() {
        // Navbar styling
        if (lastScrollY > 50) {
            navbar.style.padding    = '10px 30px';
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            navbar.style.padding    = '15px 30px';
            navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        }

        // Hero Parallax (GPU translation)
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translate3d(0, ${lastScrollY * 0.3}px, 0)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(handleScrollEffects);
            ticking = true;
        }
    });

    // ─── 7. Floating Drones ──────────────────────────────────────────────────
    const container = document.getElementById('drones-bg');
    if (container) {
        const droneSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            <path d="M3 3l6 6M21 3l-6 6M3 21l6 -6M21 21l-6 -6"/>
            <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </svg>`;
        for (let i = 0; i < 15; i++) {
            const drone = document.createElement('div');
            drone.className = 'mini-drone';
            drone.setAttribute('aria-hidden', 'true');
            drone.innerHTML = droneSVG;
            drone.style.left              = `${Math.random() * 100}%`;
            drone.style.top               = `${Math.random() * 100}%`;
            drone.style.animationDuration = `${20 + Math.random() * 30}s`;
            drone.style.animationDelay    = `-${Math.random() * 20}s`;
            container.appendChild(drone);
        }
    }

    // ─── 8. Animated Counters ────────────────────────────────────────────────
    const observerCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el     = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                let current  = 0;
                const step   = Math.ceil(target / 60);
                const timer  = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = current + suffix;
                }, 25);
                observerCounter.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-number[data-target]').forEach(el => observerCounter.observe(el));

    // ─── 9. Course Modal & Quiz Assistant ────────────────────────────────────
    const modal          = document.getElementById('course-modal');
    const modalContainer = document.getElementById('modal-container');

    const defaultCourses = {
        microdrones: {
            title: "Microdrones y Operación Urbana (Sub-250g)",
            desc: "Domina el vuelo legal en ciudades, bienes raíces y creación de contenido avanzado. Extrae el máximo potencial comercial a equipos ultraligeros como la serie DJI Mini.",
            viz: "course_microdrones.webp",
            status: "published",
            specs: ["ANAC Res. 550/2025", "Vuelo Urbano VLOS", "15 Días", "Real Estate y RRSS"],
            modules: [
                { name: "Módulo 1: Portabilidad y Operación Urbana", topics: ["Ventajas operativas de la categoría sub-250g", "Análisis de interferencias y obstáculos urbanos", "Normativa de vuelos en proximidad de personas"] },
                { name: "Módulo 2: Cámara y Tomas Cinemáticas", topics: ["Técnicas de encuadre en espacios reducidos (Interiores)", "Grabación 4K HDR y formatos verticales (Redes Sociales)", "Órbitas automatizadas y seguimiento suave"] },
                { name: "Módulo 3: Fotogrametría Básica e Inmobiliaria", topics: ["Planificación de vuelos sobre fachadas y propiedades", "Generación de modelos 3D rápidos y planos 2D", "Entregables de alto impacto visual para clientes"] },
                { name: "Módulo 4: Seguridad y Práctica Intensiva", topics: ["Práctica de despegue/aterrizaje en mano o áreas críticas", "Simulación de pérdida de enlace y configuración RTH", "Ejecución de un portfolio audiovisual urbano"] }
            ],
            bonus: ["Flota de microdrones de última generación incluida", "Asesoría comercial para venta de servicios inmobiliarios", "Plantillas de cotización y contratos"]
        },
        audiovisual: {
            title: "Cine y Producción Audiovisual",
            desc: "Capacitación de élite para set de rodaje. Domina cámaras de formato completo, perfiles D-Log, drones FPV y vuelo con doble operador para publicidad y cine.",
            viz: "course_fotografia.webp",
            status: "published",
            specs: ["ANAC Res. 550/2025", "Producción Alta Gama", "30 Días", "Operación Doble Piloto/Cámara"],
            modules: [
                { name: "Módulo 1: Drones de Cine y Cámaras Avanzadas", topics: ["Operación de equipos pesados (Serie Mavic 3 Pro, Inspire)", "Lentes intercambiables y comprensión de profundidad de campo", "Formatos RAW, Apple ProRes y perfiles de color (D-Log)"] },
                { name: "Módulo 2: Técnicas de Rodaje Profesional", topics: ["Operación en equipo (Piloto + Operador de Cámara)", "Maniobras cinemáticas complejas (Reveals, Tracking, FPV)", "Sincronización con directores de fotografía (DoP)"] },
                { name: "Módulo 3: Gestión del Espacio Aéreo y Normativa", topics: ["Autorizaciones para vuelos en zonas pobladas y eventos", "Protocolos de seguridad en set de filmación y con actores", "Responsabilidad civil y seguros para equipos de alto valor"] },
                { name: "Módulo 4: Workflow y Post-producción Aérea", topics: ["Flujo de trabajo de datos y copias de seguridad en locación", "Corrección de color (Color Grading) básico", "Armado de un Reel/Portfolio profesional de alto impacto"] }
            ],
            bonus: ["Prácticas con equipos DJI Inspire y Mavic 3 Pro", "Certificación orientada a productoras y agencias", "Guía avanzada de post-producción"]
        },
        inspeccion: {
            title: "Inspección Industrial y Termografía",
            desc: "Servicios de alto valor añadido. Inspección de líneas eléctricas, torres y parques solares utilizando fotogrametría 3D, sensores térmicos y escáneres LiDAR.",
            viz: "card_inspeccion.png",
            status: "published",
            specs: ["Vuelo Autónomo", "Sensores Avanzados", "40 Días", "Industria 4.0 / Energía"],
            modules: [
                { name: "Módulo 1: Plataformas Enterprise y Cargas Útiles", topics: ["Drones industriales (Matrice 350 RTK, Mavic 3 Enterprise)", "Sistemas RTK para posicionamiento centimétrico", "Integración de cámaras térmicas, zoom y LiDAR"] },
                { name: "Módulo 2: Termografía Aérea Aplicada", topics: ["Principios de radiometría y emisividad", "Inspección de paneles solares (Hotspots) y líneas de tensión", "Generación de reportes técnicos termográficos"] },
                { name: "Módulo 3: Modelado 3D y Fotogrametría Industrial", topics: ["Planificación de vuelos autónomos de cuadrícula y fachada", "Procesamiento de nubes de puntos LiDAR vs Fotogrametría", "Cálculo de volúmenes (Acopios) y topografía de precisión"] },
                { name: "Módulo 4: Análisis de Datos y Seguridad", topics: ["Análisis de defectos con software especializado (DJI Terra)", "Seguridad en vuelo cerca de interferencias electromagnéticas", "Elaboración de entregables y gemelos digitales (Digital Twins)"] }
            ],
            bonus: ["Prácticas con cámara Térmica (Zenmuse/Enterprise)", "Licencia de software de fotogrametría temporal", "Modelo de negocio y tarifario industrial"]
        },
        seguridad: {
            title: "Seguridad, Búsqueda y Rescate (SAR)",
            desc: "Operaciones tácticas de emergencia. Monitoreo perimetral, vuelo nocturno, detección de firmas de calor y coordinación con centros de mando policiales/bomberos.",
            viz: "horus_hero.webp",
            status: "published",
            specs: ["Operación Nocturna", "Urgencias / SAR", "35 Días", "Fuerzas y Seguridad Privada"],
            modules: [
                { name: "Módulo 1: VANTs en Operaciones Tácticas", topics: ["Características de drones para vigilancia (Altavoces, Focos)", "Sistemas de vuelo cautivo (Tethered) para monitoreo 24/7", "Integración de video en tiempo real a centros de mando"] },
                { name: "Módulo 2: Vuelo Nocturno y Cámaras Térmicas", topics: ["Fisiología de la visión nocturna y desorientación espacial", "Lectura de paletas térmicas para detección humana", "Operación segura sin línea de vista diurna (VLOS nocturno)"] },
                { name: "Módulo 3: Búsqueda y Rescate (SAR)", topics: ["Patrones de búsqueda en cuadrícula y espiral", "Comunicaciones de emergencia y coordinación con rescatistas", "Protocolos de entrega de cargas salvavidas (Payload drop)"] },
                { name: "Módulo 4: Marco Legal y Manejo de Crisis", topics: ["Normativa ANAC para vuelos de emergencia estatal/privada", "Evaluación de riesgos dinámicos en zonas de desastre", "Simulacro de búsqueda con firma térmica en campo abierto"] }
            ],
            bonus: ["Instructores ex-fuerzas de seguridad y bomberos", "Simulacros nocturnos con cámaras térmicas reales", "Certificado de especialización táctica"]
        },
        agricola: {
            title: "Operación Agrícola y Forestal",
            desc: "Máxima rentabilidad rural. Fumigación de precisión, aplicación de sólidos y análisis de salud de cultivos (NDVI) con drones de gran porte.",
            viz: "course_agricola.webp",
            status: "published",
            specs: ["Carga Pesada (>25kg)", "Excepción Rural", "45 Días", "Agroindustria"],
            modules: [
                { name: "Módulo 1: Drones Agrícolas de Gran Porte", topics: ["Operación de serie DJI Agras y equivalentes", "Sistemas de pulverización, bombas y boquillas centrífugas", "Mantenimiento pesado y limpieza de circuitos químicos"] },
                { name: "Módulo 2: Agricultura de Precisión y Sensores", topics: ["Uso de cámaras multiespectrales para salud vegetal", "Cálculo de Índices de Vegetación (NDVI) y mapas de prescripción", "Planificación de vuelos para topografía rural"] },
                { name: "Módulo 3: Aplicación de Líquidos y Sólidos", topics: ["Calibración de caudal y ancho de gota (Deriva)", "Distribución de semillas y fertilizantes sólidos", "Generación de rutas automáticas esquivando obstáculos (Árboles/Postes)"] },
                { name: "Módulo 4: Seguridad y Normativa Rural", topics: ["Categoría Excepción Rural y segregación del espacio aéreo", "Manejo seguro de agroquímicos (EPP) y baterías gigantes", "Práctica real de fumigación con líquido inerte en campo"] }
            ],
            bonus: ["Drones agrícolas reales para prácticas de fumigación", "Módulo de análisis de imágenes con software agrícola", "Contactos con aplicadores y cooperativas rurales"]
        },
        alafija: {
            title: "Mapeo de Grandes Extensiones (Ala Fija)",
            desc: "Topografía masiva con VANTs de Ala Volante y VTOL. Aprende a mapear miles de hectáreas operando legalmente dentro de los límites visuales (VLOS) o preparando solicitudes BVLOS.",
            viz: "card_alafija.png",
            status: "published",
            specs: ["Fotogrametría Masiva", "Vuelo VLOS Extend.", "45 Días", "Topografía y Minería"],
            modules: [
                { name: "Módulo 1: Plataformas de Ala Fija y VTOL", topics: ["Aerodinámica de alas volantes vs multirrotores", "Transición de vuelo vertical a horizontal (VTOL)", "Gestión de baterías de alta capacidad y telemetría de largo alcance"] },
                { name: "Módulo 2: Planificación Fotogramétrica Masiva", topics: ["Solapes frontales y laterales para miles de hectáreas", "Puntos de control terrestre (GCP) y RTK/PPK", "Segmentación de planes de vuelo para mantenerse en VLOS"] },
                { name: "Módulo 3: Marco Regulatorio (VLOS a BVLOS)", topics: ["Operación VLOS estricta y uso de Observadores Visuales (EVOS)", "Límites de la Categoría Abierta para operaciones de largo alcance", "Estructura del Manual de Operaciones para solicitar Categoría Específica (BVLOS)"] },
                { name: "Módulo 4: Operación Práctica y Emergencias", topics: ["Despegue por catapulta o lanzamiento manual (Hand-launch)", "Protocolos de aterrizaje autónomo y recuperación por paracaídas", "Gestión de pérdida de enlace a gran distancia y programación de RTH inteligente"] }
            ],
            bonus: ["Práctica de planificación con software especializado", "Plantillas de Solicitud BVLOS para ANAC", "Simulador de Ala Fija avanzado"]
        }
    };

    const defaultSiteConfig = {
        hero: {
            pill: "Escuela Profesional de Drones &bull; Categoría Abierta ANAC &bull; Práctica Presencial",
            title: "Aprendé a Volar Drones de Forma <span class=\"gradient-text\">Profesional</span>.",
            tagline: "Formación integral para operar bajo la reglamentación ANAC 550/2025. Sin necesidad de experiencia previa ni equipos propios.",
            description: "Te capacitamos teórica y prácticamente bajo los lineamientos y exigencias de seguridad de la normativa ANAC para dominar drones de hasta 25 kg en la Categoría Abierta de bajo riesgo. Te proveemos todas las aeronaves escuela y simuladores terrestres para que aprendas desde cero y con seguridad.",
            trustBadges: [
                { id: "tb_1", icon: "award", title: "Instrucción de Calidad", sub: "Según Normas ANAC", visible: true, order: 1 },
                { id: "tb_2", icon: "shield-check", title: "Drones Provistos", sub: "Aeronaves escuela 100% incluidas", visible: true, order: 2 },
                { id: "tb_3", icon: "book-open", title: "Sin Saber Volar", sub: "Iniciás de cero, sin experiencia", visible: true, order: 3 },
                { id: "tb_4", icon: "user-check", title: "Instructores Expertos", sub: "Teoría y práctica de campo", visible: true, order: 4 }
            ],
            techTags: [
                { id: "tt_1", icon: "book-open", text: "Normativa ANAC", visible: true, order: 1 },
                { id: "tt_2", icon: "navigation", text: "Vuelo VLOS", visible: true, order: 2 },
                { id: "tt_3", icon: "wind", text: "Meteorología", visible: true, order: 3 },
                { id: "tt_4", icon: "settings", text: "Mantenimiento VANT", visible: true, order: 4 }
            ],
            ctaButtons: [
                { id: "cta_1", text: "Ver Planes de Estudio", href: "#courses", btnClass: "btn-primary", visible: true, order: 1 },
                { id: "cta_2", text: "Simular Examen Teórico", href: "#platform", btnClass: "btn-outline", visible: true, order: 2 }
            ],
            floatingBadges: [
                { id: "fb_1", icon: "shield-check", title: "Instrucción Avanzada", sub: "Basada en Reglas ANAC", positionClass: "badge-top-left", visible: true, order: 1 },
                { id: "fb_2", icon: "graduation-cap", title: "Categoría Abierta", sub: "Resolución 550/2025", positionClass: "badge-bottom-right", visible: true, order: 2 }
            ]
        },
        stats: {
            graduates: "500",
            hours: "1500",
            drones: "15",
            instructors: "10"
        },
        toggles: {
            showConsultant: true,
            showCourses: true,
            showPlatform: true,
            showStats: true
        },
        brand: {
            logoUrl: "",
            logoAlt: "Horus Dron — Escuela de Vuelo"
        },
        heroImages: {
            enabled: true,
            interval: 5,
            images: [
                "drone_school_hero.webp"
            ]
        }
    };

    const defaultPlans = [
        {
            id: "plan_inicial",
            name: "Microdrones Inicial",
            price: "Consultar valor",
            period: "15 días",
            note: "Financiación disponible",
            description: "Teoría & Práctica básica · 15 días",
            badge: "",
            featured: false,
            btnText: "Consultar",
            btnClass: "btn-outline",
            status: "published",
            visible: true,
            order: 1,
            features: [
                "Microdrones de escuela provistos",
                "4 módulos teóricos en línea",
                "Práctica presencial inicial",
                "Certificado digital de la academia"
            ]
        },
        {
            id: "plan_foto",
            name: "Fotografía & Filmación",
            price: "Consultar valor",
            period: "30 días",
            note: "Cuotas sin interés",
            description: "Curso Profesional · 30 días",
            badge: "⭐ Más elegido",
            featured: true,
            btnText: "Inscribirme",
            btnClass: "btn-primary",
            status: "published",
            visible: true,
            order: 2,
            features: [
                "Drones profesionales de práctica",
                "8 módulos teóricos y meteorología",
                "Práctica intensiva presencial",
                "Guía de registro VANT ante ANAC",
                "Simulador de examen ilimitado"
            ]
        },
        {
            id: "plan_agricola",
            name: "Operación Agrícola Rural",
            price: "Consultar valor",
            period: "45 días",
            note: "Planes corporativos y familiares",
            description: "Especialidad de Campo · 45 días",
            badge: "",
            featured: false,
            btnText: "Consultar",
            btnClass: "btn-outline",
            status: "published",
            visible: true,
            order: 3,
            features: [
                "Drones de gran porte incluidos",
                "Mapeo y planificación agrícola",
                "Prácticas reales de campo",
                "Normas de seguridad y fumigación"
            ]
        }
    ];

    let siteData = StorageService.getData(STORAGE_KEYS.SITE_CONFIG);
    if (!siteData) {
        siteData = JSON.parse(JSON.stringify(defaultSiteConfig));
        StorageService.saveData(STORAGE_KEYS.SITE_CONFIG, siteData);
    }
    if (!siteData.hero) siteData.hero = JSON.parse(JSON.stringify(defaultSiteConfig.hero));
    if (!siteData.hero.trustBadges) siteData.hero.trustBadges = JSON.parse(JSON.stringify(defaultSiteConfig.hero.trustBadges));
    if (!siteData.hero.techTags) siteData.hero.techTags = JSON.parse(JSON.stringify(defaultSiteConfig.hero.techTags));
    if (!siteData.hero.ctaButtons) siteData.hero.ctaButtons = JSON.parse(JSON.stringify(defaultSiteConfig.hero.ctaButtons));
    if (!siteData.hero.floatingBadges) siteData.hero.floatingBadges = JSON.parse(JSON.stringify(defaultSiteConfig.hero.floatingBadges));
    if (!siteData.brand) {
        siteData.brand = { logoUrl: "", logoAlt: "Horus Dron — Escuela de Vuelo" };
    }
    if (!siteData.heroImages || !Array.isArray(siteData.heroImages.images) || siteData.heroImages.images.length === 0) {
        siteData.heroImages = {
            enabled: true,
            interval: 5,
            images: ["drone_school_hero.webp"]
        };
    }
    if (!siteData.pricing || !Array.isArray(siteData.pricing) || siteData.pricing.length === 0) {
        siteData.pricing = JSON.parse(JSON.stringify(defaultPlans));
    }
    if (!siteData.enrollment) {
        siteData.enrollment = {
            title: "Iniciá tu Carrera",
            subtitle: "Completá el formulario para que la coordinación pedagógica analice tu perfil y te asigne un cupo de formación práctica presencial.",
            imageUrl: "section_enrollment.webp",
            btnText: "Enviar Solicitud de Inscripción",
            perks: [
                "Clases teóricas y prácticas provistas",
                "Drones de instrucción incluidos",
                "Acceso 24/7 al Campus Digital"
            ]
        };
    }
    if (!siteData.about) {
        siteData.about = {
            headerTitle: "¿Quiénes Somos?",
            headerSubtitle: "Especialistas en la formación de pilotos con base en la normativa y buenas prácticas aeronáuticas.",
            imageUrl: "section_nosotros.webp",
            mainTitle: "Formamos pilotos capacitados para volar con <span class=\"gradient-text\">seguridad.</span>",
            badgeText: "Formación Profesional basada en la Res. ANAC N° 550/2025",
            paragraphs: [
                "Horus Dron es una escuela especializada en la capacitación de pilotos de drones. Nos enfocamos exclusivamente en brindar una sólida enseñanza teórica y práctica basada en el marco regulatorio y los estándares de seguridad de la Categoría Abierta de la ANAC en Argentina.",
                "Nuestra propuesta académica elimina barreras de acceso: no requerimos que poseas conocimientos previos aeronáuticos ni que tengas un dron propio. Te proveemos todos los equipos necesarios para el aprendizaje."
            ],
            values: [
                { title: "Accesibilidad Total", desc: "No necesitas poseer drones ni tener experiencia previa. Aprendes con nuestras aeronaves escuela." },
                { title: "Metodología Pedagógica", desc: "Clases teóricas interactivas combinadas con prácticas intensivas en zonas de vuelo seguras." },
                { title: "Instructores Experimentados", desc: "Plan curricular diseñado e impartido por personal idóneo y con amplia experiencia en vuelo real." }
            ]
        };
    }
    if (!siteData.instructors || !Array.isArray(siteData.instructors) || siteData.instructors.length === 0) {
        siteData.instructors = [
            {
                id: "inst_1",
                name: "Ing. Roberto Salinas",
                role: "Director de Proyecto & Operaciones",
                description: "Coordinador general y piloto certificado por ANAC. 15 años de experiencia en gestión aeronáutica.",
                photo: "",
                status: "published",
                visible: true,
                order: 1
            },
            {
                id: "inst_2",
                name: "Lic. Martina Vélez",
                role: "Coordinadora Pedagógica",
                description: "Especialista en metodologías de enseñanza virtual y diseño curricular aeronáutico.",
                photo: "",
                status: "published",
                visible: true,
                order: 2
            },
            {
                id: "inst_3",
                name: "Tec. Diego Ramírez",
                role: "Instructor de Vuelo & Evaluador",
                description: "Instructor práctico homologado y encargado de la evaluación de pericia técnica de los alumnos.",
                photo: "",
                status: "published",
                visible: true,
                order: 3
            }
        ];
    }

    const defaultHeaderFooter = {
        brandName: "HORUS DRON",
        brandSub: "Escuela de Vuelo · Normativa ANAC",
        footerTitle: "HORUS DRON",
        footerSub: "Escuela Profesional de Vuelo de Drones",
        footerLegalNote: "Instrucción en base a Normativa ANAC",
        copyright: "© 2026 Horus Dron. Todos los derechos reservados.",
        navigation: [
            { id: "nav_1", label: "Inicio", href: "#home", isBtn: false, btnClass: "", visible: true, order: 1 },
            { id: "nav_2", label: "Cursos", href: "#courses", isBtn: false, btnClass: "", visible: true, order: 2 },
            { id: "nav_3", label: "Campus Digital", href: "#platform", isBtn: false, btnClass: "", visible: true, order: 3 },
            { id: "nav_4", label: "Nosotros", href: "#nosotros", isBtn: false, btnClass: "", visible: true, order: 4 },
            { id: "nav_5", label: "Inscribirse", href: "#enroll", isBtn: true, btnClass: "btn-primary", visible: true, order: 5 }
        ],
        socials: [
            { id: "soc_1", platform: "Instagram", icon: "instagram", url: "#", visible: true, order: 1 },
            { id: "soc_2", platform: "LinkedIn", icon: "linkedin", url: "#", visible: true, order: 2 },
            { id: "soc_3", platform: "YouTube", icon: "youtube", url: "#", visible: true, order: 3 }
        ],
        legalLinks: [
            { id: "leg_1", label: "Política de Privacidad", href: "#", visible: true, order: 1 },
            { id: "leg_2", label: "Términos y Condiciones", href: "#", visible: true, order: 2 }
        ]
    };

    if (!siteData.headerFooter) {
        siteData.headerFooter = JSON.parse(JSON.stringify(defaultHeaderFooter));
    }

    if (!siteData.coursesHeader) {
        siteData.coursesHeader = {
            title: "Programas de Formación",
            subtitle: "Cursos estructurados para operar de forma segura y profesional en la Categoría Abierta."
        };
    }
    if (!siteData.pricingHeader) {
        siteData.pricingHeader = {
            title: "Inversión en tu Formación",
            subtitle: "Precios claros y planes de financiación sin interés."
        };
    }
    if (!siteData.consultorBanner) {
        siteData.consultorBanner = {
            enabled: true,
            icon: "radar",
            title: "Consultor Inteligente de Vuelo",
            subtitle: "Diagnóstico en 1 min: Descubre tus riesgos legales (ANAC) y tu perfil de rentabilidad.",
            btnText: "Iniciar Diagnóstico"
        };
    }
    if (!siteData.stats || typeof siteData.stats !== 'object') {
        siteData.stats = {
            bgImage: "section_stats.webp",
            items: [
                { number: 500, suffix: "+", label: "Pilotos Egresados" },
                { number: 1200, suffix: "+", label: "Horas de Práctica" },
                { number: 100, suffix: "%", label: "Drones Provistos por Escuela" },
                { number: 15, suffix: "+", label: "Instructores Certificados" }
            ]
        };
    } else {
        if (!siteData.stats.bgImage) siteData.stats.bgImage = "section_stats.webp";
        if (!Array.isArray(siteData.stats.items) || siteData.stats.items.length === 0) {
            siteData.stats.items = [
                { number: siteData.stats.graduates || 500, suffix: "+", label: "Pilotos Egresados" },
                { number: siteData.stats.hours || 1200, suffix: "+", label: "Horas de Práctica" },
                { number: 100, suffix: "%", label: "Drones Provistos por Escuela" },
                { number: siteData.stats.instructors || 15, suffix: "+", label: "Instructores Certificados" }
            ];
        }
    }
    if (!siteData.campus) {
        siteData.campus = {
            enabled: true,
            title: "Campus Digital del Alumno",
            subtitle: "Herramientas interactivas y simuladores teóricos para el aprendizaje y práctica de vuelo.",
            imageUrl: "section_campus.webp",
            consoleTitle: "TERMINAL ACADÉMICA / SIMULADOR",
            calcTitle: "Calculadora VANT",
            calcDesc: "Ingresa el peso de tu dron (en gramos) para verificar su clasificación y los requisitos de la ANAC Argentina.",
            calcBtnText: "Clasificar Aeronave",
            geoTitle: "Verificador de Espacio Aéreo",
            geoDesc: "Evalúa si tu zona de práctica está fuera de las exclusiones de aeropuertos de la ANAC.",
            geoBtnText: "Consultar Espacio Aéreo",
            examTitle: "Examen de Competencia",
            examDesc: "Pon a prueba tus conocimientos sobre normativa ANAC, seguridad y meteorología en Categoría Abierta.",
            examBtnText: "Iniciar Simulador Examen"
        };
    }

    let courseData = StorageService.getData(STORAGE_KEYS.COURSES);
    // Forzar actualización si los cursos viejos están cacheados
    if (!courseData || !courseData.alafija) {
        courseData = JSON.parse(JSON.stringify(defaultCourses));
        StorageService.saveData(STORAGE_KEYS.COURSES, courseData);
    }

    const defaultContact = {
        email: "info@horusdron.com",
        phone: "+54 9 11 3659-2233",
        address: "Buenos Aires & Neuquén, Argentina",
        whatsapp: "5491136592233"
    };
    let contactData = StorageService.getData(STORAGE_KEYS.CONTACT, defaultContact);

    const defaultTestimonials = [
        {
            name: "Juan Pérez",
            role: "Piloto Inspecciones",
            quote: "Excelente curso, muy enfocado en la seguridad y en la práctica real. Los instructores tienen mucha paciencia y el contenido es de primera."
        },
        {
            name: "María Gómez",
            role: "Productora Audiovisual",
            quote: "Me sirvió muchísimo para empezar a ofrecer servicios con drones en eventos. Todo el marco legal quedó muy claro y pude tramitar mi licencia."
        }
    ];

    let testimonialsData = StorageService.getData(STORAGE_KEYS.TESTIMONIALS);
    if (!testimonialsData || testimonialsData.length === 0) {
        testimonialsData = JSON.parse(JSON.stringify(defaultTestimonials));
        StorageService.saveData(STORAGE_KEYS.TESTIMONIALS, testimonialsData);
    }

    // --- RENDERIZADO DEL CMS ---
    function renderHeroElements() {
        if (!siteData || !siteData.hero) siteData = JSON.parse(JSON.stringify(defaultSiteConfig));
        const hero = siteData.hero || defaultSiteConfig.hero;

        const titleEl = document.getElementById('hero-title-text');
        const pillEl = document.getElementById('hero-pill-text');
        const taglineEl = document.getElementById('hero-tagline-text');
        const descEl = document.getElementById('hero-desc-text');
        
        if (titleEl) titleEl.innerHTML = (hero.title && hero.title.trim() !== '') ? hero.title : defaultSiteConfig.hero.title;
        if (pillEl) pillEl.innerHTML = (hero.pill && hero.pill.trim() !== '') ? hero.pill : defaultSiteConfig.hero.pill;
        if (taglineEl) taglineEl.innerHTML = (hero.tagline && hero.tagline.trim() !== '') ? hero.tagline : defaultSiteConfig.hero.tagline;
        if (descEl) descEl.innerHTML = (hero.description && hero.description.trim() !== '') ? hero.description : defaultSiteConfig.hero.description;

        const trustContainer = document.getElementById('hero-trust-container');
        if (trustContainer) {
            let activeTrust = Array.isArray(hero.trustBadges) && hero.trustBadges.length > 0
                ? hero.trustBadges.filter(b => b.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0))
                : defaultSiteConfig.hero.trustBadges;

            if (activeTrust.length === 0) activeTrust = defaultSiteConfig.hero.trustBadges;

            trustContainer.innerHTML = activeTrust.map(b => `
                <div class="trust-badge">
                    <i data-lucide="${b.icon || 'shield-check'}"></i>
                    <div>
                        <span class="trust-label">${b.title || ''}</span>
                        <span class="trust-sub">${b.sub || ''}</span>
                    </div>
                </div>
            `).join('');
        }

        const techContainer = document.getElementById('hero-tech-container');
        if (techContainer) {
            let activeTech = Array.isArray(hero.techTags) && hero.techTags.length > 0
                ? hero.techTags.filter(t => t.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0))
                : defaultSiteConfig.hero.techTags;

            if (activeTech.length === 0) activeTech = defaultSiteConfig.hero.techTags;

            techContainer.innerHTML = activeTech.map(t => `
                <div class="tech-item">
                    <i data-lucide="${t.icon || 'check'}"></i>
                    <span>${t.text || ''}</span>
                </div>
            `).join('');
        }

        const btnsContainer = document.getElementById('hero-btns-container');
        if (btnsContainer) {
            let activeBtns = Array.isArray(hero.ctaButtons) && hero.ctaButtons.length > 0
                ? hero.ctaButtons.filter(b => b.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0))
                : defaultSiteConfig.hero.ctaButtons;

            if (activeBtns.length === 0) activeBtns = defaultSiteConfig.hero.ctaButtons;

            btnsContainer.innerHTML = activeBtns.map(b => `
                <a href="${b.href || '#'}" class="btn ${b.btnClass || 'btn-primary'}">${b.text || ''}</a>
            `).join('');
        }

        const floatContainer = document.getElementById('hero-floating-badges-container');
        if (floatContainer) {
            let activeFloat = Array.isArray(hero.floatingBadges) && hero.floatingBadges.length > 0
                ? hero.floatingBadges.filter(b => b.visible !== false).sort((a, b) => (a.order || 0) - (b.order || 0))
                : defaultSiteConfig.hero.floatingBadges;

            if (activeFloat.length === 0) activeFloat = defaultSiteConfig.hero.floatingBadges;

            floatContainer.innerHTML = activeFloat.map(b => `
                <div class="floating-badge ${b.positionClass || 'badge-top-left'} glass">
                    <i data-lucide="${b.icon || 'shield-check'}"></i>
                    <div>
                        <span style="font-size:0.75rem;font-weight:800;display:block">${b.title || ''}</span>
                        <span style="font-size:0.65rem;opacity:0.7">${b.sub || ''}</span>
                    </div>
                </div>
            `).join('');
        }
    }

    let heroRotationTimer = null;
    let currentHeroIdx = 0;

    function renderHeroImages() {
        if (heroRotationTimer) {
            clearInterval(heroRotationTimer);
            heroRotationTimer = null;
        }

        const bgWrapper = document.querySelector('.hero-bg-wrapper');
        if (!bgWrapper) return;

        if (!siteData.heroImages || !Array.isArray(siteData.heroImages.images) || siteData.heroImages.images.length === 0) {
            siteData.heroImages = {
                enabled: true,
                interval: 5,
                images: ["drone_school_hero.webp"]
            };
        }

        const validImages = siteData.heroImages.images.filter(img => img && typeof img === 'string' && img.trim() !== "");
        if (validImages.length === 0) {
            validImages.push("drone_school_hero.webp");
        }

        const isEnabled = siteData.heroImages.enabled !== false;
        const intervalSec = Math.max(1, parseInt(siteData.heroImages.interval) || 5);

        let imgA = bgWrapper.querySelector('.hero-bg-img-a');
        let imgB = bgWrapper.querySelector('.hero-bg-img-b');
        let overlay = bgWrapper.querySelector('.hero-bg-overlay');

        if (!imgA || !imgB || !overlay) {
            bgWrapper.innerHTML = '';

            imgA = document.createElement('img');
            imgA.className = 'hero-bg-img hero-bg-img-a';
            imgA.style.position = 'absolute';
            imgA.style.top = '0';
            imgA.style.right = '0';
            imgA.style.width = '80%';
            imgA.style.height = '100%';
            imgA.style.objectFit = 'cover';
            imgA.style.objectPosition = 'center right';
            imgA.style.transition = 'opacity 1s ease-in-out';
            imgA.style.opacity = '1';
            imgA.style.zIndex = '1';

            imgB = document.createElement('img');
            imgB.className = 'hero-bg-img hero-bg-img-b';
            imgB.style.position = 'absolute';
            imgB.style.top = '0';
            imgB.style.right = '0';
            imgB.style.width = '80%';
            imgB.style.height = '100%';
            imgB.style.objectFit = 'cover';
            imgB.style.objectPosition = 'center right';
            imgB.style.transition = 'opacity 1s ease-in-out';
            imgB.style.opacity = '0';
            imgB.style.zIndex = '1';

            overlay = document.createElement('div');
            overlay.className = 'hero-bg-overlay';
            overlay.style.zIndex = '2';

            bgWrapper.appendChild(imgA);
            bgWrapper.appendChild(imgB);
            bgWrapper.appendChild(overlay);
        }

        currentHeroIdx = 0;
        imgA.src = validImages[0];
        imgA.style.opacity = '1';
        imgB.style.opacity = '0';

        if (!isEnabled || validImages.length <= 1) {
            return;
        }

        let activeIsA = true;
        heroRotationTimer = setInterval(() => {
            currentHeroIdx = (currentHeroIdx + 1) % validImages.length;
            const nextSrc = validImages[currentHeroIdx];
            if (activeIsA) {
                imgB.src = nextSrc;
                imgB.style.opacity = '1';
                imgA.style.opacity = '0';
            } else {
                imgA.src = nextSrc;
                imgA.style.opacity = '1';
                imgB.style.opacity = '0';
            }
            activeIsA = !activeIsA;
        }, intervalSec * 1000);
    }

    function renderSite() {
        renderHeroImages();
        renderHeroElements();

        // Renderizado Banner Consultor Inteligente
        const bannerSection = document.getElementById('consultor-banner');
        if (bannerSection && siteData.consultorBanner) {
            const cb = siteData.consultorBanner;
            bannerSection.style.display = (cb.enabled !== false) ? '' : 'none';
            const titleEl = document.getElementById('consultor-title');
            const subEl = document.getElementById('consultor-subtitle');
            const btnEl = document.getElementById('consultor-btn');
            const iconEl = document.getElementById('consultor-icon');

            if (titleEl && cb.title) titleEl.textContent = cb.title;
            if (subEl && cb.subtitle) subEl.textContent = cb.subtitle;
            if (btnEl && cb.btnText) {
                btnEl.innerHTML = `${cb.btnText} <i data-lucide="chevron-right" style="width: 18px; height: 18px; display: inline-block; vertical-align: middle;"></i>`;
            }
            if (iconEl && cb.icon) {
                iconEl.setAttribute('data-lucide', cb.icon);
            }
        }

        // Renderizado Encabezado de Cursos
        const cTitleEl = document.getElementById('courses-header-title');
        const cSubEl = document.getElementById('courses-header-subtitle');
        if (siteData.coursesHeader) {
            if (cTitleEl && siteData.coursesHeader.title) cTitleEl.textContent = siteData.coursesHeader.title;
            if (cSubEl && siteData.coursesHeader.subtitle) cSubEl.textContent = siteData.coursesHeader.subtitle;
        }

        // Renderizado del Logotipo Institucional
        const logoAnchor = document.querySelector('.navbar .logo');
        if (logoAnchor) {
            let logoImg = logoAnchor.querySelector('.logo-brand-img');
            const iconEl = logoAnchor.querySelector('[data-lucide="shield-check"], svg');
            const logoUrl = siteData && siteData.brand && siteData.brand.logoUrl ? siteData.brand.logoUrl.trim() : '';
            const logoAlt = siteData && siteData.brand && siteData.brand.logoAlt ? siteData.brand.logoAlt.trim() : 'Horus Dron';

            if (logoUrl !== '') {
                if (iconEl) iconEl.style.display = 'none';
                if (!logoImg) {
                    logoImg = document.createElement('img');
                    logoImg.className = 'logo-brand-img';
                    logoImg.style.maxHeight = '36px';
                    logoImg.style.width = 'auto';
                    logoImg.style.marginRight = '10px';
                    logoImg.style.borderRadius = '6px';
                    logoAnchor.insertBefore(logoImg, logoAnchor.firstChild);
                }
                logoImg.src = logoUrl;
                logoImg.alt = logoAlt;
                logoImg.style.display = 'inline-block';
            } else {
                if (iconEl) iconEl.style.display = '';
                if (logoImg) logoImg.style.display = 'none';
            }
        }

        const coursesContainer = document.getElementById('dynamic-courses-container');
        if (coursesContainer) {
            coursesContainer.innerHTML = '';
            if (!courseData || typeof courseData !== 'object' || Object.keys(courseData).length === 0) {
                courseData = JSON.parse(JSON.stringify(defaultCourses));
                StorageService.saveData(STORAGE_KEYS.COURSES, courseData);
            }
            
            const iconMap = {
                microdrones: 'smartphone',
                audiovisual: 'film',
                inspeccion: 'factory',
                alafija: 'map',
                seguridad: 'shield',
                agricola: 'tractor'
            };
            
            let renderedCount = 0;
            Object.keys(courseData).forEach(key => {
                const c = courseData[key];
                let currentStatus = c.status;
                if (!currentStatus) {
                    currentStatus = c.visible === false ? 'draft' : 'published';
                }
                if (currentStatus !== 'published') return;
                renderedCount++;
                
                const icon = iconMap[key] || 'book';
                
                const card = document.createElement('div');
                card.className = 'course-card tilt-card glass open-modal';
                card.setAttribute('data-course', key);
                card.style.cursor = 'pointer';
                
                card.innerHTML = `
                    <div class="course-card-img"><img src="${c.viz}" alt="${c.title}" loading="lazy"></div>
                    <div class="card-icon">
                        <i data-lucide="${icon}"></i>
                    </div>
                    <h3>${c.title}</h3>
                    <p class="course-desc">${c.desc}</p>
                    <ul class="course-details">
                        ${(c.specs || []).slice(0, 3).map(spec => {
                            let specIcon = 'check-circle';
                            const lSpec = spec.toLowerCase();
                            if (lSpec.includes('día')) specIcon = 'calendar';
                            else if (lSpec.includes('vant') || lSpec.includes('peso') || lSpec.includes('<') || lSpec.includes('kg')) specIcon = 'package';
                            else if (lSpec.includes('certif') || lSpec.includes('foco')) specIcon = 'award';
                            else if (lSpec.includes('anac') || lSpec.includes('res.')) specIcon = 'shield-check';
                            return '<li><i data-lucide="' + specIcon + '" style="color:var(--accent-yellow)"></i> ' + spec + '</li>';
                        }).join('')}
                    </ul>
                `;
                coursesContainer.appendChild(card);
            });

            if (renderedCount === 0) {
                courseData = JSON.parse(JSON.stringify(defaultCourses));
                StorageService.saveData(STORAGE_KEYS.COURSES, courseData);
                Object.keys(defaultCourses).forEach(key => {
                    const c = defaultCourses[key];
                    const icon = iconMap[key] || 'book';
                    const card = document.createElement('div');
                    card.className = 'course-card tilt-card glass open-modal';
                    card.setAttribute('data-course', key);
                    card.style.cursor = 'pointer';
                    card.innerHTML = `
                        <div class="course-card-img"><img src="${c.viz}" alt="${c.title}" loading="lazy"></div>
                        <div class="card-icon">
                            <i data-lucide="${icon}"></i>
                        </div>
                        <h3>${c.title}</h3>
                        <p class="course-desc">${c.desc}</p>
                        <ul class="course-details">
                            ${(c.specs || []).slice(0, 3).map(spec => '<li><i data-lucide="check-circle" style="color:var(--accent-yellow)"></i> ' + spec + '</li>').join('')}
                        </ul>
                    `;
                    coursesContainer.appendChild(card);
                });
            }
            
            // Re-vincular eventos
            document.querySelectorAll('.open-modal').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const courseKey = e.currentTarget.getAttribute('data-course');
                    const modalBody = document.getElementById('modal-body');
                    if (courseData[courseKey] && modalBody) {
                        modalBody.innerHTML = buildModal(courseData[courseKey]);
                        lucide.createIcons();
                        document.getElementById('course-modal').classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                });
            });
        }
        
        const statsContainer = document.getElementById('dynamic-stats-container');
        const statsBgImg = document.getElementById('stats-bg-img');
        if (siteData.stats) {
            if (statsBgImg && siteData.stats.bgImage) statsBgImg.src = siteData.stats.bgImage;
            if (statsContainer && Array.isArray(siteData.stats.items)) {
                statsContainer.innerHTML = siteData.stats.items.map(st => `
                    <div class="stat-item" style="position: relative; z-index: 1;">
                        <span class="stat-number" data-target="${st.number}" data-suffix="${st.suffix || ''}">0${st.suffix || ''}</span>
                        <span class="stat-label">${st.label}</span>
                    </div>
                `).join('');

                statsContainer.querySelectorAll('.stat-number[data-target]').forEach(el => observerCounter.observe(el));
            }
        }
        
        // Renderizar Contacto
        const emailEl = document.getElementById('contact-email');
        if (emailEl) emailEl.innerHTML = `<i data-lucide="mail"></i> ${contactData.email}`;
        const phoneEl = document.getElementById('contact-phone');
        if (phoneEl) phoneEl.innerHTML = `<i data-lucide="phone"></i> ${contactData.phone}`;
        const addrEl = document.getElementById('contact-address');
        if (addrEl) addrEl.innerHTML = `<i data-lucide="map-pin"></i> ${contactData.address}`;

        // Renderizar Testimonios Públicos
        const pubTestimonials = document.getElementById('public-testimonials-list');
        if (pubTestimonials) {
            pubTestimonials.innerHTML = testimonialsData.map(t => `
                <div class="testimonial-card">
                    <i data-lucide="quote" style="width:30px;height:30px;color:rgba(251,215,4,0.2);position:absolute;top:20px;right:20px;"></i>
                    <p class="testimonial-quote">"${t.quote}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar"><i data-lucide="user"></i></div>
                        <div>
                            <h4 style="color:white;font-weight:700;font-size:1rem;margin:0;">${t.name}</h4>
                            <span style="color:var(--accent-yellow);font-size:0.85rem;">${t.role}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Renderizar Precios y Planes Dinámicos
        renderPricing();

        // Renderizar Sección de Inscripción Dinámica
        renderEnrollment();

        // Renderizar Nosotros y Equipo Dinámico
        renderAbout();

        // Renderizar Header, Navbar y Footer Dinámico
        renderHeaderFooter();

        // Renderizar Campus Digital
        renderCampus();

        // WhatsApp Floater and Links
        const waMessage = encodeURIComponent('Hola Horus Dron, me interesa obtener información sobre sus cursos de piloto de drones en Categoría Abierta.');
        document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.href = `https://wa.me/${contactData.whatsapp}?text=${waMessage}`;
        });

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    function renderHeaderFooter() {
        if (!siteData.headerFooter) {
            siteData.headerFooter = JSON.parse(JSON.stringify(defaultHeaderFooter));
        }

        const hf = siteData.headerFooter;

        // Navbar Brand Name & Subtitle
        const navNameEl = document.getElementById('nav-brand-name');
        const navSubEl = document.getElementById('nav-brand-sub');
        const navLogoIcon = document.getElementById('nav-logo-icon');

        if (navNameEl && (hf.brandName || siteData.brand?.name)) {
            navNameEl.textContent = hf.brandName || siteData.brand.name;
        }
        if (navSubEl && hf.brandSub) {
            navSubEl.textContent = hf.brandSub;
        }
        if (navLogoIcon && siteData.brand?.logoUrl) {
            navLogoIcon.innerHTML = `<img src="${siteData.brand.logoUrl}" alt="${siteData.brand.logoAlt || ''}" style="height:28px; object-fit:contain;">`;
        }

        // Navbar Links
        const navLinksContainer = document.getElementById('nav-dynamic-links');
        if (navLinksContainer && Array.isArray(hf.navigation)) {
            const activeNavItems = hf.navigation
                .filter(item => item.visible !== false)
                .sort((a, b) => (a.order || 0) - (b.order || 0));

            navLinksContainer.innerHTML = activeNavItems.map(item => {
                const btnClassStr = item.isBtn ? `class="btn ${item.btnClass || 'btn-primary'}"` : '';
                return `<li><a href="${item.href}" ${btnClassStr}>${item.label}</a></li>`;
            }).join('');
        }

        // Footer Info
        const footerNameEl = document.getElementById('footer-brand-name');
        const footerSubEl = document.getElementById('footer-brand-sub');
        const footerLegalNoteEl = document.getElementById('footer-legal-note');
        const copyrightEl = document.getElementById('footer-copyright-text');

        if (footerNameEl && hf.footerTitle) footerNameEl.textContent = hf.footerTitle;
        if (footerSubEl && hf.footerSub) footerSubEl.textContent = hf.footerSub;
        if (footerLegalNoteEl && hf.footerLegalNote) footerLegalNoteEl.textContent = hf.footerLegalNote;
        if (copyrightEl && hf.copyright) copyrightEl.innerHTML = hf.copyright;

        // Footer Social Links
        const socialContainer = document.getElementById('footer-dynamic-social');
        if (socialContainer && Array.isArray(hf.socials)) {
            const activeSocials = hf.socials
                .filter(item => item.visible !== false)
                .sort((a, b) => (a.order || 0) - (b.order || 0));

            socialContainer.innerHTML = activeSocials.map(item => `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.platform}">
                    <i data-lucide="${item.icon || 'link'}"></i>
                </a>
            `).join('');
        }

        // Footer Legal Links
        const legalContainer = document.getElementById('footer-dynamic-legal');
        if (legalContainer && Array.isArray(hf.legalLinks)) {
            const activeLegal = hf.legalLinks
                .filter(item => item.visible !== false)
                .sort((a, b) => (a.order || 0) - (b.order || 0));

            legalContainer.innerHTML = activeLegal.map(item => `
                <p><a href="${item.href}" style="color:var(--text-secondary);text-decoration:none">${item.label}</a></p>
            `).join('');
        }
    }

    function renderAbout() {
        if (!siteData.about) {
            siteData.about = {
                headerTitle: "¿Quiénes Somos?",
                headerSubtitle: "Especialistas en la formación de pilotos con base en la normativa y buenas prácticas aeronáuticas.",
                imageUrl: "section_nosotros.webp",
                mainTitle: "Formamos pilotos capacitados para volar con <span class=\"gradient-text\">seguridad.</span>",
                badgeText: "Formación Profesional basada en la Res. ANAC N° 550/2025",
                paragraphs: [
                    "Horus Dron es una escuela especializada en la capacitación de pilotos de drones. Nos enfocamos exclusivamente en brindar una sólida enseñanza teórica y práctica basada en el marco regulatorio y los estándares de seguridad de la Categoría Abierta de la ANAC en Argentina.",
                    "Nuestra propuesta académica elimina barreras de acceso: no requerimos que poseas conocimientos previos aeronáuticos ni que tengas un dron propio. Te proveemos todos los equipos necesarios para el aprendizaje."
                ],
                values: [
                    { title: "Accesibilidad Total", desc: "No necesitas poseer drones ni tener experiencia previa. Aprendes con nuestras aeronaves escuela." },
                    { title: "Metodología Pedagógica", desc: "Clases teóricas interactivas combinadas con prácticas intensivas en zonas de vuelo seguras." },
                    { title: "Instructores Experimentados", desc: "Plan curricular diseñado e impartido por personal idóneo y con amplia experiencia en vuelo real." }
                ]
            };
        }

        const hTitleEl = document.getElementById('about-header-title');
        const hSubEl = document.getElementById('about-header-subtitle');
        const imgEl = document.getElementById('about-img');
        const mainTitleEl = document.getElementById('about-main-title');
        const badgeEl = document.getElementById('about-badge');
        const paragraphsEl = document.getElementById('about-paragraphs');
        const valuesEl = document.getElementById('about-values');
        const teamContainer = document.getElementById('dynamic-team-container');

        if (hTitleEl && siteData.about.headerTitle) hTitleEl.innerHTML = siteData.about.headerTitle;
        if (hSubEl && siteData.about.headerSubtitle) hSubEl.textContent = siteData.about.headerSubtitle;
        if (imgEl && siteData.about.imageUrl) imgEl.src = siteData.about.imageUrl;
        if (mainTitleEl && siteData.about.mainTitle) mainTitleEl.innerHTML = siteData.about.mainTitle;
        if (badgeEl && siteData.about.badgeText) badgeEl.innerHTML = `<i data-lucide="shield-check"></i> ${siteData.about.badgeText}`;

        if (paragraphsEl && Array.isArray(siteData.about.paragraphs)) {
            paragraphsEl.innerHTML = siteData.about.paragraphs.map(p => `<p>${p}</p>`).join('');
        }

        if (valuesEl && Array.isArray(siteData.about.values)) {
            valuesEl.innerHTML = siteData.about.values.map(val => `
                <div class="value-item">
                    <h4>${val.title}</h4>
                    <p>${val.desc}</p>
                </div>
            `).join('');
        }

        if (teamContainer) {
            const activeInstructors = (siteData.instructors || [])
                .filter(ins => ins.visible !== false && ins.status === 'published')
                .sort((a, b) => (a.order || 0) - (b.order || 0));

            if (activeInstructors.length === 0) {
                teamContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--text-secondary); padding:20px 0;">No hay instructores publicados en este momento.</p>';
                return;
            }

            teamContainer.innerHTML = activeInstructors.map(ins => {
                const avatarContent = ins.photo && ins.photo.trim() !== ''
                    ? `<img src="${ins.photo}" alt="${ins.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
                    : `<i data-lucide="user"></i>`;

                return `
                    <div class="team-card glass reveal">
                        <div class="team-avatar">${avatarContent}</div>
                        <h4>${ins.name}</h4>
                        <span class="role">${ins.role}</span>
                        <p>${ins.description}</p>
                    </div>
                `;
            }).join('');
        }
    }

    function renderEnrollment() {
        if (!siteData.enrollment) {
            siteData.enrollment = {
                title: "Iniciá tu Carrera",
                subtitle: "Completá el formulario para que la coordinación pedagógica analice tu perfil y te asigne un cupo de formación práctica presencial.",
                imageUrl: "section_enrollment.webp",
                btnText: "Enviar Solicitud de Inscripción",
                perks: [
                    "Clases teóricas y prácticas provistas",
                    "Drones de instrucción incluidos",
                    "Acceso 24/7 al Campus Digital"
                ]
            };
        }

        const titleEl = document.querySelector('#enroll .enroll-info h2');
        const descEl = document.querySelector('#enroll .enroll-info > p');
        const imgEl = document.querySelector('#enroll .enroll-info img');
        const perksEl = document.querySelector('#enroll .enroll-perks');
        const submitBtn = document.querySelector('#enroll-form button[type="submit"]');

        if (titleEl && siteData.enrollment.title) titleEl.innerHTML = siteData.enrollment.title;
        if (descEl && siteData.enrollment.subtitle) descEl.textContent = siteData.enrollment.subtitle;
        if (imgEl && siteData.enrollment.imageUrl) imgEl.src = siteData.enrollment.imageUrl;
        if (submitBtn && siteData.enrollment.btnText) submitBtn.textContent = siteData.enrollment.btnText;

        if (perksEl && Array.isArray(siteData.enrollment.perks)) {
            perksEl.innerHTML = siteData.enrollment.perks.map(perk => `
                <li><i data-lucide="check-circle"></i> ${perk}</li>
            `).join('');
        }

        // Poblar selector de cursos publicados exclusivamente
        const courseSelect = document.getElementById('enroll-course');
        if (courseSelect && typeof courseData === 'object' && courseData !== null) {
            const currentSelected = courseSelect.value;
            const publishedCourses = Object.keys(courseData)
                .filter(key => {
                    const c = courseData[key];
                    return c && (c.status === 'published' || (c.status === undefined && c.visible !== false));
                })
                .map(key => ({
                    key: key,
                    title: courseData[key].title || key
                }));

            courseSelect.innerHTML = '<option value="" disabled selected>Selecciona tu Curso</option>' +
                publishedCourses.map(c => `<option value="${c.key}">${c.title}</option>`).join('');

            if (currentSelected && publishedCourses.some(c => c.key === currentSelected)) {
                courseSelect.value = currentSelected;
            }
        }
    }

    function renderPricing() {
        const container = document.getElementById('dynamic-pricing-container') || document.querySelector('.pricing-grid');
        if (!container) return;

        // Renderizado Encabezado de Precios
        const pTitleEl = document.getElementById('pricing-header-title');
        const pSubEl = document.getElementById('pricing-header-subtitle');
        if (siteData.pricingHeader) {
            if (pTitleEl && siteData.pricingHeader.title) pTitleEl.textContent = siteData.pricingHeader.title;
            if (pSubEl && siteData.pricingHeader.subtitle) pSubEl.textContent = siteData.pricingHeader.subtitle;
        }

        if (!siteData.pricing || !Array.isArray(siteData.pricing) || siteData.pricing.length === 0) {
            siteData.pricing = JSON.parse(JSON.stringify(defaultPlans));
        }

        let activePlans = siteData.pricing
            .filter(p => p.visible !== false && p.status === 'published')
            .sort((a, b) => (a.order || 0) - (b.order || 0));

        if (activePlans.length === 0) {
            siteData.pricing = JSON.parse(JSON.stringify(defaultPlans));
            activePlans = siteData.pricing;
        }

        container.innerHTML = activePlans.map(plan => {
            const isFeatured = plan.featured || (plan.badge && plan.badge.trim() !== '');
            const badgeHTML = plan.badge && plan.badge.trim() !== '' ? `<div class="pricing-badge">${plan.badge}</div>` : '';
            const btnClass = plan.featured || plan.btnClass === 'btn-primary' ? 'btn btn-primary' : 'btn btn-outline';
            const btnText = plan.btnText || 'Consultar';
            const noteHTML = plan.note ? `<div class="pricing-note">${plan.note}</div>` : '';
            const descHTML = plan.description ? `<p class="pricing-desc">${plan.description}</p>` : '';
            
            const featuresHTML = Array.isArray(plan.features) ? plan.features.map(f => `<li><i data-lucide="check"></i> ${f}</li>`).join('') : '';

            return `
                <div class="pricing-card glass ${isFeatured ? 'featured' : ''} reveal">
                    ${badgeHTML}
                    <h3>${plan.name}</h3>
                    ${descHTML}
                    <div class="pricing-price">${plan.price}</div>
                    ${noteHTML}
                    <ul class="pricing-features">
                        ${featuresHTML}
                    </ul>
                    <a href="#enroll" class="${btnClass}" style="display:block;text-align:center">${btnText}</a>
                </div>
            `;
        }).join('');
    }
    
    function renderCampus() {
        const campusSec = document.getElementById('platform');
        if (!campusSec) return;
        const c = siteData.campus || {
            enabled: true,
            title: "Campus Digital del Alumno",
            subtitle: "Herramientas interactivas y simuladores teóricos para el aprendizaje y práctica de vuelo.",
            imageUrl: "section_campus.webp",
            consoleTitle: "TERMINAL ACADÉMICA / SIMULADOR",
            calcTitle: "Calculadora VANT",
            calcDesc: "Ingresa el peso de tu dron (en gramos) para verificar su clasificación y los requisitos de la ANAC Argentina.",
            calcBtnText: "Clasificar Aeronave",
            geoTitle: "Verificador de Espacio Aéreo",
            geoDesc: "Evalúa si tu zona de práctica está fuera de las exclusiones de aeropuertos de la ANAC.",
            geoBtnText: "Consultar Espacio Aéreo",
            examTitle: "Examen de Competencia",
            examDesc: "Pon a prueba tus conocimientos sobre normativa ANAC, seguridad y meteorología en Categoría Abierta.",
            examBtnText: "Iniciar Simulador Examen"
        };
        campusSec.style.display = (c.enabled !== false) ? '' : 'none';

        const titleEl = document.getElementById('campus-header-title');
        const subEl = document.getElementById('campus-header-subtitle');
        const imgEl = document.getElementById('campus-header-img');
        const consoleTitleEl = document.getElementById('console-title-text');

        if (titleEl && c.title) titleEl.textContent = c.title;
        if (subEl && c.subtitle) subEl.textContent = c.subtitle;
        if (imgEl && c.imageUrl) imgEl.src = c.imageUrl;
        if (consoleTitleEl && c.consoleTitle) consoleTitleEl.textContent = c.consoleTitle;

        // Calculadora Card
        const calcTitleEl = document.getElementById('calc-card-title');
        const calcDescEl = document.getElementById('calc-card-desc');
        const calcBtnEl = document.getElementById('calc-btn-text');
        if (calcTitleEl && c.calcTitle) calcTitleEl.textContent = c.calcTitle;
        if (calcDescEl && c.calcDesc) calcDescEl.textContent = c.calcDesc;
        if (calcBtnEl && c.calcBtnText) {
            calcBtnEl.innerHTML = `<i data-lucide="help-circle"></i> ${c.calcBtnText}`;
        }

        // Verificador Geo Card
        const geoTitleEl = document.getElementById('geo-card-title');
        const geoDescEl = document.getElementById('geo-card-desc');
        const geoBtnEl = document.getElementById('geo-btn-text');
        if (geoTitleEl && c.geoTitle) geoTitleEl.textContent = c.geoTitle;
        if (geoDescEl && c.geoDesc) geoDescEl.textContent = c.geoDesc;
        if (geoBtnEl && c.geoBtnText) {
            geoBtnEl.innerHTML = `<i data-lucide="globe"></i> ${c.geoBtnText}`;
        }

        // Examen Card
        const examTitleEl = document.getElementById('exam-card-title');
        const examDescEl = document.getElementById('exam-card-desc');
        const examBtnEl = document.getElementById('btn-start-exam');
        if (examTitleEl && c.examTitle) examTitleEl.textContent = c.examTitle;
        if (examDescEl && c.examDesc) examDescEl.textContent = c.examDesc;
        if (examBtnEl && c.examBtnText) {
            examBtnEl.innerHTML = `<i data-lucide="play-circle"></i> ${c.examBtnText}`;
        }
    }
    
    // Llamar inicial
    renderSite();

    function buildModal(data) {
        return `
        <div class="modal-header">
            <h2 class="gradient-text">${data.title}</h2>
            <button class="close-modal" aria-label="Cerrar modal"><i data-lucide="x"></i></button>
        </div>
        <div class="modal-grid">
            <aside class="modal-sidebar">
                <div class="modal-viz-container">
                    <img src="${data.viz}" alt="Visualización técnica del drone" class="modal-viz-img" loading="lazy">
                </div>
                <div class="specs-grid">
                    ${data.specs.map(s => `<div class="spec-tag glass" style="color:var(--accent-yellow); border:1px solid rgba(251,215,4,0.3); background:rgba(251,215,4,0.05);">${s}</div>`).join('')}
                </div>
                <div class="modal-info-box glass">
                    <h4>Resumen del Programa</h4>
                    <p>Capacitación técnica de alto nivel con certificación oficial habilitante para operaciones críticas.</p>
                </div>
                <a href="#enroll" class="btn btn-primary modal-enroll-cta" onclick="document.getElementById('course-modal').classList.remove('active')">
                    <i data-lucide="send"></i> Solicitar Inscripción
                </a>
            </aside>
            <main class="modal-main">
                <div class="module-list">
                    ${data.modules.map(mod => `
                        <div class="module-item">
                            <h4>${mod.name}</h4>
                            <ul>${mod.topics.map(t => `<li>${t}</li>`).join('')}</ul>
                        </div>
                    `).join('')}
                </div>
                ${data.bonus ? `
                <div class="bonus-section">
                    <h4>Valor Añadido Horus</h4>
                    <ul>
                        ${data.bonus.map(b => `<li><i data-lucide="plus-circle"></i> ${b}</li>`).join('')}
                    </ul>
                </div>` : ''}
                <div style="margin-top: 30px; text-align:right; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
                    <button class="btn btn-outline close-modal" aria-label="Volver atrás">
                        <i data-lucide="arrow-left"></i> Volver a los Cursos
                    </button>
                </div>
            </main>
        </div>`;
    }

    // Accesibilidad: Control de Foco (Focus Trap)
    function setupFocusTrap(modalEl) {
        const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableElements = modalEl.querySelectorAll(focusableSelectors);
        if (focusableElements.length === 0) return;
        
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        setTimeout(() => firstFocusable.focus(), 150);
        
        // Remover listener previo si existiese para evitar pilas redundantes
        if (modalEl._focusTrapListener) {
            modalEl.removeEventListener('keydown', modalEl._focusTrapListener);
        }

        modalEl._focusTrapListener = function(e) {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        };

        modalEl.addEventListener('keydown', modalEl._focusTrapListener);
    }

    // Delegación limpia para cerrar modales y prevenir fugas de memoria
    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close-modal') || e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // Inyección de cursos
    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const data = courseData[btn.getAttribute('data-course')];
            if (data) {
                modalContainer.innerHTML = buildModal(data);
                modal.classList.add('active');
                lucide.createIcons();
                setupFocusTrap(modal);
            }
        });
    });

    // Asistente Interactivo Quiz
    const openQuizCard = document.getElementById('course-quiz-card');
    if (openQuizCard) {
        openQuizCard.addEventListener('click', () => {
            renderQuiz();
        });
    }

    function renderQuiz() {
        modalContainer.innerHTML = `
        <div class="modal-header">
            <h2 class="gradient-text"><i data-lucide="help-circle"></i> Asistente de Operaciones ANAC 2026</h2>
            <button class="close-modal" aria-label="Cerrar modal"><i data-lucide="x"></i></button>
        </div>
        <div class="quiz-split-layout">
            <div class="quiz-sidebar">
                <div class="quiz-sidebar-title">Tu progreso</div>
                <div class="stepper-tree" id="quiz-stepper-tree">
                    <!-- Stepper nodes -->
                </div>
            </div>
            <div class="quiz-main-area">
                <div id="quiz-step-container" style="max-width: 600px; width:100%; margin: 0 auto;">
                    <!-- Pasos del Cuestionario -->
                </div>
            </div>
        </div>`;
        lucide.createIcons();
        modal.classList.add('active');
        
        let currentStep = 1;
        const answers = {};

        const steps = {
            1: {
                question: "1. ¿Cuál es el propósito principal de tus vuelos?",
                options: [
                    { value: "recreativo", label: "Recreativo y Deportes", desc: "Hobby, viajes, carreras de drones o volar por diversión" },
                    { value: "audiovisual", label: "Fotografía y Eventos Sociales", desc: "Bodas, cine, publicidad, creación de contenido" },
                    { value: "industrial", label: "Inspección y Mapeo Industrial", desc: "Agro, construcción, topografía, bienes raíces" },
                    { value: "seguridad", label: "Seguridad y Rescate", desc: "Vigilancia, monitoreo, búsqueda y salvamento" }
                ]
            },
            2: {
                question: "2. ¿Cuál es el peso de tu aeronave (Masa Máxima al Despegue)?",
                options: [
                    { value: "mini", label: "Menos de 250 gramos (ej: DJI Mini Series)", desc: "Drones recreativos ultralivianos desregulados" },
                    { value: "medium", label: "Entre 250 g y 25 kg (ej: DJI Mavic, Inspire, Air)", desc: "Drones estándar de fotografía o filmación aérea" },
                    { value: "large", label: "Más de 25 kg (ej: DJI Agras, drones de fumigación)", desc: "Equipos agrícolas o de gran porte" }
                ]
            },
            3: {
                question: "3. ¿Mantendrás contacto visual directo (VLOS) con el dron durante el vuelo?",
                options: [
                    { value: "yes", label: "Sí, siempre a la vista directa", desc: "El piloto u observador vigila la aeronave a ojo desnudo" },
                    { value: "no", label: "No, volaré más allá de la vista (BVLOS)", desc: "Vuelo guiado únicamente por pantalla o FPV a larga distancia" }
                ]
            },
            4: {
                question: "4. ¿En qué entorno geográfico se realizará la operación?",
                options: [
                    { value: "rural", label: "Zona Rural o Despoblada", desc: "Campos abiertos, chacras, zonas sin aglomeraciones de personas" },
                    { value: "urban", label: "Zona Urbana, Poblada o con Personas Ajenas", desc: "Ciudades, barrios residenciales, eventos o filmaciones de obras" }
                ]
            },
            5: {
                question: "5. ¿Cuál será la altura máxima del vuelo sobre el terreno?",
                options: [
                    { value: "low", label: "Hasta 122 metros (400 pies)", desc: "El límite estándar de seguridad de la ANAC" },
                    { value: "high", label: "Más de 122 metros de altura", desc: "Requiere coordinación de espacio aéreo y segregación" }
                ]
            }
        };

        function updateStepper(currentStepNum) {
            const treeContainer = document.getElementById('quiz-stepper-tree');
            if (!treeContainer) return;
            
            let treeHTML = '';
            for (let i = 1; i <= 5; i++) {
                let statusClass = '';
                let clickable = false;
                if (i < currentStepNum || (currentStepNum === 6 && i <= 5)) {
                    statusClass = 'completed';
                    clickable = true;
                } else if (i === currentStepNum) {
                    statusClass = 'active';
                }
                
                let valHTML = '';
                if (answers[i]) {
                    const opt = steps[i].options.find(o => o.value === answers[i]);
                    if (opt) {
                        valHTML = `<div class="stepper-value">${opt.label.split(' (')[0]}</div>`;
                    }
                }
                
                treeHTML += `
                    <div class="stepper-node ${statusClass} ${clickable ? 'clickable-node' : ''}" data-step="${i}" ${clickable ? 'style="cursor:pointer;" title="Volver al Paso '+i+'"' : ''}>
                        <div class="stepper-dot"></div>
                        <div class="stepper-label">Paso ${i}</div>
                        ${valHTML}
                    </div>
                `;
            }
            treeContainer.innerHTML = treeHTML;

            treeContainer.querySelectorAll('.clickable-node').forEach(node => {
                node.addEventListener('click', () => {
                    const stepToLoad = parseInt(node.getAttribute('data-step'));
                    for (let j = stepToLoad; j <= 5; j++) delete answers[j];
                    showStep(stepToLoad);
                });
            });
        }

        function showStep(stepNum) {
            updateStepper(stepNum);
            const step = steps[stepNum];
            const stepContainer = document.getElementById('quiz-step-container');
            if (!stepContainer) return;
            
            stepContainer.innerHTML = `
                <div style="margin-bottom: 20px; text-align:center;">
                    <span style="background:rgba(251,215,4,0.1); border: 1px solid var(--glass-border); padding: 4px 12px; border-radius:12px; font-size:0.75rem; color:var(--accent-yellow); font-weight:800; text-transform:uppercase;">Paso ${stepNum} de 5</span>
                </div>
                <h3 style="font-size: 1.4rem; margin-bottom: 25px; text-align:center; line-height:1.3;">${step.question}</h3>
                <div style="display:flex; flex-direction:column; gap:15px; margin-bottom: 30px;">
                    ${step.options.map(opt => `
                        <button class="quiz-opt-btn glass" data-val="${opt.value}" style="text-align:left; padding:20px; border-radius:12px; cursor:pointer; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.02); color:white; transition:all 0.3s ease; width:100%;">
                            <strong style="display:block; font-size:1.15rem; color:white; margin-bottom:6px;">${opt.label}</strong>
                            <span style="font-size:1rem; color:var(--text-secondary); line-height:1.4; display:block;">${opt.desc}</span>
                        </button>
                    `).join('')}
                </div>
                ${stepNum > 1 ? `
                <div style="text-align:center; margin-top: 10px;">
                    <button class="quiz-back-btn" style="background:transparent; border:none; color:var(--text-secondary); font-size:0.95rem; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:color 0.3s ease; padding: 10px;">
                        <i data-lucide="arrow-left" style="width:16px; height:16px;"></i> Volver al paso anterior
                    </button>
                </div>
                ` : ''}
            `;
            
            stepContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    answers[stepNum] = btn.getAttribute('data-val');
                    if (stepNum < 5) {
                        showStep(stepNum + 1);
                    } else {
                        showResults();
                    }
                });
            });

            const backBtn = stepContainer.querySelector('.quiz-back-btn');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    showStep(stepNum - 1);
                });
            }
        }

        function showResults() {
            const stepContainer = document.getElementById('quiz-step-container');
            if (!stepContainer) return;

            const purpose = answers[1];
            const w = answers[2]; // mini, medium, large
            const vlos = answers[3]; // yes, no
            const env = answers[4]; // rural, urban
            const height = answers[5]; // low, high

            let purposeContext = "";
            if (purpose === 'recreativo') purposeContext = "Volar por diversión es excelente, pero el espacio aéreo compartido no distingue entre hobbies y trabajos comerciales. ";
            if (purpose === 'audiovisual') purposeContext = "La creación audiovisual es un mercado masivo, y la calidad de tus tomas depende de tu fluidez y seguridad. ";
            if (purpose === 'industrial') purposeContext = "Las inspecciones y el mapeo exigen una precisión técnica absoluta, donde un error cuesta miles de dólares. ";
            if (purpose === 'seguridad') purposeContext = "En misiones de seguridad o búsqueda, no hay margen de error. Necesitas protocolos de vuelo infalibles. ";

            let resultTitle = "";
            let explanation = "";
            let recommendedCourse = "";
            let recommendedCourseName = "";
            let requirements = [];

            // Ruta: Fuera de Categoría Abierta (Prohibido/Específica)
            if (vlos === 'no' || height === 'high' || (w === 'large' && env !== 'rural')) {
                resultTitle = "Operación Compleja: Requiere Adaptación Estratégica";
                explanation = purposeContext + "Tus parámetros actuales (como volar fuera de vista o drones pesados en ciudad) exigen certificaciones 'Específicas' extremadamente costosas, trámites lentos ante la ANAC y seguros millonarios.<br><br><strong>La Oportunidad Profesional:</strong> El mercado exige agilidad. En nuestra escuela, te enseñaremos cómo <strong>reformular tus misiones operativas</strong> para encajar de manera inteligente y legal dentro de la Categoría Abierta. Aprenderás a ofrecer servicios a tus clientes esquivando la burocracia sin perder rentabilidad.";
                requirements = [
                    "Aprender a segmentar misiones para mantener el vuelo VLOS.",
                    "Planificar altitudes por debajo de los 122m sin perder perspectiva fotográfica o de datos.",
                    "Aprovechar la Categoría Abierta para facturar rápido y legal."
                ];
                
                if (purpose === 'seguridad') { recommendedCourse = 'seguridad'; recommendedCourseName = 'Seguridad, Búsqueda y Rescate (SAR)'; }
                else if (purpose === 'industrial') { recommendedCourse = 'inspeccion'; recommendedCourseName = 'Inspección Industrial y Termografía'; }
                else if (w === 'large') { recommendedCourse = 'agricola'; recommendedCourseName = 'Operación Agrícola y Forestal'; }
                else { recommendedCourse = 'audiovisual'; recommendedCourseName = 'Cine y Producción Audiovisual'; }
            }
            // Ruta: Agrícola y Pesado en Zona Rural
            else if (w === 'large' && env === 'rural') {
                resultTitle = "Operación Agrícola: Máxima Rentabilidad Rural";
                explanation = purposeContext + "Estás operando la excepción normativa más delicada e importante. Pilotar drones de más de 25kg en el campo no requiere licencias engorrosas, pero la seguridad estructural y logística es crítica.<br><br><strong>La Oportunidad Profesional:</strong> El sector agroindustrial es el mercado más lucrativo para los VANT. Dominar la planificación autónoma, la fotogrametría y la fumigación te posiciona como un proveedor de servicios indispensable para el agro, garantizando un retorno de inversión altísimo para tus equipos pesados.";
                requirements = [
                    "Gestión de riesgos y mantenimiento preventivo de equipos pesados.",
                    "Software de mapeo, índices verdes y planificación de fumigación.",
                    "Protocolos de exclusión de zonas operativas rurales."
                ];
                recommendedCourse = 'agricola';
                recommendedCourseName = 'Operación Agrícola y Forestal';
            }
            // Rutas para Drones Medianos / Microdrones
            else {
                if (purpose === 'seguridad') {
                    resultTitle = "Operación Táctica: Vuelo de Emergencia y SAR";
                    explanation = purposeContext + "Al operar en tareas de vigilancia o búsqueda, las reglas de la Categoría Abierta te aplican igual, pero la urgencia de la misión te obliga a tener una destreza técnica superior.<br><br><strong>La Oportunidad Profesional:</strong> Las fuerzas de seguridad, bomberos y empresas de vigilancia privada están integrando VANTs aceleradamente. Capacitarte en cámaras térmicas, vuelos nocturnos y coordinación de equipos te convertirá en un especialista altamente demandado para salvar vidas y proteger activos.";
                    requirements = [
                        "Dominio de cámaras térmicas e identificación de firmas de calor.",
                        "Coordinación de protocolos de emergencia y comunicación (SAR).",
                        "Técnicas de vuelo nocturno y mitigación de riesgos operativos."
                    ];
                    recommendedCourse = 'seguridad';
                    recommendedCourseName = 'Seguridad, Búsqueda y Rescate (SAR)';
                } else if (purpose === 'industrial') {
                    if (env === 'rural') {
                        resultTitle = "Mapeo Masivo: Fotogrametría de Grandes Extensiones";
                        explanation = purposeContext + "Al operar en zonas despobladas, la normativa te favorece, pero la extensión del terreno requiere optimizar la autonomía. Operar multirrotores para miles de hectáreas es sumamente ineficiente.<br><br><strong>La Oportunidad Profesional:</strong> El mercado de la topografía, minería y corredores viales exige VANTs de Ala Fija o VTOL. Capacitarte en estos equipos te permitirá mapear extensiones masivas por día, multiplicando tu rentabilidad operativa, mientras te preparas documentalmente para el salto a operaciones BVLOS.";
                        requirements = [
                            "Planificación de solapes y telemetría de largo alcance.",
                            "Gestión documental para justificar vuelo VLOS extendido.",
                            "Técnicas de despegue y aterrizaje autónomo avanzado."
                        ];
                        recommendedCourse = 'alafija';
                        recommendedCourseName = 'Mapeo de Grandes Extensiones (Ala Fija)';
                    } else {
                        resultTitle = "Inspección Industrial: Alta Precisión y Datos Técnicos";
                        explanation = purposeContext + "Estás apuntando al nicho más técnico. El vuelo es solo el 20% del trabajo; el 80% es la captura y procesamiento preciso de datos. Al mantenerte en la Categoría Abierta, tus costos bajan dramáticamente.<br><br><strong>La Oportunidad Profesional:</strong> La Industria 4.0 necesita modelados 3D, inspección de paneles solares y torres de telecomunicaciones. Aprender a dominar sensores LiDAR, termografía y Docks autónomos te permite cobrar tarifas corporativas, alejándote del mercado saturado de consumo.";
                        requirements = [
                            "Planificación de vuelos autónomos para levantamiento de datos.",
                            "Análisis térmico y fotogramétrico con software especializado.",
                            "Generación de reportes técnicos entregables para el cliente."
                        ];
                        recommendedCourse = 'inspeccion';
                        recommendedCourseName = 'Inspección Industrial y Termografía';
                    }
                } else if (purpose === 'audiovisual' && w !== 'mini') {
                    resultTitle = "Producción Audiovisual: Cine y Publicidad";
                    explanation = purposeContext + "Tus operaciones cumplen las reglas de la Categoría Abierta, lo que te ahorra años de trámites. Sin embargo, al superar los 250 gramos, estás bajo el radar estricto de la ANAC; el desconocimiento del espacio aéreo conlleva multas severas.<br><br><strong>La Oportunidad Profesional:</strong> Productoras de cine, TV y agencias de publicidad buscan pilotos certificados. Con nuestra capacitación, dominarás técnicas cinemáticas complejas, perfiles de color (D-Log) y vuelo con doble operador, abriéndote las puertas para facturar en producciones de primer nivel.";
                    requirements = [
                        "Registro del drone y comprensión avanzada de espacios aéreos.",
                        "Dominio de maniobras cinemáticas fluidas en set de rodaje.",
                        "Flujo de trabajo de datos y perfiles de color profesionales."
                    ];
                    recommendedCourse = 'audiovisual';
                    recommendedCourseName = 'Cine y Producción Audiovisual';
                } else {
                    // Default to Microdrones
                    resultTitle = "Microdrones: El Negocio Ágil Urbano";
                    explanation = purposeContext + "Al usar un equipo ultraligero, tu principal escenario de vuelo serán las zonas urbanas densas, donde eres responsable civil y penalmente por cualquier daño a terceros. Operar en la ciudad sin formación profesional es un riesgo altísimo; los sensores anti-colisión no evitan interferencias electromagnéticas ni ráfagas de viento entre edificios.<br><br><strong>La Oportunidad Profesional:</strong> Un microdron es tu puerta de entrada al lucrativo mercado del Real Estate (Bienes Raíces), redes sociales y marketing digital. Al capacitarte formalmente, blindarás tus operaciones legalmente y aprenderás a exprimir la cámara de tu equipo, cobrando por servicios ágiles en plena ciudad.";
                    requirements = [
                        "Configuración de cámara y encuadres en espacios urbanos reducidos.",
                        "Análisis de interferencia de señal en ciudades densas.",
                        "Responsabilidad civil y fotogrametría rápida inmobiliaria."
                    ];
                    recommendedCourse = 'microdrones';
                    recommendedCourseName = 'Microdrones y Operación Urbana (Sub-250g)';
                }
            }

            updateStepper(6);

            stepContainer.innerHTML = `
                <div style="text-align:center; margin-bottom:25px;">
                    <i data-lucide="trending-up" style="width:48px; height:48px; color:var(--accent-yellow); margin-bottom:10px;"></i>
                    <h3 style="font-size: 1.7rem; color:var(--accent-yellow); margin-bottom:12px;">Diagnóstico de Oportunidad</h3>
                    <p style="font-size: 1.25rem; font-weight:800; color:white; background:rgba(255,255,255,0.05); padding:16px; border-radius:8px; border:1px solid var(--glass-border); line-height: 1.4;">${resultTitle}</p>
                </div>
                <p style="font-size: 1.1rem; color:var(--text-secondary); margin-bottom:25px; line-height:1.7; text-align:left;">${explanation}</p>
                
                <div class="glass" style="padding:25px; border-radius:12px; margin-bottom:25px; background:rgba(0,0,0,0.2); border:1px solid var(--glass-border);">
                    <h4 style="font-size: 1rem; text-transform:uppercase; color:var(--accent-yellow); margin-bottom:15px; letter-spacing:1px; font-weight:800;">Ventajas Competitivas a Desarrollar:</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:12px;">
                        ${requirements.map(req => `<li style="font-size:1.05rem; color:var(--text-secondary); display:flex; align-items:flex-start; gap:10px; line-height:1.5;"><i data-lucide="check-circle" style="width:18px; height:18px; color:var(--accent-yellow); flex-shrink:0; margin-top:3px;"></i> ${req}</li>`).join('')}
                    </ul>
                </div>

                <div style="display:flex; flex-direction:column; gap:12px;">
                    <button id="quiz-go-course" class="btn btn-primary w-full" style="padding:15px; font-size:1.15rem; font-weight:700;">
                        <i data-lucide="briefcase" style="width:20px; height:20px;"></i> Inicia tu Carrera Profesional: ${recommendedCourseName}
                    </button>
                    <button id="quiz-restart" class="btn btn-outline w-full" style="padding:12px; font-size:1.05rem; font-weight:600;">
                        <i data-lucide="refresh-cw" style="width:18px; height:18px;"></i> Volver a evaluar
                    </button>
                </div>
            `;
            
            lucide.createIcons();
            
            document.getElementById('quiz-go-course').addEventListener('click', () => {
                const targetCourse = courseData[recommendedCourse];
                if (targetCourse) {
                    modalContainer.innerHTML = buildModal(targetCourse);
                    lucide.createIcons();
                    setupFocusTrap(modal);
                }
            });

            document.getElementById('quiz-restart').addEventListener('click', () => {
                for (let j = 1; j <= 5; j++) delete answers[j];
                showStep(1);
            });
        }

        showStep(1);
        setupFocusTrap(modal);
    }

    // ─── 10. Campus Digital Platform ──────────────────────────────────────────
    const logsContainer = document.getElementById('platform-logs');
    const logPlatform = (message, type = 'system') => {
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        const time = new Date().toLocaleTimeString([], { hour12: false });
        entry.textContent = `[${time}] >> ${message}`;
        logsContainer.appendChild(entry);
        logsContainer.scrollTop = logsContainer.scrollHeight;
    };

    // Base de datos de aeropuertos ANAC
    const AIRPORTS = [
        { name: "Aeroparque Jorge Newbery (SABE)", lat: -34.5580, lon: -58.4164, limit: 5 },
        { name: "Aeropuerto Internacional Ezeiza (SAEZ)", lat: -34.8222, lon: -58.5358, limit: 9 },
        { name: "Aeropuerto Presidente Perón - Neuquén (SAZN)", lat: -38.9489, lon: -68.1558, limit: 5 },
        { name: "Aeropuerto Teniente Luis Candelaria - Bariloche (SAZS)", lat: -41.1512, lon: -71.1381, limit: 5 },
        { name: "Aeropuerto Malvinas Argentinas - Ushuaia (SAWO)", lat: -54.8433, lon: -68.2958, limit: 5 }
    ];

    const PREDEFINED_COORDS = {
        palermo: { lat: -34.5683, lon: -58.4036, label: "Palermo (CABA)" },
        ezeiza: { lat: -34.8290, lon: -58.5300, label: "Ezeiza (GBA)" },
        anelo: { lat: -38.3542, lon: -68.7885, label: "Añelo (Neuquén)" },
        bariloche: { lat: -41.1335, lon: -71.3103, label: "Bariloche (Centro)" },
        ushuaia: { lat: -54.8019, lon: -68.3030, label: "Ushuaia (Puerto)" }
    };

    function getHaversineDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radio de la Tierra en km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    const defaultQuestions = [
        {
            q: "¿Cuál es la altura máxima de vuelo permitida en la Categoría Abierta en Argentina?",
            opts: [
                { text: "122 metros (400 pies) sobre el suelo", correct: true },
                { text: "150 metros (500 pies) sobre el nivel del mar", correct: false },
                { text: "Sin límite, hasta perder la señal del radiocontrol", correct: false }
            ]
        },
        {
            q: "¿Qué significan las siglas VLOS en la operación de drones?",
            opts: [
                { text: "Visual Line of Sight (Mantener contacto visual directo)", correct: true },
                { text: "Variable Low Altitude Operations (Operaciones de baja altura)", correct: false },
                { text: "Velocity Limit Operating System (Límite de velocidad del dron)", correct: false }
            ]
        },
        {
            q: "Bajo la Res. ANAC 550/2025, ¿cuál es el peso máximo permitido para la Categoría Abierta General?",
            opts: [
                { text: "25 kilogramos", correct: true },
                { text: "10 kilogramos", correct: false },
                { text: "5 kilogramos", correct: false }
            ]
        },
        {
            q: "¿Se permite operar drones en la Categoría Abierta sobre aglomeraciones de personas?",
            opts: [
                { text: "No, está estrictamente prohibido volar sobre personas ajenas", correct: true },
                { text: "Sí, siempre que el dron pese menos de 1 kg", correct: false },
                { text: "Sí, si se cuenta con seguro de responsabilidad civil", correct: false }
            ]
        },
        {
            q: "¿Qué distancia mínima de seguridad se debe mantener respecto a aeródromos no controlados?",
            opts: [
                { text: "5 kilómetros", correct: true },
                { text: "1 kilómetro", correct: false },
                { text: "500 metros", correct: false }
            ]
        }
    ];

    let EXAM_QUESTIONS = StorageService.getData(STORAGE_KEYS.QUESTIONS, defaultQuestions);

    let currentExamIdx = 0;
    let examScore = 0;

    function startExamSimulation(btn, indicator, statusText) {
        currentExamIdx = 0;
        examScore = 0;
        logsContainer.innerHTML = '';
        document.getElementById('console-title-text').textContent = "EXAMEN TEÓRICO EN CURSO";
        displayExamQuestion(btn, indicator, statusText);
    }

    function displayExamQuestion(btn, indicator, statusText) {
        logsContainer.innerHTML = '';
        
        if (currentExamIdx >= EXAM_QUESTIONS.length) {
            // Examen Terminado
            document.getElementById('console-title-text').textContent = "RESULTADO DEL EXAMEN";
            logPlatform("--- EXAMEN FINALIZADO ---", "system");
            logPlatform(`Puntaje obtenido: ${examScore} / ${EXAM_QUESTIONS.length} preguntas correctas.`, "system");
            const percentage = (examScore / EXAM_QUESTIONS.length) * 100;
            if (percentage >= 80) {
                logPlatform("¡APROBADO! Excelente dominio de la reglamentación y seguridad.", "success");
                indicator.className = 'status-indicator active';
                statusText.textContent = 'Aprobado';
            } else {
                logPlatform("DESAPROBADO. Te recomendamos repasar los contenidos teóricos del curso.", "error");
                indicator.className = 'status-indicator';
                indicator.style.background = '#ff4a4a';
                statusText.textContent = 'Reprobado';
            }
            logPlatform("Haz clic en 'Iniciar Simulador Examen' para intentarlo de nuevo.", "system");
            btn.disabled = false;
            return;
        }

        const qData = EXAM_QUESTIONS[currentExamIdx];
        
        // Agregar cabecera
        const header = document.createElement('div');
        header.className = 'log-entry system';
        header.style.fontWeight = 'bold';
        header.style.color = 'var(--accent-yellow)';
        header.textContent = `[Pregunta ${currentExamIdx + 1} de ${EXAM_QUESTIONS.length}]`;
        logsContainer.appendChild(header);

        // Agregar la pregunta
        const qEl = document.createElement('div');
        qEl.className = 'log-entry system';
        qEl.style.fontSize = '1.05rem';
        qEl.style.marginTop = '5px';
        qEl.style.marginBottom = '15px';
        qEl.style.color = '#ffffff';
        qEl.textContent = qData.q;
        logsContainer.appendChild(qEl);

        // Crear opciones interactivas
        const optsContainer = document.createElement('div');
        optsContainer.style.display = 'flex';
        optsContainer.style.flexDirection = 'column';
        optsContainer.style.gap = '8px';
        optsContainer.style.marginTop = '10px';
        
        qData.opts.forEach((opt, idx) => {
            const optBtn = document.createElement('button');
            optBtn.className = 'btn btn-outline small';
            optBtn.style.textAlign = 'left';
            optBtn.style.width = '100%';
            optBtn.style.padding = '10px 15px';
            optBtn.style.background = 'rgba(255, 255, 255, 0.03)';
            optBtn.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            optBtn.style.color = '#e0e0e0';
            optBtn.style.cursor = 'pointer';
            optBtn.style.borderRadius = '6px';
            optBtn.style.transition = 'all 0.2s';
            
            // Hover effect
            optBtn.addEventListener('mouseenter', () => {
                optBtn.style.background = 'rgba(251, 215, 4, 0.08)';
                optBtn.style.borderColor = 'var(--accent-yellow)';
                optBtn.style.color = '#ffffff';
            });
            optBtn.addEventListener('mouseleave', () => {
                optBtn.style.background = 'rgba(255, 255, 255, 0.03)';
                optBtn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                optBtn.style.color = '#e0e0e0';
            });

            optBtn.textContent = `${String.fromCharCode(65 + idx)}) ${opt.text}`;
            
            optBtn.addEventListener('click', () => {
                if (opt.correct) {
                    examScore++;
                    logPlatform(`Respuesta ${String.fromCharCode(65 + idx)}: CORRECTA.`, 'success');
                } else {
                    logPlatform(`Respuesta ${String.fromCharCode(65 + idx)}: INCORRECTA.`, 'error');
                }
                currentExamIdx++;
                setTimeout(() => {
                    displayExamQuestion(btn, indicator, statusText);
                }, 1000);
            });
            optsContainer.appendChild(optBtn);
        });

        logsContainer.appendChild(optsContainer);
        logsContainer.scrollTop = 0;
    }

    const geoSelect = document.getElementById('geo-location-select');
    const customCoordsContainer = document.getElementById('custom-coords-container');
    if (geoSelect && customCoordsContainer) {
        geoSelect.addEventListener('change', () => {
            if (geoSelect.value === 'custom') {
                customCoordsContainer.style.display = 'flex';
            } else {
                customCoordsContainer.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('.run-tool').forEach(btn => {
        btn.addEventListener('click', () => {
            const tool      = btn.getAttribute('data-tool');
            const card      = btn.closest('.platform-card');
            const indicator = card.querySelector('.status-indicator');
            const statusText = card.querySelector('.status-text');

            indicator.className  = 'status-indicator processing';
            indicator.style.background = ''; // reset custom red if any
            statusText.textContent = 'Procesando...';
            btn.disabled = true;
            logPlatform(`Iniciando módulo: ${tool.toUpperCase()}...`, 'warning');

            if (tool === 'searcher') {
                const weightInput = document.getElementById('calc-weight');
                const weight = parseInt(weightInput.value, 10);
                if (isNaN(weight) || weight <= 0) {
                    logPlatform("ERROR: Por favor ingrese un peso válido en gramos.", "error");
                    indicator.className = 'status-indicator';
                    statusText.textContent = 'Peso Inválido';
                    btn.disabled = false;
                    return;
                }

                logPlatform(`Analizando especificaciones para peso: ${weight} gramos...`, 'system');
                setTimeout(() => {
                    if (weight < 250) {
                        logPlatform("Clasificación: Clase MICRO VANT (< 250g).", "success");
                        logPlatform("Registro ANAC: No requiere registro formal para vuelos recreativos.", "success");
                        logPlatform("Reglas: Altura máx 122m, siempre VLOS, prohibido volar sobre personas ajenas.", "success");
                        indicator.className = 'status-indicator active';
                        statusText.textContent = 'Micro VANT';
                    } else if (weight <= 25000) {
                        logPlatform("Clasificación: Clase PEQUEÑO VANT (250g - 25kg).", "success");
                        logPlatform("Registro ANAC: Registro obligatorio en plataforma digital VANT ANAC.", "success");
                        logPlatform("Seguridad: Seguro de resp. civil recomendado para uso escolar/deportivo.", "success");
                        logPlatform("Reglas: Altura máx 122m, siempre VLOS.", "success");
                        indicator.className = 'status-indicator active';
                        statusText.textContent = 'Pequeño VANT';
                    } else {
                        logPlatform("Clasificación: Clase MEDIANO/GRANDE VANT (> 25kg).", "warning");
                        logPlatform("Restricción: Excede límites generales de la Categoría Abierta.", "error");
                        logPlatform("Excepción: Permitido en zonas rurales despobladas para uso agrícola.", "warning");
                        logPlatform("Requisito: Requiere habilitación profesional y autorización especial ANAC.", "error");
                        indicator.className = 'status-indicator';
                        indicator.style.background = '#ff9f43';
                        statusText.textContent = 'Grande (Restringido)';
                    }
                    btn.disabled = false;
                }, 1000);
                return;
            }

            if (tool === 'integrator') {
                logPlatform("Iniciando Simulador de Examen Teórico...", "warning");
                setTimeout(() => {
                    startExamSimulation(btn, indicator, statusText);
                }, 800);
                return;
            }

            if (tool === 'geo') {
                let lat, lon, locationLabel;
                
                if (geoSelect.value === 'custom') {
                    const latVal = parseFloat(document.getElementById('custom-lat').value);
                    const lonVal = parseFloat(document.getElementById('custom-lon').value);
                    if (isNaN(latVal) || isNaN(lonVal)) {
                        logPlatform("ERROR: Latitud y Longitud ingresadas deben ser números válidos.", "error");
                        indicator.className = 'status-indicator';
                        statusText.textContent = 'Error Coords';
                        btn.disabled = false;
                        return;
                    }
                    lat = latVal;
                    lon = lonVal;
                    locationLabel = `Coordenadas manuales (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
                } else if (geoSelect && geoSelect.value) {
                    const coord = PREDEFINED_COORDS[geoSelect.value];
                    lat = coord.lat;
                    lon = coord.lon;
                    locationLabel = coord.label;
                } else {
                    logPlatform("ERROR: Por favor selecciona una ubicación o ingresa coordenadas.", "error");
                    indicator.className = 'status-indicator';
                    statusText.textContent = 'Esperando datos';
                    btn.disabled = false;
                    return;
                }

                // Simular pasos de terminal
                let step = 0;
                const stepsList = [
                    `Iniciando análisis de espacio aéreo para ${locationLabel}...`,
                    `Consultando base geodésica ANAC 2026...`,
                    `Calculando distancias a aeropuertos nacionales...`
                ];

                const interval = setInterval(() => {
                    if (step < stepsList.length) {
                        logPlatform(stepsList[step], 'system');
                        step++;
                    } else {
                        clearInterval(interval);
                        
                        let restrictionHit = null;
                        for (const airport of AIRPORTS) {
                            const dist = getHaversineDistance(lat, lon, airport.lat, airport.lon);
                            if (dist < airport.limit) {
                                restrictionHit = { airport, dist };
                                break;
                            }
                        }

                        if (restrictionHit) {
                            logPlatform(`⚠️ EXCLUSIÓN DETECTADA: ${restrictionHit.airport.name}`, 'error');
                            logPlatform(`Distancia al aeropuerto: ${restrictionHit.dist.toFixed(2)} km (Límite de seguridad: ${restrictionHit.airport.limit} km).`, 'error');
                            logPlatform(`ESTADO: Vuelo No Autorizado. Requiere habilitación especial ANAC y plan de vuelo formal.`, 'error');
                            indicator.className = 'status-indicator';
                            indicator.style.background = '#ff4a4a';
                            statusText.textContent = 'Restringido';
                        } else {
                            logPlatform(`✅ ESPACIO AÉREO AUTORIZADO para la ubicación analizada.`, 'success');
                            logPlatform(`No se detectan aeropuertos dentro de la zona de exclusión activa.`, 'success');
                            logPlatform(`ESTADO: Seguro para vuelo bajo Categoría Abierta (VLOS, máx 122m de altura).`, 'success');
                            indicator.className = 'status-indicator active';
                            statusText.textContent = 'Seguro';
                        }
                        btn.disabled = false;
                    }
                }, 800);
                return;
            }
        });
    });

    document.querySelector('.clear-console')?.addEventListener('click', () => {
        logsContainer.innerHTML = '<div class="log-entry system">>> Campus cleared. Ready for next test.</div>';
        document.getElementById('console-title-text').textContent = "TERMINAL ACADÉMICA / SIMULADOR";
    });

    // ─── 11. Enrollment Form (Validación Dinámica & Configuración) ───────────
    const enrollForm = document.getElementById('enroll-form');
    if (enrollForm) {
        enrollForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn      = enrollForm.querySelector('button[type="submit"]');
            const feedback = document.getElementById('form-feedback');
            
            // Referencias a los inputs
            const nameInput   = document.getElementById('enroll-name');
            const emailInput  = document.getElementById('enroll-email');
            const phoneInput  = document.getElementById('enroll-phone');
            const courseInput = document.getElementById('enroll-course');

            // Limpieza previa de errores
            const fields = [nameInput, emailInput, phoneInput, courseInput];
            fields.forEach(field => {
                if (field) field.classList.remove('error-field');
            });

            feedback.className = 'form-feedback';
            feedback.textContent = '';

            // Validaciones
            let hasError = false;
            let firstErrorField = null;

            const markError = (field) => {
                field.classList.add('error-field');
                hasError = true;
                if (!firstErrorField) firstErrorField = field;
            };

            if (!nameInput.value.trim()) {
                markError(nameInput);
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                markError(emailInput);
            }

            if (!courseInput.value) {
                markError(courseInput);
            }

            const phoneVal = phoneInput.value.trim();
            if (phoneVal && phoneVal.replace(/\D/g, '').length < 8) {
                markError(phoneInput);
            }

            if (hasError) {
                feedback.className = 'form-feedback error';
                feedback.textContent = '❌ Por favor, completa los campos marcados en rojo con datos válidos.';
                if (firstErrorField) firstErrorField.focus();
                return;
            }

            btn.disabled       = true;
            btn.textContent    = 'Enviando...';

            // Configuración modular de EmailJS
            const SERVICE_ID  = window.HORUS_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const TEMPLATE_ID = window.HORUS_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const PUBLIC_KEY  = window.HORUS_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            const templateParams = {
                from_name:  nameInput.value.trim(),
                from_email: emailInput.value.trim(),
                phone:      phoneVal || '—',
                course:     courseInput.value,
                message:    document.getElementById('enroll-msg')?.value.trim() || '—',
            };

            try {
                if (typeof emailjs !== 'undefined' && SERVICE_ID !== 'YOUR_SERVICE_ID') {
                    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
                } else {
                    // Simulación local asíncrona para pruebas
                    await new Promise(r => setTimeout(r, 1200));
                }
                feedback.className   = 'form-feedback success';
                feedback.textContent = '✅ ¡Solicitud enviada! Nos pondremos en contacto contigo en menos de 24 horas.';
                enrollForm.reset();
            } catch (err) {
                feedback.className   = 'form-feedback error';
                feedback.textContent = '❌ Error de conexión al enviar. Por favor contáctanos directamente vía WhatsApp.';
                console.error('EmailJS error:', err);
            } finally {
                btn.disabled    = false;
                btn.textContent = 'Enviar Solicitud';
            }
        });
    }

    // ─── 12. Scroll-reveal for sections ──────────────────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ─── 13. Dynamic WhatsApp configuration (Movido arriba y unificado) ──────

    // --- RECEPCIÓN DE LIVE PREVIEW ---
    window.addEventListener('message', (event) => {
        const data = event.data;
        if (!data || !data.type) return;
        if (data.type === 'SYNC_DATA') {
            if (data.siteData) siteData = data.siteData;
            if (data.courseData) courseData = data.courseData;
            if (data.contactData) contactData = data.contactData;
            if (data.testimonialsData) testimonialsData = data.testimonialsData;
            renderSite();
        } else if (data.type === 'SCROLL_TO') {
            const target = document.getElementById(data.target);
            if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainApp);
} else {
    initMainApp();
}

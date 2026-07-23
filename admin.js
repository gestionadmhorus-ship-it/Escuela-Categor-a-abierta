document.addEventListener('DOMContentLoaded', () => {

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
            description: "Te capacitamos teórica y prácticamente bajo los lineamientos y exigencias de seguridad de la normativa ANAC para dominar drones de hasta 25 kg en la Categoría Abierta de bajo riesgo. Te proveemos todas las aeronaves escuela y simuladores terrestres para que aprendas desde cero y con seguridad."
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
    if (!siteData.headerFooter) {
        siteData.headerFooter = {
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
    }

    let courseData = StorageService.getData(STORAGE_KEYS.COURSES);
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

    let EXAM_QUESTIONS = StorageService.getData(STORAGE_KEYS.QUESTIONS);
    if (!EXAM_QUESTIONS || !Array.isArray(EXAM_QUESTIONS) || EXAM_QUESTIONS.length === 0) {
        EXAM_QUESTIONS = JSON.parse(JSON.stringify(defaultQuestions));
        StorageService.saveData(STORAGE_KEYS.QUESTIONS, EXAM_QUESTIONS);
    }

    function renderAdminSettings() {
        const container = document.getElementById('admin-settings-container');
        if (!container) return;
        
        container.innerHTML = `
            <div class="admin-card" data-category="brand">
                <div class="admin-section-title"><i data-lucide="image" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Identidad Visual e Imagen de Marca</div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Ruta o URL del Logotipo Institucional</label>
                    <input type="text" id="admin-brand-logourl" class="admin-input" value="${(siteData.brand && siteData.brand.logoUrl ? siteData.brand.logoUrl : '').replace(/"/g, '&quot;')}" placeholder="Ej: horus_logo.webp o https://...">
                    <small style="color:var(--text-secondary);font-size:0.8rem;">Deja este campo vacío para utilizar el isotipo por defecto con ícono ANAC.</small>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Texto Alternativo del Logotipo (Alt Text)</label>
                    <input type="text" id="admin-brand-logoalt" class="admin-input" value="${(siteData.brand && siteData.brand.logoAlt ? siteData.brand.logoAlt : 'Horus Dron — Escuela de Vuelo').replace(/"/g, '&quot;')}">
                </div>
            </div>

            <div class="admin-card" data-category="contact">
                <div class="admin-section-title"><i data-lucide="monitor" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Textos Principales (Hero)</div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Píldora Superior</label>
                    <input type="text" id="admin-hero-pill" class="admin-input" value="${siteData.hero.pill.replace(/"/g, '&quot;')}">
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Título Principal (H1)</label>
                    <input type="text" id="admin-hero-title" class="admin-input" value="${siteData.hero.title.replace(/"/g, '&quot;')}">
                    <small style="color:var(--text-secondary);font-size:0.8rem;">Puedes usar &lt;span class="gradient-text"&gt;Texto&lt;/span&gt; para dar color.</small>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Subtítulo (Tagline)</label>
                    <textarea id="admin-hero-tagline" class="admin-textarea" rows="2">${siteData.hero.tagline}</textarea>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Descripción Larga</label>
                    <textarea id="admin-hero-desc" class="admin-textarea" rows="4">${siteData.hero.description}</textarea>
                </div>
            </div>

            <div class="admin-card" data-category="hero-images">
                <div class="admin-section-title"><i data-lucide="images" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Colección y Rotación de Imágenes de Portada (Hero)</div>
                
                <div style="display:flex; gap:20px; align-items:center; margin-bottom:15px; background:rgba(0,0,0,0.2); padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,0.05); flex-wrap:wrap;">
                    <label style="display:flex; align-items:center; gap:8px; cursor:pointer; color:white; font-size:0.9rem; font-weight:600;">
                        <input type="checkbox" id="admin-hero-enabled" ${siteData.heroImages && siteData.heroImages.enabled !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow); width:18px; height:18px;">
                        Activar Rotación Automática
                    </label>
                    
                    <div style="display:flex; align-items:center; gap:8px; margin-left:auto;">
                        <label class="admin-label" style="margin:0; font-size:0.85rem;">Intervalo (segundos):</label>
                        <input type="number" id="admin-hero-interval" class="admin-input" value="${(siteData.heroImages && siteData.heroImages.interval) || 5}" min="1" max="60" style="width:70px; padding:4px 8px; text-align:center;">
                    </div>
                </div>

                <div style="margin-bottom:15px;">
                    <label class="admin-label">Imágenes Actuales de la Portada</label>
                    <div id="admin-hero-images-list" style="display:flex; flex-direction:column; gap:10px;">
                        ${(siteData.heroImages && siteData.heroImages.images ? siteData.heroImages.images : ["drone_school_hero.webp"]).map((imgUrl, imgIdx, arr) => `
                            <div style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                                <img src="${imgUrl}" style="width:48px; height:32px; object-fit:cover; border-radius:4px; border:1px solid rgba(255,255,255,0.2);" onerror="this.style.display='none'">
                                <input type="text" class="admin-input hero-img-input" data-idx="${imgIdx}" value="${imgUrl.replace(/"/g, '&quot;')}" style="flex:1;">
                                <div style="display:flex; gap:4px;">
                                    <button type="button" class="btn btn-outline admin-hero-move-up" data-idx="${imgIdx}" ${imgIdx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-outline admin-hero-move-down" data-idx="${imgIdx}" ${imgIdx === arr.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-danger admin-hero-delete" data-idx="${imgIdx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="display:flex; gap:10px;">
                    <input type="text" id="admin-hero-new-img" class="admin-input" placeholder="Nombre de archivo o URL (ej: drone_vtol.webp)" style="flex:1;">
                    <button type="button" id="admin-hero-add-btn" class="btn btn-primary" style="padding:8px 16px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:16px;height:16px;"></i> Añadir Imagen</button>
                </div>
            </div>

            <div class="admin-card" data-category="hero-trust">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <div class="admin-section-title" style="margin:0;"><i data-lucide="award" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Insignias de Confianza (Trust Badges - Hero)</div>
                    <button type="button" id="admin-hero-add-trust-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Insignia</button>
                </div>
                <div id="admin-hero-trust-list" style="display:flex; flex-direction:column; gap:12px;">
                    ${(siteData.hero && siteData.hero.trustBadges ? siteData.hero.trustBadges : []).map((b, idx, arr) => `
                        <div class="admin-hero-trust-item" style="display:flex; flex-direction:column; gap:10px; background:rgba(255,255,255,0.03); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="color:var(--accent-yellow); font-weight:700; font-size:0.85rem;">Insignia #${idx + 1}</span>
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                                        <input type="checkbox" class="trust-visible" ${b.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                                    </label>
                                    <button type="button" class="btn btn-outline admin-trust-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-outline admin-trust-move-down" data-idx="${idx}" ${idx === arr.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-danger admin-trust-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                                </div>
                            </div>
                            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                                <input type="text" class="admin-input trust-icon" value="${(b.icon || 'shield-check').replace(/"/g, '&quot;')}" placeholder="Ícono Lucide">
                                <input type="text" class="admin-input trust-title" value="${(b.title || '').replace(/"/g, '&quot;')}" placeholder="Título principal">
                                <input type="text" class="admin-input trust-sub" value="${(b.sub || '').replace(/"/g, '&quot;')}" placeholder="Subtítulo">
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="admin-card" data-category="hero-tech">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <div class="admin-section-title" style="margin:0;"><i data-lucide="tag" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Etiquetas Técnicas (Tech Tags - Hero)</div>
                    <button type="button" id="admin-hero-add-tech-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Etiqueta</button>
                </div>
                <div id="admin-hero-tech-list" style="display:flex; flex-direction:column; gap:12px;">
                    ${(siteData.hero && siteData.hero.techTags ? siteData.hero.techTags : []).map((t, idx, arr) => `
                        <div class="admin-hero-tech-item" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                            <input type="text" class="admin-input tech-icon" value="${(t.icon || 'check').replace(/"/g, '&quot;')}" placeholder="Ícono" style="width:120px;">
                            <input type="text" class="admin-input tech-text" value="${(t.text || '').replace(/"/g, '&quot;')}" placeholder="Texto de etiqueta" style="flex:1;">
                            <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                                <input type="checkbox" class="tech-visible" ${t.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                            </label>
                            <button type="button" class="btn btn-outline admin-tech-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                            <button type="button" class="btn btn-outline admin-tech-move-down" data-idx="${idx}" ${idx === arr.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                            <button type="button" class="btn btn-danger admin-tech-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="admin-card" data-category="hero-btns">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <div class="admin-section-title" style="margin:0;"><i data-lucide="mouse-pointer" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Botones CTA Principales (Hero)</div>
                    <button type="button" id="admin-hero-add-cta-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Botón</button>
                </div>
                <div id="admin-hero-cta-list" style="display:flex; flex-direction:column; gap:12px;">
                    ${(siteData.hero && siteData.hero.ctaButtons ? siteData.hero.ctaButtons : []).map((b, idx, arr) => `
                        <div class="admin-hero-cta-item" style="display:flex; flex-direction:column; gap:10px; background:rgba(255,255,255,0.03); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="color:var(--accent-yellow); font-weight:700; font-size:0.85rem;">Botón CTA #${idx + 1}</span>
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                                        <input type="checkbox" class="cta-visible" ${b.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                                    </label>
                                    <button type="button" class="btn btn-outline admin-cta-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-outline admin-cta-move-down" data-idx="${idx}" ${idx === arr.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-danger admin-cta-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                                </div>
                            </div>
                            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                                <input type="text" class="admin-input cta-text" value="${(b.text || '').replace(/"/g, '&quot;')}" placeholder="Texto del botón">
                                <input type="text" class="admin-input cta-href" value="${(b.href || '#').replace(/"/g, '&quot;')}" placeholder="Enlace / Anchor">
                                <select class="admin-input cta-btnclass">
                                    <option value="btn-primary" ${b.btnClass === 'btn-primary' ? 'selected' : ''}>Principal Amarillo (btn-primary)</option>
                                    <option value="btn-outline" ${b.btnClass === 'btn-outline' ? 'selected' : ''}>Contorno (btn-outline)</option>
                                </select>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="admin-card" data-category="hero-float">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <div class="admin-section-title" style="margin:0;"><i data-lucide="layers" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Badges Flotantes de la Portada</div>
                    <button type="button" id="admin-hero-add-float-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Badge</button>
                </div>
                <div id="admin-hero-float-list" style="display:flex; flex-direction:column; gap:12px;">
                    ${(siteData.hero && siteData.hero.floatingBadges ? siteData.hero.floatingBadges : []).map((b, idx, arr) => `
                        <div class="admin-hero-float-item" style="display:flex; flex-direction:column; gap:10px; background:rgba(255,255,255,0.03); padding:12px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="color:var(--accent-yellow); font-weight:700; font-size:0.85rem;">Badge Flotante #${idx + 1}</span>
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                                        <input type="checkbox" class="float-visible" ${b.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                                    </label>
                                    <button type="button" class="btn btn-outline admin-float-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-outline admin-float-move-down" data-idx="${idx}" ${idx === arr.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                                    <button type="button" class="btn btn-danger admin-float-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                                </div>
                            </div>
                            <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:10px;">
                                <input type="text" class="admin-input float-icon" value="${(b.icon || 'shield-check').replace(/"/g, '&quot;')}" placeholder="Ícono">
                                <input type="text" class="admin-input float-title" value="${(b.title || '').replace(/"/g, '&quot;')}" placeholder="Título">
                                <input type="text" class="admin-input float-sub" value="${(b.sub || '').replace(/"/g, '&quot;')}" placeholder="Subtítulo">
                                <select class="admin-input float-pos">
                                    <option value="badge-top-left" ${b.positionClass === 'badge-top-left' ? 'selected' : ''}>Superior Izquierda</option>
                                    <option value="badge-bottom-right" ${b.positionClass === 'badge-bottom-right' ? 'selected' : ''}>Inferior Derecha</option>
                                </select>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="admin-card" data-category="enrollment">
                <div class="admin-section-title"><i data-lucide="file-text" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Formulario y Sección de Inscripción</div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Título de la Sección</label>
                    <input type="text" id="admin-enroll-title" class="admin-input" value="${(siteData.enrollment && siteData.enrollment.title ? siteData.enrollment.title : 'Iniciá tu Carrera').replace(/"/g, '&quot;')}">
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Subtítulo Explicativo</label>
                    <textarea id="admin-enroll-subtitle" class="admin-textarea" rows="2">${siteData.enrollment && siteData.enrollment.subtitle ? siteData.enrollment.subtitle : 'Completá el formulario para que la coordinación pedagógica analice tu perfil y te asigne un cupo de formación práctica presencial.'}</textarea>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Ruta o URL de Imagen Lateral</label>
                    <input type="text" id="admin-enroll-imageurl" class="admin-input" value="${(siteData.enrollment && siteData.enrollment.imageUrl ? siteData.enrollment.imageUrl : 'section_enrollment.webp').replace(/"/g, '&quot;')}">
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Texto del Botón de Envío</label>
                    <input type="text" id="admin-enroll-btntext" class="admin-input" value="${(siteData.enrollment && siteData.enrollment.btnText ? siteData.enrollment.btnText : 'Enviar Solicitud de Inscripción').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Beneficios Destacados (1 por línea)</label>
                    <textarea id="admin-enroll-perks" class="admin-textarea" rows="3" placeholder="Un beneficio por línea...">${siteData.enrollment && Array.isArray(siteData.enrollment.perks) ? siteData.enrollment.perks.join('\n') : "Clases teóricas y prácticas provistas\nDrones de instrucción incluidos\nAcceso 24/7 al Campus Digital"}</textarea>
                </div>
            </div>

            <div class="admin-card" data-category="consultor">
                <div class="admin-section-title"><i data-lucide="radar" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Banner Consultor Inteligente de Vuelo</div>
                <div style="margin-bottom:15px; background:rgba(0,0,0,0.2); padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,0.05);">
                    <label style="display:flex; align-items:center; gap:8px; cursor:pointer; color:white; font-size:0.9rem; font-weight:600;">
                        <input type="checkbox" id="admin-consultor-enabled" ${siteData.consultorBanner && siteData.consultorBanner.enabled !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow); width:18px; height:18px;">
                        Mostrar Banner Consultor en Portada
                    </label>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Ícono Lucide</label>
                        <input type="text" id="admin-consultor-icon" class="admin-input" value="${(siteData.consultorBanner?.icon || 'radar').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label class="admin-label">Texto del Botón</label>
                        <input type="text" id="admin-consultor-btntext" class="admin-input" value="${(siteData.consultorBanner?.btnText || 'Iniciar Diagnóstico').replace(/"/g, '&quot;')}">
                    </div>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Título del Banner</label>
                    <input type="text" id="admin-consultor-title" class="admin-input" value="${(siteData.consultorBanner?.title || 'Consultor Inteligente de Vuelo').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Subtítulo Explicativo</label>
                    <textarea id="admin-consultor-subtitle" class="admin-textarea" rows="2">${siteData.consultorBanner?.subtitle || 'Diagnóstico en 1 min: Descubre tus riesgos legales (ANAC) y tu perfil de rentabilidad.'}</textarea>
                </div>
            </div>

            <div class="admin-card" data-category="contact">
                <div class="admin-section-title"><i data-lucide="bar-chart-2" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Contadores y Estadísticas de la Escuela</div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Ruta o URL de Imagen de Fondo de Sección</label>
                    <input type="text" id="admin-stats-bg" class="admin-input" value="${(siteData.stats?.bgImage || 'section_stats.webp').replace(/"/g, '&quot;')}">
                </div>
                <div style="display:flex; flex-direction:column; gap:15px;">
                    ${[0,1,2,3].map(i => {
                        const item = (siteData.stats && siteData.stats.items && siteData.stats.items[i]) ? siteData.stats.items[i] : { number: 0, suffix: "+", label: "Indicador" };
                        return `
                            <div style="display:grid; grid-template-columns:1fr 1fr 2fr; gap:10px; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                                <div>
                                    <label class="admin-label" style="font-size:0.75rem;">Valor Indicador #${i+1}</label>
                                    <input type="number" class="admin-input stat-item-num" data-idx="${i}" value="${item.number}">
                                </div>
                                <div>
                                    <label class="admin-label" style="font-size:0.75rem;">Sufijo (ej: +, %)</label>
                                    <input type="text" class="admin-input stat-item-suffix" data-idx="${i}" value="${(item.suffix || '').replace(/"/g, '&quot;')}">
                                </div>
                                <div>
                                    <label class="admin-label" style="font-size:0.75rem;">Etiqueta / Descripción</label>
                                    <input type="text" class="admin-input stat-item-label" data-idx="${i}" value="${(item.label || '').replace(/"/g, '&quot;')}">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        bindHeroImagesEvents();
        bindEnrollmentEvents();
    }

    function syncHeroImagesFromDOM() {
        if (!siteData.heroImages) siteData.heroImages = { enabled: true, interval: 5, images: ["drone_school_hero.webp"] };
        const enabledInput = document.getElementById('admin-hero-enabled');
        const intervalInput = document.getElementById('admin-hero-interval');
        if (enabledInput) siteData.heroImages.enabled = enabledInput.checked;
        if (intervalInput) siteData.heroImages.interval = Math.max(1, parseInt(intervalInput.value) || 5);

        const imgInputs = document.querySelectorAll('.hero-img-input');
        if (imgInputs.length > 0) {
            siteData.heroImages.images = Array.from(imgInputs).map(inp => inp.value.trim()).filter(Boolean);
        }
    }

    function bindHeroImagesEvents() {
        const container = document.getElementById('admin-settings-container');
        if (!container) return;

        const addBtn = document.getElementById('admin-hero-add-btn');
        const newImgInput = document.getElementById('admin-hero-new-img');

        if (addBtn && newImgInput) {
            addBtn.onclick = (e) => {
                e.preventDefault();
                const val = newImgInput.value.trim();
                if (val) {
                    syncHeroImagesFromDOM();
                    siteData.heroImages.images.push(val);
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        }

        container.querySelectorAll('.admin-hero-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                syncHeroImagesFromDOM();
                siteData.heroImages.images.splice(idx, 1);
                if (siteData.heroImages.images.length === 0) {
                    siteData.heroImages.images = ["drone_school_hero.webp"];
                }
                renderAdminSettings();
                syncToPreview();
            };
        });

        container.querySelectorAll('.admin-hero-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeroImagesFromDOM();
                    const temp = siteData.heroImages.images[idx];
                    siteData.heroImages.images[idx] = siteData.heroImages.images[idx - 1];
                    siteData.heroImages.images[idx - 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-hero-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.heroImages.images.length - 1) {
                    syncHeroImagesFromDOM();
                    const temp = siteData.heroImages.images[idx];
                    siteData.heroImages.images[idx] = siteData.heroImages.images[idx + 1];
                    siteData.heroImages.images[idx + 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });

        const enabledInput = document.getElementById('admin-hero-enabled');
        const intervalInput = document.getElementById('admin-hero-interval');

        if (enabledInput) {
            enabledInput.onchange = () => {
                syncHeroImagesFromDOM();
                syncToPreview();
            };
        }
        if (intervalInput) {
            intervalInput.oninput = () => {
                syncHeroImagesFromDOM();
                syncToPreview();
            };
        }

        container.querySelectorAll('.hero-img-input').forEach(input => {
            input.oninput = () => {
                syncHeroImagesFromDOM();
                syncToPreview();
            };
        });

        // --- Trust Badges Handlers ---
        container.querySelectorAll('.admin-trust-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar esta insignia de confianza?')) {
                    syncHeroElementsFromDOM();
                    siteData.hero.trustBadges.splice(idx, 1);
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-trust-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.trustBadges[idx];
                    siteData.hero.trustBadges[idx] = siteData.hero.trustBadges[idx - 1];
                    siteData.hero.trustBadges[idx - 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-trust-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.hero.trustBadges.length - 1) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.trustBadges[idx];
                    siteData.hero.trustBadges[idx] = siteData.hero.trustBadges[idx + 1];
                    siteData.hero.trustBadges[idx + 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        const addTrustBtn = document.getElementById('admin-hero-add-trust-btn');
        if (addTrustBtn) {
            addTrustBtn.onclick = (e) => {
                e.preventDefault();
                syncHeroElementsFromDOM();
                if (!siteData.hero.trustBadges) siteData.hero.trustBadges = [];
                siteData.hero.trustBadges.push({
                    id: `tb_${Date.now()}`,
                    icon: "shield-check",
                    title: "Nueva Insignia",
                    sub: "Descripción corta",
                    visible: true,
                    order: siteData.hero.trustBadges.length + 1
                });
                renderAdminSettings();
                syncToPreview();
            };
        }

        // --- Tech Tags Handlers ---
        container.querySelectorAll('.admin-tech-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar esta etiqueta técnica?')) {
                    syncHeroElementsFromDOM();
                    siteData.hero.techTags.splice(idx, 1);
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-tech-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.techTags[idx];
                    siteData.hero.techTags[idx] = siteData.hero.techTags[idx - 1];
                    siteData.hero.techTags[idx - 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-tech-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.hero.techTags.length - 1) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.techTags[idx];
                    siteData.hero.techTags[idx] = siteData.hero.techTags[idx + 1];
                    siteData.hero.techTags[idx + 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        const addTechBtn = document.getElementById('admin-hero-add-tech-btn');
        if (addTechBtn) {
            addTechBtn.onclick = (e) => {
                e.preventDefault();
                syncHeroElementsFromDOM();
                if (!siteData.hero.techTags) siteData.hero.techTags = [];
                siteData.hero.techTags.push({
                    id: `tt_${Date.now()}`,
                    icon: "check",
                    text: "Nueva Etiqueta",
                    visible: true,
                    order: siteData.hero.techTags.length + 1
                });
                renderAdminSettings();
                syncToPreview();
            };
        }

        // --- CTA Buttons Handlers ---
        container.querySelectorAll('.admin-cta-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar este botón CTA?')) {
                    syncHeroElementsFromDOM();
                    siteData.hero.ctaButtons.splice(idx, 1);
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-cta-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.ctaButtons[idx];
                    siteData.hero.ctaButtons[idx] = siteData.hero.ctaButtons[idx - 1];
                    siteData.hero.ctaButtons[idx - 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-cta-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.hero.ctaButtons.length - 1) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.ctaButtons[idx];
                    siteData.hero.ctaButtons[idx] = siteData.hero.ctaButtons[idx + 1];
                    siteData.hero.ctaButtons[idx + 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        const addCtaBtn = document.getElementById('admin-hero-add-cta-btn');
        if (addCtaBtn) {
            addCtaBtn.onclick = (e) => {
                e.preventDefault();
                syncHeroElementsFromDOM();
                if (!siteData.hero.ctaButtons) siteData.hero.ctaButtons = [];
                siteData.hero.ctaButtons.push({
                    id: `cta_${Date.now()}`,
                    text: "Nuevo Botón CTA",
                    href: "#courses",
                    btnClass: "btn-primary",
                    visible: true,
                    order: siteData.hero.ctaButtons.length + 1
                });
                renderAdminSettings();
                syncToPreview();
            };
        }

        // --- Floating Badges Handlers ---
        container.querySelectorAll('.admin-float-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar este badge flotante?')) {
                    syncHeroElementsFromDOM();
                    siteData.hero.floatingBadges.splice(idx, 1);
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-float-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.floatingBadges[idx];
                    siteData.hero.floatingBadges[idx] = siteData.hero.floatingBadges[idx - 1];
                    siteData.hero.floatingBadges[idx - 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        container.querySelectorAll('.admin-float-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.hero.floatingBadges.length - 1) {
                    syncHeroElementsFromDOM();
                    const temp = siteData.hero.floatingBadges[idx];
                    siteData.hero.floatingBadges[idx] = siteData.hero.floatingBadges[idx + 1];
                    siteData.hero.floatingBadges[idx + 1] = temp;
                    renderAdminSettings();
                    syncToPreview();
                }
            };
        });
        const addFloatBtn = document.getElementById('admin-hero-add-float-btn');
        if (addFloatBtn) {
            addFloatBtn.onclick = (e) => {
                e.preventDefault();
                syncHeroElementsFromDOM();
                if (!siteData.hero.floatingBadges) siteData.hero.floatingBadges = [];
                siteData.hero.floatingBadges.push({
                    id: `fb_${Date.now()}`,
                    icon: "shield-check",
                    title: "Nuevo Badge Flotante",
                    sub: "Descripción corta",
                    positionClass: "badge-top-left",
                    visible: true,
                    order: siteData.hero.floatingBadges.length + 1
                });
                renderAdminSettings();
                syncToPreview();
            };
        }

        container.querySelectorAll('input, select, textarea').forEach(input => {
            input.oninput = () => {
                syncHeroImagesFromDOM();
                syncHeroElementsFromDOM();
                syncToPreview();
            };
        });

        if (window.lucide) { lucide.createIcons(); }
    }

    function syncHeroElementsFromDOM() {
        if (!siteData.hero) siteData.hero = {};

        const trustDivs = document.querySelectorAll('.admin-hero-trust-item');
        if (trustDivs.length > 0) {
            siteData.hero.trustBadges = Array.from(trustDivs).map((div, idx) => ({
                id: `tb_${Date.now()}_${idx}`,
                icon: div.querySelector('.trust-icon')?.value.trim() || 'shield-check',
                title: div.querySelector('.trust-title')?.value.trim() || '',
                sub: div.querySelector('.trust-sub')?.value.trim() || '',
                visible: div.querySelector('.trust-visible')?.checked !== false,
                order: idx + 1
            }));
        }

        const techDivs = document.querySelectorAll('.admin-hero-tech-item');
        if (techDivs.length > 0) {
            siteData.hero.techTags = Array.from(techDivs).map((div, idx) => ({
                id: `tt_${Date.now()}_${idx}`,
                icon: div.querySelector('.tech-icon')?.value.trim() || 'check',
                text: div.querySelector('.tech-text')?.value.trim() || '',
                visible: div.querySelector('.tech-visible')?.checked !== false,
                order: idx + 1
            }));
        }

        const ctaDivs = document.querySelectorAll('.admin-hero-cta-item');
        if (ctaDivs.length > 0) {
            siteData.hero.ctaButtons = Array.from(ctaDivs).map((div, idx) => ({
                id: `cta_${Date.now()}_${idx}`,
                text: div.querySelector('.cta-text')?.value.trim() || '',
                href: div.querySelector('.cta-href')?.value.trim() || '#',
                btnClass: div.querySelector('.cta-btnclass')?.value || 'btn-primary',
                visible: div.querySelector('.cta-visible')?.checked !== false,
                order: idx + 1
            }));
        }

        const floatDivs = document.querySelectorAll('.admin-hero-float-item');
        if (floatDivs.length > 0) {
            siteData.hero.floatingBadges = Array.from(floatDivs).map((div, idx) => ({
                id: `fb_${Date.now()}_${idx}`,
                icon: div.querySelector('.float-icon')?.value.trim() || 'shield-check',
                title: div.querySelector('.float-title')?.value.trim() || '',
                sub: div.querySelector('.float-sub')?.value.trim() || '',
                positionClass: div.querySelector('.float-pos')?.value || 'badge-top-left',
                visible: div.querySelector('.float-visible')?.checked !== false,
                order: idx + 1
            }));
        }
    }

    function syncEnrollmentFromDOM() {
        if (!siteData.enrollment) siteData.enrollment = {};
        const eTitle = document.getElementById('admin-enroll-title');
        const eSub = document.getElementById('admin-enroll-subtitle');
        const eImg = document.getElementById('admin-enroll-imageurl');
        const eBtn = document.getElementById('admin-enroll-btntext');
        const ePerks = document.getElementById('admin-enroll-perks');

        if (eTitle) siteData.enrollment.title = eTitle.value.trim();
        if (eSub) siteData.enrollment.subtitle = eSub.value.trim();
        if (eImg) siteData.enrollment.imageUrl = eImg.value.trim();
        if (eBtn) siteData.enrollment.btnText = eBtn.value.trim();
        if (ePerks) siteData.enrollment.perks = ePerks.value.split('\n').map(p => p.trim()).filter(Boolean);
    }

    function bindEnrollmentEvents() {
        const ids = ['admin-enroll-title', 'admin-enroll-subtitle', 'admin-enroll-imageurl', 'admin-enroll-btntext', 'admin-enroll-perks'];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.oninput = () => {
                    syncEnrollmentFromDOM();
                    syncToPreview();
                };
            }
        });
    }

    function syncCourseDOM() {
        Object.keys(courseData).forEach(key => {
            const titleInput = document.querySelector(`.course-title[data-key="${key}"]`);
            if (!titleInput) return;
            const card = titleInput.closest('.admin-card');
            if (card) {
                const statusSelect = card.querySelector(`.course-status-select`);
                if (statusSelect) {
                    courseData[key].status = statusSelect.value;
                }
                delete courseData[key].visible;
                
                courseData[key].title = card.querySelector(`.course-title`).value.trim();
                courseData[key].viz = card.querySelector(`.course-viz`).value.trim();
                courseData[key].desc = card.querySelector(`.course-desc`).value.trim();
                courseData[key].specs = card.querySelector(`.course-specs`).value.trim().split(',').map(s => s.trim()).filter(Boolean);
                
                const modInputs = card.querySelectorAll(`.course-modules-inputs[data-key="${key}"] > div`);
                courseData[key].modules = Array.from(modInputs).map(modDiv => {
                    return {
                        name: modDiv.querySelector(`.module-name`).value.trim(),
                        topics: modDiv.querySelector(`.module-topics`).value.trim().split(',').map(t => t.trim()).filter(Boolean)
                    };
                });

                courseData[key].bonus = card.querySelector(`.course-bonus`).value.trim().split(',').map(b => b.trim()).filter(Boolean);
            }
        });
    }

    function renderAdminCourses() {
        const container = document.getElementById('admin-courses-list');
        if (!container) return;
        container.innerHTML = `
            <div class="admin-card" style="margin-bottom:20px;">
                <div class="admin-section-title"><i data-lucide="type" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Encabezado de la Sección Cursos</div>
                <div style="margin-bottom:12px;">
                    <label class="admin-label">Título de la Sección</label>
                    <input type="text" id="admin-courses-header-title" class="admin-input" value="${(siteData.coursesHeader?.title || 'Programas de Formación').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Subtítulo de la Sección</label>
                    <input type="text" id="admin-courses-header-subtitle" class="admin-input" value="${(siteData.coursesHeader?.subtitle || 'Cursos estructurados para operar de forma segura y profesional en la Categoría Abierta.').replace(/"/g, '&quot;')}">
                </div>
            </div>
        `;

        Object.keys(courseData).forEach(key => {
            const course = courseData[key];
            let currentStatus = course.status;
            if (!currentStatus) {
                currentStatus = course.visible === false ? 'draft' : 'published';
            }

            const card = document.createElement('div');
            card.className = 'admin-card';
            card.setAttribute('data-category', 'course');
            card.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;">
                    <div style="display:flex; align-items:center; gap: 15px;">
                        <h3 style="color:var(--accent-yellow);font-size:1.1rem;text-transform:capitalize;font-weight:700;margin:0;">Programa: <span style="color:white">${key}</span></h3>
                        <select class="admin-input course-status-select" data-key="${key}" style="font-size:0.85rem; padding:4px 8px; width:auto; cursor:pointer;">
                            <option value="draft" ${currentStatus === 'draft' ? 'selected' : ''}>Borrador</option>
                            <option value="published" ${currentStatus === 'published' ? 'selected' : ''}>Publicado</option>
                            <option value="suspended" ${currentStatus === 'suspended' ? 'selected' : ''}>Suspendido</option>
                            <option value="archived" ${currentStatus === 'archived' ? 'selected' : ''}>Archivado</option>
                        </select>
                    </div>
                    <button class="admin-delete-course-btn btn-danger" data-key="${key}" style="padding:6px 12px;font-size:0.8rem;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:4px;border:none;"><i data-lucide="trash-2" style="width:14px;height:14px;"></i>Eliminar Curso</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Título del Curso</label>
                        <input type="text" class="admin-input course-title" data-key="${key}" value="${course.title}">
                    </div>
                    <div>
                        <label class="admin-label" style="display:flex; justify-content:space-between; align-items:center;">
                            Visualización (Filename) 
                            <img src="${course.viz}" style="height:24px; border-radius:4px; border: 1px solid rgba(255,255,255,0.2);" onerror="this.style.display='none'" onload="this.style.display='block'" id="img-preview-${key}">
                        </label>
                        <input type="text" class="admin-input course-viz" data-key="${key}" value="${course.viz}" oninput="document.getElementById('img-preview-${key}').src = this.value">
                    </div>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Descripción Corta (Landing Page)</label>
                    <textarea class="admin-textarea course-desc" data-key="${key}" rows="2">${course.desc || ''}</textarea>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Especificaciones de Cabecera (Separadas por comas)</label>
                    <input type="text" class="admin-input course-specs" data-key="${key}" value="${course.specs.join(', ')}">
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label" style="display:flex;justify-content:space-between;align-items:center;">
                        Módulos y Temas
                        <button class="admin-add-module-btn btn-primary" data-key="${key}" style="padding:6px 12px;font-size:0.8rem;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:4px;border:none;"><i data-lucide="plus" style="width:14px;height:14px;"></i>Añadir Módulo</button>
                    </label>
                    <div class="course-modules-inputs" data-key="${key}" style="display:flex;flex-direction:column;gap:10px;">
                        ${course.modules.map((mod, modIdx) => `
                            <div style="background:rgba(0,0,0,0.2);padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.05);position:relative;">
                                <button class="admin-remove-module-btn btn-danger" data-key="${key}" data-mod-idx="${modIdx}" style="position:absolute;top:12px;right:12px;width:28px;height:28px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:6px;cursor:pointer;border:none;" aria-label="Eliminar módulo"><i data-lucide="x" style="width:14px;height:14px;"></i></button>
                                <input type="text" class="admin-input module-name" data-mod-idx="${modIdx}" value="${mod.name}" style="margin-bottom:8px;font-weight:700;width:calc(100% - 40px);">
                                <textarea class="admin-textarea module-topics" data-mod-idx="${modIdx}" rows="2" placeholder="Temas separados por comas">${mod.topics.join(', ')}</textarea>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <label class="admin-label">Beneficios Extra (Separados por comas)</label>
                    <textarea class="admin-textarea course-bonus" data-key="${key}" rows="2">${course.bonus.join(', ')}</textarea>
                </div>
            `;
            container.appendChild(card);
        });

        // Event listeners for courses
        container.querySelectorAll('.admin-delete-course-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-key');
                if (confirm(`¿Estás seguro de que quieres eliminar el curso completo "${courseData[key].title}"? Esta acción no se puede deshacer.`)) {
                    syncCourseDOM(); 
                    delete courseData[key];
                    renderAdminCourses();
                }
            });
        });

        container.querySelectorAll('.admin-add-module-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-key');
                syncCourseDOM();
                if (!courseData[key].modules) courseData[key].modules = [];
                courseData[key].modules.push({ name: "Nuevo Módulo", topics: [] });
                renderAdminCourses();
            });
        });

        container.querySelectorAll('.admin-remove-module-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-key');
                const modIdx = parseInt(btn.getAttribute('data-mod-idx'));
                if(confirm("¿Eliminar este módulo?")) {
                    syncCourseDOM();
                    courseData[key].modules.splice(modIdx, 1);
                    renderAdminCourses();
                }
            });
        });

        if(window.lucide) { lucide.createIcons(); }
    }

    function renderAdminQuestions() {
        const container = document.getElementById('admin-questions-list');
        if (!container) return;
        container.innerHTML = `
            <div class="admin-card" style="margin-bottom:25px;">
                <div class="admin-section-title"><i data-lucide="monitor" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Configuración General del Campus Digital y Herramientas</div>
                <div style="margin-bottom:15px; background:rgba(0,0,0,0.2); padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,0.05);">
                    <label style="display:flex; align-items:center; gap:8px; cursor:pointer; color:white; font-size:0.9rem; font-weight:600;">
                        <input type="checkbox" id="admin-campus-enabled" ${siteData.campus && siteData.campus.enabled !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow); width:18px; height:18px;">
                        Mostrar Sección Campus Digital en la Web
                    </label>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Título del Encabezado</label>
                        <input type="text" id="admin-campus-title" class="admin-input" value="${(siteData.campus?.title || 'Campus Digital del Alumno').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label class="admin-label">Imagen de Sección</label>
                        <input type="text" id="admin-campus-imgurl" class="admin-input" value="${(siteData.campus?.imageUrl || 'section_campus.webp').replace(/"/g, '&quot;')}">
                    </div>
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Subtítulo del Campus</label>
                    <input type="text" id="admin-campus-subtitle" class="admin-input" value="${(siteData.campus?.subtitle || 'Herramientas interactivas y simuladores teóricos para el aprendizaje y práctica de vuelo.').replace(/"/g, '&quot;')}">
                </div>
                <div style="margin-bottom:15px;">
                    <label class="admin-label">Título de la Consola / Terminal</label>
                    <input type="text" id="admin-campus-consoletitle" class="admin-input" value="${(siteData.campus?.consoleTitle || 'TERMINAL ACADÉMICA / SIMULADOR').replace(/"/g, '&quot;')}">
                </div>

                <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:15px; margin-top:15px;">
                    <div style="font-weight:700; color:var(--accent-yellow); font-size:0.85rem; margin-bottom:10px;">Calculadora VANT</div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:10px;">
                        <input type="text" id="admin-campus-calctitle" class="admin-input" value="${(siteData.campus?.calcTitle || 'Calculadora VANT').replace(/"/g, '&quot;')}" placeholder="Título Tarjeta">
                        <input type="text" id="admin-campus-calcbtn" class="admin-input" value="${(siteData.campus?.calcBtnText || 'Clasificar Aeronave').replace(/"/g, '&quot;')}" placeholder="Texto del Botón">
                    </div>
                    <input type="text" id="admin-campus-calcdesc" class="admin-input" value="${(siteData.campus?.calcDesc || 'Ingresa el peso de tu dron (en gramos) para verificar su clasificación y los requisitos de la ANAC Argentina.').replace(/"/g, '&quot;')}" placeholder="Descripción Tarjeta">
                </div>

                <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:15px; margin-top:15px;">
                    <div style="font-weight:700; color:var(--accent-yellow); font-size:0.85rem; margin-bottom:10px;">Verificador de Espacio Aéreo</div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:10px;">
                        <input type="text" id="admin-campus-geotitle" class="admin-input" value="${(siteData.campus?.geoTitle || 'Verificador de Espacio Aéreo').replace(/"/g, '&quot;')}" placeholder="Título Tarjeta">
                        <input type="text" id="admin-campus-geobtn" class="admin-input" value="${(siteData.campus?.geoBtnText || 'Consultar Espacio Aéreo').replace(/"/g, '&quot;')}" placeholder="Texto del Botón">
                    </div>
                    <input type="text" id="admin-campus-geodesc" class="admin-input" value="${(siteData.campus?.geoDesc || 'Evalúa si tu zona de práctica está fuera de las exclusiones de aeropuertos de la ANAC.').replace(/"/g, '&quot;')}" placeholder="Descripción Tarjeta">
                </div>

                <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:15px; margin-top:15px;">
                    <div style="font-weight:700; color:var(--accent-yellow); font-size:0.85rem; margin-bottom:10px;">Examen de Competencia</div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:10px;">
                        <input type="text" id="admin-campus-examtitle" class="admin-input" value="${(siteData.campus?.examTitle || 'Examen de Competencia').replace(/"/g, '&quot;')}" placeholder="Título Tarjeta">
                        <input type="text" id="admin-campus-exambtn" class="admin-input" value="${(siteData.campus?.examBtnText || 'Iniciar Simulador Examen').replace(/"/g, '&quot;')}" placeholder="Texto del Botón">
                    </div>
                    <input type="text" id="admin-campus-examdesc" class="admin-input" value="${(siteData.campus?.examDesc || 'Pon a prueba tus conocimientos sobre normativa ANAC, seguridad y meteorología en Categoría Abierta.').replace(/"/g, '&quot;')}" placeholder="Descripción Tarjeta">
                </div>
            </div>
        `;

        EXAM_QUESTIONS.forEach((q, qIdx) => {
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                    <h5 style="color:white;font-weight:600;font-size:0.95rem;">Pregunta ${qIdx + 1}</h5>
                    <button class="admin-delete-q-btn btn-outline" data-q-idx="${qIdx}" style="padding:4px 8px;font-size:0.75rem;border-color:rgba(255,74,74,0.2);color:#ff4a4a;background:none;border-radius:6px;cursor:pointer;"><i data-lucide="trash" style="width:12px;height:12px;vertical-align:middle;margin-right:4px;"></i>Eliminar</button>
                </div>
                <div style="margin-bottom:12px;">
                    <label class="admin-label">Pregunta</label>
                    <input type="text" class="admin-input question-text" data-q-idx="${qIdx}" value="${q.q}">
                </div>
                <div style="display:flex;flex-direction:column;gap:8px;">
                    <label class="admin-label">Opciones (Marque el radio de la respuesta correcta)</label>
                    ${q.opts.map((opt, optIdx) => `
                        <div style="display:flex;align-items:center;gap:10px;">
                            <input type="radio" name="correct-opt-${qIdx}" class="question-correct-radio" data-q-idx="${qIdx}" data-opt-idx="${optIdx}" ${opt.correct ? 'checked' : ''} style="cursor:pointer;width:16px;height:16px;accent-color:var(--accent-yellow);">
                            <input type="text" class="admin-input question-opt-text" data-q-idx="${qIdx}" data-opt-idx="${optIdx}" value="${opt.text}" style="flex:1;">
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(card);
        });
        
        container.querySelectorAll('.admin-delete-q-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qIdx = parseInt(btn.getAttribute('data-q-idx'));
                EXAM_QUESTIONS.splice(qIdx, 1);
                renderAdminQuestions();
            });
        });
        lucide.createIcons();
    }

    function renderAdminContact() {
        const container = document.getElementById('admin-contact-form');
        if (!container) return;
        container.innerHTML = `
            <div>
                <label class="admin-label">Correo Electrónico de Contacto</label>
                <input type="email" id="admin-c-email" class="admin-input" value="${contactData.email}">
            </div>
            <div>
                <label class="admin-label">Teléfono / Celular Fijo</label>
                <input type="text" id="admin-c-phone" class="admin-input" value="${contactData.phone}">
            </div>
            <div>
                <label class="admin-label">Dirección / Locación física</label>
                <input type="text" id="admin-c-address" class="admin-input" value="${contactData.address}">
            </div>
            <div>
                <label class="admin-label">Número de WhatsApp (Sin signos ni espacios, ej: 5491136592233)</label>
                <input type="text" id="admin-c-whatsapp" class="admin-input" value="${contactData.whatsapp}">
            </div>
        `;
    }

    function renderAdminTestimonials() {
        const container = document.getElementById('admin-testimonials-list');
        if (!container) return;
        container.innerHTML = '';

        testimonialsData.forEach((testimonio, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.setAttribute('data-category', 'contact');
            card.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                    <h5 style="color:white;font-weight:600;font-size:0.95rem;">Reseña ${idx + 1}</h5>
                    <button class="admin-delete-testimonial-btn btn-danger" data-idx="${idx}" style="padding:4px 8px;font-size:0.75rem;border-radius:6px;cursor:pointer;border:none;display:flex;align-items:center;"><i data-lucide="trash-2" style="width:12px;height:12px;margin-right:4px;"></i>Eliminar</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Nombre del Alumno</label>
                        <input type="text" class="admin-input testimonial-name" value="${testimonio.name}">
                    </div>
                    <div>
                        <label class="admin-label">Rol / Cargo</label>
                        <input type="text" class="admin-input testimonial-role" value="${testimonio.role}">
                    </div>
                </div>
                <div>
                    <label class="admin-label">Comentario</label>
                    <textarea class="admin-textarea testimonial-quote" rows="3">${testimonio.quote}</textarea>
                </div>
            `;
            container.appendChild(card);
        });

        container.querySelectorAll('.admin-delete-testimonial-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-idx'));
                if(confirm("¿Eliminar este testimonio?")) {
                    testimonialsData.splice(idx, 1);
                    renderAdminTestimonials();
                }
           });
        });

           if (cWhatsappEl) cWhatsappEl.textContent = contactData.whatsapp;

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

        if (window.lucide) { lucide.createIcons(); }
    }

    function syncPricingFromDOM() {
        if (!siteData.pricing) siteData.pricing = JSON.parse(JSON.stringify(defaultPlans));
        const cards = document.querySelectorAll('#admin-pricing-list .admin-card');
        if (cards.length === 0) return;

        siteData.pricing = Array.from(cards).map((card, idx) => {
            const planId = card.getAttribute('data-plan-id') || `plan_${Date.now()}_${idx}`;
            const name = card.querySelector('.plan-name')?.value.trim() || 'Nuevo Plan';
            const price = card.querySelector('.plan-price')?.value.trim() || 'Consultar valor';
            const period = card.querySelector('.plan-period')?.value.trim() || '';
            const note = card.querySelector('.plan-note')?.value.trim() || '';
            const description = card.querySelector('.plan-description')?.value.trim() || '';
            const badge = card.querySelector('.plan-badge')?.value.trim() || '';
            const featured = card.querySelector('.plan-featured')?.checked || false;
            const status = card.querySelector('.plan-status')?.value || 'published';
            const visible = card.querySelector('.plan-visible')?.checked !== false;
            const btnText = card.querySelector('.plan-btn-text')?.value.trim() || 'Consultar';
            const btnClass = card.querySelector('.plan-btn-class')?.value || (featured ? 'btn-primary' : 'btn-outline');
            const featuresRaw = card.querySelector('.plan-features')?.value || '';
            const features = featuresRaw.split('\n').map(f => f.trim()).filter(Boolean);

            return {
                id: planId,
                name,
                price,
                period,
                note,
                description,
                badge,
                featured,
                status,
                visible,
                order: idx + 1,
                btnText,
                btnClass,
                features
            };
        });
    }

    function renderAdminPricing() {
        const container = document.getElementById('admin-pricing-list');
        if (!container) return;
        container.innerHTML = `
            <div class="admin-card" style="margin-bottom:20px;">
                <div class="admin-section-title"><i data-lucide="type" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Encabezado de la Sección Precios</div>
                <div style="margin-bottom:12px;">
                    <label class="admin-label">Título de la Sección</label>
                    <input type="text" id="admin-pricing-header-title" class="admin-input" value="${(siteData.pricingHeader?.title || 'Inversión en tu Formación').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Subtítulo de la Sección</label>
                    <input type="text" id="admin-pricing-header-subtitle" class="admin-input" value="${(siteData.pricingHeader?.subtitle || 'Precios claros y planes de financiación sin interés.').replace(/"/g, '&quot;')}">
                </div>
            </div>
        `;

        if (!siteData.pricing || !Array.isArray(siteData.pricing) || siteData.pricing.length === 0) {
            siteData.pricing = JSON.parse(JSON.stringify(defaultPlans));
        }

        siteData.pricing.sort((a, b) => (a.order || 0) - (b.order || 0));

        siteData.pricing.forEach((plan, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.setAttribute('data-category', 'pricing');
            card.setAttribute('data-plan-id', plan.id || `plan_${idx}`);
            card.style.borderLeft = plan.featured ? '4px solid var(--accent-yellow)' : '1px solid rgba(255,255,255,0.08)';

            const featuresText = Array.isArray(plan.features) ? plan.features.join('\n') : '';

            card.innerHTML = `
                <div style="display:flex; justify-space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px; flex-wrap:wrap; gap:10px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <h4 style="color:var(--accent-yellow); font-size:1.05rem; font-weight:700; margin:0;">Plan #${idx + 1}: ${plan.name}</h4>
                        <select class="admin-input plan-status" style="font-size:0.8rem; padding:4px 8px; width:auto; cursor:pointer;">
                            <option value="published" ${plan.status === 'published' ? 'selected' : ''}>Publicado</option>
                            <option value="draft" ${plan.status === 'draft' ? 'selected' : ''}>Borrador</option>
                            <option value="suspended" ${plan.status === 'suspended' ? 'selected' : ''}>Suspendido</option>
                            <option value="archived" ${plan.status === 'archived' ? 'selected' : ''}>Archivado</option>
                        </select>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                            <input type="checkbox" class="plan-visible" ${plan.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                        </label>
                        <button type="button" class="btn btn-outline admin-plan-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-outline admin-plan-move-down" data-idx="${idx}" ${idx === siteData.pricing.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-danger admin-plan-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Nombre del Plan</label>
                        <input type="text" class="admin-input plan-name" value="${(plan.name || '').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label class="admin-label">Precio / Valor</label>
                        <input type="text" class="admin-input plan-price" value="${(plan.price || '').replace(/"/g, '&quot;')}" placeholder="Ej: Consultar valor o $120.000">
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Subtítulo / Duración Corta</label>
                        <input type="text" class="admin-input plan-description" value="${(plan.description || '').replace(/"/g, '&quot;')}" placeholder="Ej: Teoría & Práctica básica · 15 días">
                    </div>
                    <div>
                        <label class="admin-label">Nota Financiera / Cuotas</label>
                        <input type="text" class="admin-input plan-note" value="${(plan.note || '').replace(/"/g, '&quot;')}" placeholder="Ej: Cuotas sin interés o Financiación disponible">
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Insignia / Badge Superior (Opcional)</label>
                        <input type="text" class="admin-input plan-badge" value="${(plan.badge || '').replace(/"/g, '&quot;')}" placeholder="Ej: ⭐ Más elegido">
                    </div>
                    <div style="display:flex; align-items:center; gap:20px; margin-top:20px;">
                        <label style="display:flex; align-items:center; gap:8px; font-size:0.9rem; color:white; cursor:pointer;">
                            <input type="checkbox" class="plan-featured" ${plan.featured ? 'checked' : ''} style="accent-color:var(--accent-yellow); width:16px; height:16px;">
                            Destacar Tarjeta (Featured / Borde Dorado)
                        </label>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Texto del Botón CTA</label>
                        <input type="text" class="admin-input plan-btn-text" value="${(plan.btnText || 'Consultar').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label class="admin-label">Estilo del Botón CTA</label>
                        <select class="admin-input plan-btn-class">
                            <option value="btn-outline" ${plan.btnClass === 'btn-outline' ? 'selected' : ''}>Contorno (btn-outline)</option>
                            <option value="btn-primary" ${plan.btnClass === 'btn-primary' ? 'selected' : ''}>Principal Amarillo (btn-primary)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="admin-label">Lista de Beneficios / Características (1 por línea)</label>
                    <textarea class="admin-textarea plan-features" rows="4" placeholder="Un beneficio por cada línea...">${featuresText}</textarea>
                </div>
            `;
            container.appendChild(card);
        });

        bindPricingEvents();
    }

    function bindPricingEvents() {
        const container = document.getElementById('admin-pricing-list');
        if (!container) return;

        container.querySelectorAll('.admin-plan-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar este plan de inversión?')) {
                    syncPricingFromDOM();
                    siteData.pricing.splice(idx, 1);
                    renderAdminPricing();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-plan-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncPricingFromDOM();
                    const temp = siteData.pricing[idx];
                    siteData.pricing[idx] = siteData.pricing[idx - 1];
                    siteData.pricing[idx - 1] = temp;
                    renderAdminPricing();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-plan-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.pricing.length - 1) {
                    syncPricingFromDOM();
                    const temp = siteData.pricing[idx];
                    siteData.pricing[idx] = siteData.pricing[idx + 1];
                    siteData.pricing[idx + 1] = temp;
                    renderAdminPricing();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('input, select, textarea').forEach(input => {
            input.oninput = () => {
                syncPricingFromDOM();
                syncToPreview();
            };
        });

        if (window.lucide) { lucide.createIcons(); }
    }

    function syncAboutFromDOM() {
        if (!siteData.about) siteData.about = {};
        const hTitle = document.getElementById('admin-about-htitle');
        const hSub = document.getElementById('admin-about-hsub');
        const mTitle = document.getElementById('admin-about-mtitle');
        const badge = document.getElementById('admin-about-badge');
        const img = document.getElementById('admin-about-img');
        const pText = document.getElementById('admin-about-paragraphs');

        if (hTitle) siteData.about.headerTitle = hTitle.value.trim();
        if (hSub) siteData.about.headerSubtitle = hSub.value.trim();
        if (mTitle) siteData.about.mainTitle = mTitle.value.trim();
        if (badge) siteData.about.badgeText = badge.value.trim();
        if (img) siteData.about.imageUrl = img.value.trim();
        if (pText) siteData.about.paragraphs = pText.value.split('\n').map(p => p.trim()).filter(Boolean);

        const valDivs = document.querySelectorAll('.admin-about-value-item');
        if (valDivs.length > 0) {
            siteData.about.values = Array.from(valDivs).map(vDiv => ({
                title: vDiv.querySelector('.value-title')?.value.trim() || '',
                desc: vDiv.querySelector('.value-desc')?.value.trim() || ''
            }));
        }

        const instCards = document.querySelectorAll('.admin-instructor-card');
        if (instCards.length > 0) {
            siteData.instructors = Array.from(instCards).map((card, idx) => {
                const instId = card.getAttribute('data-inst-id') || `inst_${Date.now()}_${idx}`;
                return {
                    id: instId,
                    name: card.querySelector('.inst-name')?.value.trim() || 'Nuevo Instructor',
                    role: card.querySelector('.inst-role')?.value.trim() || 'Instructor de Vuelo',
                    description: card.querySelector('.inst-desc')?.value.trim() || '',
                    photo: card.querySelector('.inst-photo')?.value.trim() || '',
                    status: card.querySelector('.inst-status')?.value || 'published',
                    visible: card.querySelector('.inst-visible')?.checked !== false,
                    order: idx + 1
                };
            });
        }
    }

    function renderAdminAbout() {
        const container = document.getElementById('admin-about-container');
        if (!container) return;
        container.innerHTML = '';

        if (!siteData.about) siteData.about = JSON.parse(JSON.stringify(defaultAbout));
        if (!siteData.instructors || !Array.isArray(siteData.instructors) || siteData.instructors.length === 0) {
            siteData.instructors = JSON.parse(JSON.stringify(defaultInstructors));
        }

        const paragraphsText = Array.isArray(siteData.about.paragraphs) ? siteData.about.paragraphs.join('\n\n') : '';

        const aboutCard = document.createElement('div');
        aboutCard.className = 'admin-card';
        aboutCard.innerHTML = `
            <div class="admin-section-title"><i data-lucide="info" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Contenidos de la Sección "¿Quiénes Somos?"</div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                <div>
                    <label class="admin-label">Título Cabecera (H2)</label>
                    <input type="text" id="admin-about-htitle" class="admin-input" value="${(siteData.about.headerTitle || '¿Quiénes Somos?').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Subtítulo Cabecera</label>
                    <input type="text" id="admin-about-hsub" class="admin-input" value="${(siteData.about.headerSubtitle || '').replace(/"/g, '&quot;')}">
                </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                <div>
                    <label class="admin-label">Título Principal Interno (con gradiente)</label>
                    <input type="text" id="admin-about-mtitle" class="admin-input" value="${(siteData.about.mainTitle || '').replace(/"/g, '&quot;')}">
                    <small style="color:var(--text-secondary);font-size:0.8rem;">Puedes usar &lt;span class="gradient-text"&gt;Texto&lt;/span&gt;.</small>
                </div>
                <div>
                    <label class="admin-label">Ruta o URL de Imagen Institucional</label>
                    <input type="text" id="admin-about-img" class="admin-input" value="${(siteData.about.imageUrl || 'section_nosotros.webp').replace(/"/g, '&quot;')}">
                </div>
            </div>

            <div style="margin-bottom:15px;">
                <label class="admin-label">Texto de la Insignia Inferior (Badge)</label>
                <input type="text" id="admin-about-badge" class="admin-input" value="${(siteData.about.badgeText || '').replace(/"/g, '&quot;')}">
            </div>

            <div style="margin-bottom:15px;">
                <label class="admin-label">Párrafos Institucionales (Separe cada párrafo con una línea en blanco)</label>
                <textarea id="admin-about-paragraphs" class="admin-textarea" rows="4">${paragraphsText}</textarea>
            </div>

            <div>
                <label class="admin-label" style="margin-bottom:10px; display:block;">Tarjetas de Valores Pilares</label>
                <div style="display:flex; flex-direction:column; gap:10px;">
                    ${(siteData.about.values || []).map((val, vIdx) => `
                        <div class="admin-about-value-item" style="display:grid; grid-template-columns:1fr 2fr; gap:10px; background:rgba(255,255,255,0.03); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.08);">
                            <input type="text" class="admin-input value-title" value="${(val.title || '').replace(/"/g, '&quot;')}" placeholder="Título del Valor">
                            <input type="text" class="admin-input value-desc" value="${(val.desc || '').replace(/"/g, '&quot;')}" placeholder="Descripción breve">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(aboutCard);

        const teamTitle = document.createElement('div');
        teamTitle.className = 'admin-section-title';
        teamTitle.style.marginTop = '10px';
        teamTitle.innerHTML = `<i data-lucide="users" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Equipo de Instructores y Docentes`;
        container.appendChild(teamTitle);

        siteData.instructors.sort((a, b) => (a.order || 0) - (b.order || 0));

        siteData.instructors.forEach((ins, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-card admin-instructor-card';
            card.setAttribute('data-category', 'team');
            card.setAttribute('data-inst-id', ins.id || `inst_${idx}`);

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px; flex-wrap:wrap; gap:10px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <h4 style="color:var(--accent-yellow); font-size:1.05rem; font-weight:700; margin:0;">Instructor #${idx + 1}: ${ins.name}</h4>
                        <select class="admin-input inst-status" style="font-size:0.8rem; padding:4px 8px; width:auto; cursor:pointer;">
                            <option value="published" ${ins.status === 'published' ? 'selected' : ''}>Publicado</option>
                            <option value="draft" ${ins.status === 'draft' ? 'selected' : ''}>Borrador</option>
                            <option value="suspended" ${ins.status === 'suspended' ? 'selected' : ''}>Suspendido</option>
                            <option value="archived" ${ins.status === 'archived' ? 'selected' : ''}>Archivado</option>
                        </select>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                            <input type="checkbox" class="inst-visible" ${ins.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                        </label>
                        <button type="button" class="btn btn-outline admin-inst-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-outline admin-inst-move-down" data-idx="${idx}" ${idx === siteData.instructors.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-danger admin-inst-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                    <div>
                        <label class="admin-label">Nombre y Titulación</label>
                        <input type="text" class="admin-input inst-name" value="${(ins.name || '').replace(/"/g, '&quot;')}" placeholder="Ej: Ing. Roberto Salinas">
                    </div>
                    <div>
                        <label class="admin-label">Cargo / Rol en la Escuela</label>
                        <input type="text" class="admin-input inst-role" value="${(ins.role || '').replace(/"/g, '&quot;')}" placeholder="Ej: Director de Instrucción">
                    </div>
                </div>

                <div style="margin-bottom:15px;">
                    <label class="admin-label">Ruta o URL de la Fotografía / Avatar</label>
                    <input type="text" class="admin-input inst-photo" value="${(ins.photo || '').replace(/"/g, '&quot;')}" placeholder="Ej: instructor_roberto.webp o dejar vacío para ícono por defecto">
                </div>

                <div>
                    <label class="admin-label">Resumen de Experiencia / Biografía Breve</label>
                    <textarea class="admin-textarea inst-desc" rows="2" placeholder="Breve perfil profesional...">${ins.description || ''}</textarea>
                </div>
            `;
            container.appendChild(card);
        });

        bindAboutEvents();
    }

    function bindAboutEvents() {
        const container = document.getElementById('admin-about-container');
        if (!container) return;

        container.querySelectorAll('.admin-inst-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar este instructor del equipo?')) {
                    syncAboutFromDOM();
                    siteData.instructors.splice(idx, 1);
                    renderAdminAbout();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-inst-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncAboutFromDOM();
                    const temp = siteData.instructors[idx];
                    siteData.instructors[idx] = siteData.instructors[idx - 1];
                    siteData.instructors[idx - 1] = temp;
                    renderAdminAbout();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-inst-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.instructors.length - 1) {
                    syncAboutFromDOM();
                    const temp = siteData.instructors[idx];
                    siteData.instructors[idx] = siteData.instructors[idx + 1];
                    siteData.instructors[idx + 1] = temp;
                    renderAdminAbout();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('input, select, textarea').forEach(input => {
            input.oninput = () => {
                syncAboutFromDOM();
                syncToPreview();
            };
        });

        if (window.lucide) { lucide.createIcons(); }
    }

    function syncHeaderFooterFromDOM() {
        if (!siteData.headerFooter) siteData.headerFooter = JSON.parse(JSON.stringify(defaultHeaderFooter));
        const bName = document.getElementById('admin-hf-brand-name');
        const bSub = document.getElementById('admin-hf-brand-sub');
        const fSub = document.getElementById('admin-hf-footer-sub');
        const fNote = document.getElementById('admin-hf-footer-note');
        const copy = document.getElementById('admin-hf-copyright');

        if (bName) siteData.headerFooter.brandName = bName.value.trim();
        if (bSub) siteData.headerFooter.brandSub = bSub.value.trim();
        if (fSub) siteData.headerFooter.footerSub = fSub.value.trim();
        if (fNote) siteData.headerFooter.footerLegalNote = fNote.value.trim();
        if (copy) siteData.headerFooter.copyright = copy.value.trim();

        const navCards = document.querySelectorAll('.admin-nav-item-card');
        if (navCards.length > 0) {
            siteData.headerFooter.navigation = Array.from(navCards).map((card, idx) => {
                const navId = card.getAttribute('data-nav-id') || `nav_${Date.now()}_${idx}`;
                return {
                    id: navId,
                    label: card.querySelector('.nav-label')?.value.trim() || 'Ítem',
                    href: card.querySelector('.nav-href')?.value.trim() || '#',
                    isBtn: card.querySelector('.nav-isbtn')?.checked || false,
                    btnClass: card.querySelector('.nav-btnclass')?.value || 'btn-primary',
                    visible: card.querySelector('.nav-visible')?.checked !== false,
                    order: idx + 1
                };
            });
        }

        const socialCards = document.querySelectorAll('.admin-social-item-card');
        if (socialCards.length > 0) {
            siteData.headerFooter.socials = Array.from(socialCards).map((card, idx) => {
                const socId = card.getAttribute('data-soc-id') || `soc_${Date.now()}_${idx}`;
                return {
                    id: socId,
                    platform: card.querySelector('.social-platform')?.value.trim() || 'Red Social',
                    icon: card.querySelector('.social-icon')?.value.trim() || 'link',
                    url: card.querySelector('.social-url')?.value.trim() || '#',
                    visible: card.querySelector('.social-visible')?.checked !== false,
                    order: idx + 1
                };
            });
        }

        const legalCards = document.querySelectorAll('.admin-legal-item-card');
        if (legalCards.length > 0) {
            siteData.headerFooter.legalLinks = Array.from(legalCards).map((card, idx) => {
                const legId = card.getAttribute('data-leg-id') || `leg_${Date.now()}_${idx}`;
                return {
                    id: legId,
                    label: card.querySelector('.legal-label')?.value.trim() || 'Enlace Legal',
                    href: card.querySelector('.legal-href')?.value.trim() || '#',
                    visible: card.querySelector('.legal-visible')?.checked !== false,
                    order: idx + 1
                };
            });
        }
    }

    function renderAdminHeaderFooter() {
        const container = document.getElementById('admin-headerfooter-container');
        if (!container) return;
        container.innerHTML = '';

        if (!siteData.headerFooter) siteData.headerFooter = JSON.parse(JSON.stringify(defaultHeaderFooter));
        const hf = siteData.headerFooter;

        const brandCard = document.createElement('div');
        brandCard.className = 'admin-card';
        brandCard.innerHTML = `
            <div class="admin-section-title"><i data-lucide="shield" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Identidad e Identificadores Institucionales (Header & Footer)</div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                <div>
                    <label class="admin-label">Nombre Institucional (Navbar & Header)</label>
                    <input type="text" id="admin-hf-brand-name" class="admin-input" value="${(hf.brandName || 'HORUS DRON').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Subtítulo Institucional (Navbar)</label>
                    <input type="text" id="admin-hf-brand-sub" class="admin-input" value="${(hf.brandSub || '').replace(/"/g, '&quot;')}">
                </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
                <div>
                    <label class="admin-label">Subtítulo Footer</label>
                    <input type="text" id="admin-hf-footer-sub" class="admin-input" value="${(hf.footerSub || '').replace(/"/g, '&quot;')}">
                </div>
                <div>
                    <label class="admin-label">Nota Regulaciones (Footer)</label>
                    <input type="text" id="admin-hf-footer-note" class="admin-input" value="${(hf.footerLegalNote || '').replace(/"/g, '&quot;')}">
                </div>
            </div>

            <div>
                <label class="admin-label">Texto de Derechos Reservados (Copyright)</label>
                <input type="text" id="admin-hf-copyright" class="admin-input" value="${(hf.copyright || '').replace(/"/g, '&quot;')}">
            </div>
        `;
        container.appendChild(brandCard);

        const navHeader = document.createElement('div');
        navHeader.style.display = 'flex';
        navHeader.style.justifyContent = 'space-between';
        navHeader.style.alignItems = 'center';
        navHeader.style.marginTop = '10px';
        navHeader.innerHTML = `
            <div class="admin-section-title" style="margin:0;"><i data-lucide="menu" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Menú de Navegación Navbar</div>
            <button id="admin-add-nav-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Enlace</button>
        `;
        container.appendChild(navHeader);

        (hf.navigation || []).sort((a, b) => (a.order || 0) - (b.order || 0));
        (hf.navigation || []).forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-card admin-nav-item-card';
            card.setAttribute('data-nav-id', item.id || `nav_${idx}`);

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px; flex-wrap:wrap; gap:10px;">
                    <span style="color:var(--accent-yellow); font-weight:700; font-size:0.9rem;">Ítem #${idx + 1}: ${item.label}</span>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                            <input type="checkbox" class="nav-visible" ${item.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                        </label>
                        <button type="button" class="btn btn-outline admin-nav-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-outline admin-nav-move-down" data-idx="${idx}" ${idx === hf.navigation.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-danger admin-nav-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
                    <div>
                        <label class="admin-label">Etiqueta del Menú</label>
                        <input type="text" class="admin-input nav-label" value="${(item.label || '').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label class="admin-label">Enlace Destino (Href)</label>
                        <input type="text" class="admin-input nav-href" value="${(item.href || '#').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; margin-top:24px; cursor:pointer;">
                            <input type="checkbox" class="nav-isbtn" ${item.isBtn ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Formato Botón CTA
                        </label>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        const socialHeader = document.createElement('div');
        socialHeader.style.display = 'flex';
        socialHeader.style.justifyContent = 'space-between';
        socialHeader.style.alignItems = 'center';
        socialHeader.style.marginTop = '15px';
        socialHeader.innerHTML = `
            <div class="admin-section-title" style="margin:0;"><i data-lucide="share-2" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Redes Sociales (Footer)</div>
            <button id="admin-add-social-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Red</button>
        `;
        container.appendChild(socialHeader);

        (hf.socials || []).sort((a, b) => (a.order || 0) - (b.order || 0));
        (hf.socials || []).forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-card admin-social-item-card';
            card.setAttribute('data-soc-id', item.id || `soc_${idx}`);

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px; flex-wrap:wrap; gap:10px;">
                    <span style="color:var(--accent-yellow); font-weight:700; font-size:0.9rem;">Red #${idx + 1}: ${item.platform}</span>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                            <input type="checkbox" class="social-visible" ${item.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                        </label>
                        <button type="button" class="btn btn-outline admin-social-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-outline admin-social-move-down" data-idx="${idx}" ${idx === hf.socials.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-danger admin-social-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr 2fr; gap:12px;">
                    <div>
                        <label class="admin-label">Plataforma</label>
                        <input type="text" class="admin-input social-platform" value="${(item.platform || '').replace(/"/g, '&quot;')}" placeholder="Ej: Instagram">
                    </div>
                    <div>
                        <label class="admin-label">Ícono Lucide</label>
                        <input type="text" class="admin-input social-icon" value="${(item.icon || 'link').replace(/"/g, '&quot;')}" placeholder="Ej: instagram, youtube">
                    </div>
                    <div>
                        <label class="admin-label">URL / Enlace</label>
                        <input type="text" class="admin-input social-url" value="${(item.url || '#').replace(/"/g, '&quot;')}">
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        const legalHeader = document.createElement('div');
        legalHeader.style.display = 'flex';
        legalHeader.style.justifyContent = 'space-between';
        legalHeader.style.alignItems = 'center';
        legalHeader.style.marginTop = '15px';
        legalHeader.innerHTML = `
            <div class="admin-section-title" style="margin:0;"><i data-lucide="file-text" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Enlaces Legales (Footer)</div>
            <button id="admin-add-legal-btn" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem; display:flex; align-items:center; gap:6px;"><i data-lucide="plus" style="width:14px;height:14px;"></i> Agregar Enlace</button>
        `;
        container.appendChild(legalHeader);

        (hf.legalLinks || []).sort((a, b) => (a.order || 0) - (b.order || 0));
        (hf.legalLinks || []).forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'admin-card admin-legal-item-card';
            card.setAttribute('data-leg-id', item.id || `leg_${idx}`);

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px; flex-wrap:wrap; gap:10px;">
                    <span style="color:var(--accent-yellow); font-weight:700; font-size:0.9rem;">Legal #${idx + 1}: ${item.label}</span>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:white; cursor:pointer;">
                            <input type="checkbox" class="legal-visible" ${item.visible !== false ? 'checked' : ''} style="accent-color:var(--accent-yellow);"> Visible
                        </label>
                        <button type="button" class="btn btn-outline admin-legal-move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Subir"><i data-lucide="arrow-up" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-outline admin-legal-move-down" data-idx="${idx}" ${idx === hf.legalLinks.length - 1 ? 'disabled style="opacity:0.3;cursor:not-allowed;padding:4px 8px;"' : 'style="padding:4px 8px;"'} title="Bajar"><i data-lucide="arrow-down" style="width:14px;height:14px;"></i></button>
                        <button type="button" class="btn btn-danger admin-legal-delete" data-idx="${idx}" style="padding:4px 8px;" title="Eliminar"><i data-lucide="trash-2" style="width:14px;height:14px;"></i></button>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                    <div>
                        <label class="admin-label">Nombre del Documento</label>
                        <input type="text" class="admin-input legal-label" value="${(item.label || '').replace(/"/g, '&quot;')}">
                    </div>
                    <div>
                        <label class="admin-label">URL / Archivo PDF</label>
                        <input type="text" class="admin-input legal-href" value="${(item.href || '#').replace(/"/g, '&quot;')}">
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        bindHeaderFooterEvents();
    }

    function bindHeaderFooterEvents() {
        const container = document.getElementById('admin-headerfooter-container');
        if (!container) return;

        container.querySelectorAll('.admin-nav-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar este ítem del menú?')) {
                    syncHeaderFooterFromDOM();
                    siteData.headerFooter.navigation.splice(idx, 1);
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-nav-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeaderFooterFromDOM();
                    const temp = siteData.headerFooter.navigation[idx];
                    siteData.headerFooter.navigation[idx] = siteData.headerFooter.navigation[idx - 1];
                    siteData.headerFooter.navigation[idx - 1] = temp;
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-nav-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.headerFooter.navigation.length - 1) {
                    syncHeaderFooterFromDOM();
                    const temp = siteData.headerFooter.navigation[idx];
                    siteData.headerFooter.navigation[idx] = siteData.headerFooter.navigation[idx + 1];
                    siteData.headerFooter.navigation[idx + 1] = temp;
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-social-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar esta red social?')) {
                    syncHeaderFooterFromDOM();
                    siteData.headerFooter.socials.splice(idx, 1);
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-social-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeaderFooterFromDOM();
                    const temp = siteData.headerFooter.socials[idx];
                    siteData.headerFooter.socials[idx] = siteData.headerFooter.socials[idx - 1];
                    siteData.headerFooter.socials[idx - 1] = temp;
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-social-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.headerFooter.socials.length - 1) {
                    syncHeaderFooterFromDOM();
                    const temp = siteData.headerFooter.socials[idx];
                    siteData.headerFooter.socials[idx] = siteData.headerFooter.socials[idx + 1];
                    siteData.headerFooter.socials[idx + 1] = temp;
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-legal-delete').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (confirm('¿Eliminar este enlace legal?')) {
                    syncHeaderFooterFromDOM();
                    siteData.headerFooter.legalLinks.splice(idx, 1);
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-legal-move-up').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx > 0) {
                    syncHeaderFooterFromDOM();
                    const temp = siteData.headerFooter.legalLinks[idx];
                    siteData.headerFooter.legalLinks[idx] = siteData.headerFooter.legalLinks[idx - 1];
                    siteData.headerFooter.legalLinks[idx - 1] = temp;
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        container.querySelectorAll('.admin-legal-move-down').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-idx'));
                if (idx < siteData.headerFooter.legalLinks.length - 1) {
                    syncHeaderFooterFromDOM();
                    const temp = siteData.headerFooter.legalLinks[idx];
                    siteData.headerFooter.legalLinks[idx] = siteData.headerFooter.legalLinks[idx + 1];
                    siteData.headerFooter.legalLinks[idx + 1] = temp;
                    renderAdminHeaderFooter();
                    syncToPreview();
                }
            };
        });

        const addNavBtn = document.getElementById('admin-add-nav-btn');
        if (addNavBtn) {
            addNavBtn.onclick = (e) => {
                e.preventDefault();
                syncHeaderFooterFromDOM();
                if (!siteData.headerFooter.navigation) siteData.headerFooter.navigation = [];
                siteData.headerFooter.navigation.push({
                    id: `nav_${Date.now()}`,
                    label: "Nuevo Enlace",
                    href: "#",
                    isBtn: false,
                    btnClass: "",
                    visible: true,
                    order: siteData.headerFooter.navigation.length + 1
                });
                renderAdminHeaderFooter();
                syncToPreview();
            };
        }

        const addSocialBtn = document.getElementById('admin-add-social-btn');
        if (addSocialBtn) {
            addSocialBtn.onclick = (e) => {
                e.preventDefault();
                syncHeaderFooterFromDOM();
                if (!siteData.headerFooter.socials) siteData.headerFooter.socials = [];
                siteData.headerFooter.socials.push({
                    id: `soc_${Date.now()}`,
                    platform: "Nueva Red",
                    icon: "link",
                    url: "#",
                    visible: true,
                    order: siteData.headerFooter.socials.length + 1
                });
                renderAdminHeaderFooter();
                syncToPreview();
            };
        }

        const addLegalBtn = document.getElementById('admin-add-legal-btn');
        if (addLegalBtn) {
            addLegalBtn.onclick = (e) => {
                e.preventDefault();
                syncHeaderFooterFromDOM();
                if (!siteData.headerFooter.legalLinks) siteData.headerFooter.legalLinks = [];
                siteData.headerFooter.legalLinks.push({
                    id: `leg_${Date.now()}`,
                    label: "Nuevo Documento Legal",
                    href: "#",
                    visible: true,
                    order: siteData.headerFooter.legalLinks.length + 1
                });
                renderAdminHeaderFooter();
                syncToPreview();
            };
        }

        container.querySelectorAll('input, select, textarea').forEach(input => {
            input.oninput = () => {
                syncHeaderFooterFromDOM();
                syncToPreview();
            };
        });

        if (window.lucide) { lucide.createIcons(); }
    }

    document.getElementById('admin-add-question-btn')?.addEventListener('click', () => {
        EXAM_QUESTIONS.push({
            q: "Nueva pregunta de examen teórica",
            opts: [
                { text: "Opción correcta", correct: true },
                { text: "Opción incorrecta A", correct: false },
                { text: "Opción incorrecta B", correct: false }
            ]
        });
        renderAdminQuestions();
    });

    document.getElementById('admin-add-course-btn')?.addEventListener('click', () => {
        syncCourseDOM();
        const newKey = `curso_${Date.now()}`;
        courseData[newKey] = {
            title: "Nuevo Programa",
            desc: "Descripción breve del nuevo programa",
            viz: "placeholder.webp",
            status: "draft",
            specs: ["Espec 1", "Espec 2"],
            modules: [
                { name: "Módulo 1: Introducción", topics: ["Tema A", "Tema B"] }
            ],
            bonus: ["Beneficio 1"]
        };
        renderAdminCourses();
        setTimeout(() => {
            const container = document.getElementById('admin-courses-list');
            if (container) container.parentElement.scrollTop = container.parentElement.scrollHeight;
        }, 100);
    });

    document.getElementById('admin-add-testimonial-btn')?.addEventListener('click', () => {
        testimonialsData.push({
            name: "Nuevo Alumno",
            role: "Piloto",
            quote: "Escribe la reseña aquí..."
        });
        renderAdminTestimonials();
        setTimeout(() => {
            const container = document.getElementById('admin-testimonials-list');
            if (container) container.parentElement.scrollTop = container.parentElement.scrollHeight;
        }, 100);
    });

    document.getElementById('admin-add-plan-btn')?.addEventListener('click', () => {
        syncPricingFromDOM();
        if (!siteData.pricing) siteData.pricing = [];
        siteData.pricing.push({
            id: `plan_${Date.now()}`,
            name: "Nuevo Plan de Inversión",
            price: "Consultar valor",
            period: "30 días",
            note: "Financiación disponible",
            description: "Descripción breve del plan",
            badge: "",
            featured: false,
            btnText: "Consultar",
            btnClass: "btn-outline",
            status: "published",
            visible: true,
            order: siteData.pricing.length + 1,
            features: ["Beneficio 1", "Beneficio 2"]
        });
        renderAdminPricing();
        syncToPreview();
        setTimeout(() => {
            const container = document.getElementById('admin-pricing-list');
            if (container) container.parentElement.scrollTop = container.parentElement.scrollHeight;
        }, 100);
    });

    document.getElementById('admin-add-instructor-btn')?.addEventListener('click', () => {
        syncAboutFromDOM();
        if (!siteData.instructors) siteData.instructors = [];
        siteData.instructors.push({
            id: `inst_${Date.now()}`,
            name: "Nuevo Instructor",
            role: "Instructor de Vuelo",
            description: "Perfil profesional del nuevo instructor.",
            photo: "",
            status: "published",
            visible: true,
            order: siteData.instructors.length + 1
        });
        renderAdminAbout();
        syncToPreview();
        setTimeout(() => {
            const container = document.getElementById('admin-about-container');
            if (container) container.parentElement.scrollTop = container.parentElement.scrollHeight;
        }, 100);
    });

    // --- COMUNICACIÓN CON VISTA PREVIA ---
    function syncToPreview() {
        const iframe = document.getElementById('live-preview');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({
                type: 'SYNC_DATA',
                siteData: siteData,
                courseData: courseData,
                contactData: contactData,
                testimonialsData: testimonialsData
            }, '*');
        }
    }

    const saveBtn = document.getElementById('admin-save-all-btn');
    console.log('¿Existe el botón Guardar al inicio?', saveBtn);
    saveBtn?.addEventListener('click', () => {
        console.log('🟢 Botón Guardar presionado!');
        syncCourseDOM();
        syncHeroImagesFromDOM();
        syncHeroElementsFromDOM();
        syncPricingFromDOM();
        syncEnrollmentFromDOM();
        syncAboutFromDOM();
        syncHeaderFooterFromDOM();

        const qCards = document.querySelectorAll('#admin-questions-list .admin-card');
        EXAM_QUESTIONS = [];
        qCards.forEach((qCard, qIdx) => {
            const qText = qCard.querySelector('.question-text').value.trim();
            const optsInputs = qCard.querySelectorAll('.question-opt-text');
            const checkedRadio = qCard.querySelector('.question-correct-radio:checked');
            const correctOptIdx = checkedRadio ? parseInt(checkedRadio.getAttribute('data-opt-idx')) : 0;

            const opts = Array.from(optsInputs).map((optInput, optIdx) => {
                return {
                    text: optInput.value.trim(),
                    correct: optIdx === correctOptIdx
                };
            });

            EXAM_QUESTIONS.push({
                q: qText,
                opts: opts
            });
        });

        const cEmail = document.getElementById('admin-c-email');
        const cPhone = document.getElementById('admin-c-phone');
        const cAddress = document.getElementById('admin-c-address');
        const cWhatsapp = document.getElementById('admin-c-whatsapp');

        if (cEmail) contactData.email = cEmail.value.trim();
        if (cPhone) contactData.phone = cPhone.value.trim();
        if (cAddress) contactData.address = cAddress.value.trim();
        if (cWhatsapp) contactData.whatsapp = cWhatsapp.value.trim();

        // Guardar Settings (Hero, Marca y Estadísticas)
        const bLogoUrl = document.getElementById('admin-brand-logourl');
        const bLogoAlt = document.getElementById('admin-brand-logoalt');
        if (!siteData.brand) {
            siteData.brand = { logoUrl: "", logoAlt: "Horus Dron — Escuela de Vuelo" };
        }
        if (bLogoUrl) siteData.brand.logoUrl = bLogoUrl.value.trim();
        if (bLogoAlt) siteData.brand.logoAlt = bLogoAlt.value.trim();

        const hPill = document.getElementById('admin-hero-pill');
        const hTitle = document.getElementById('admin-hero-title');
        const hTagline = document.getElementById('admin-hero-tagline');
        const hDesc = document.getElementById('admin-hero-desc');
        if (hPill) siteData.hero.pill = hPill.value.trim();
        if (hTitle) siteData.hero.title = hTitle.value.trim();
        if (hTagline) siteData.hero.tagline = hTagline.value.trim();
        if (hDesc) siteData.hero.description = hDesc.value.trim();

        const cbEnabled = document.getElementById('admin-consultor-enabled');
        const cbIcon = document.getElementById('admin-consultor-icon');
        const cbTitle = document.getElementById('admin-consultor-title');
        const cbSub = document.getElementById('admin-consultor-subtitle');
        const cbBtn = document.getElementById('admin-consultor-btntext');
        if (!siteData.consultorBanner) siteData.consultorBanner = {};
        if (cbEnabled) siteData.consultorBanner.enabled = cbEnabled.checked;
        if (cbIcon) siteData.consultorBanner.icon = cbIcon.value.trim();
        if (cbTitle) siteData.consultorBanner.title = cbTitle.value.trim();
        if (cbSub) siteData.consultorBanner.subtitle = cbSub.value.trim();
        if (cbBtn) siteData.consultorBanner.btnText = cbBtn.value.trim();

        const chTitle = document.getElementById('admin-courses-header-title');
        const chSub = document.getElementById('admin-courses-header-subtitle');
        if (!siteData.coursesHeader) siteData.coursesHeader = {};
        if (chTitle) siteData.coursesHeader.title = chTitle.value.trim();
        if (chSub) siteData.coursesHeader.subtitle = chSub.value.trim();

        const prTitle = document.getElementById('admin-pricing-header-title');
        const prSub = document.getElementById('admin-pricing-header-subtitle');
        if (!siteData.pricingHeader) siteData.pricingHeader = {};
        if (prTitle) siteData.pricingHeader.title = prTitle.value.trim();
        if (prSub) siteData.pricingHeader.subtitle = prSub.value.trim();

        const sBg = document.getElementById('admin-stats-bg');
        if (!siteData.stats || typeof siteData.stats !== 'object') siteData.stats = {};
        if (sBg) siteData.stats.bgImage = sBg.value.trim();
        const statNums = document.querySelectorAll('.stat-item-num');
        const statSuffixes = document.querySelectorAll('.stat-item-suffix');
        const statLabels = document.querySelectorAll('.stat-item-label');
        if (statNums.length > 0) {
            siteData.stats.items = [];
            statNums.forEach((numInput, idx) => {
                siteData.stats.items.push({
                    number: parseInt(numInput.value) || 0,
                    suffix: statSuffixes[idx] ? statSuffixes[idx].value.trim() : '',
                    label: statLabels[idx] ? statLabels[idx].value.trim() : ''
                });
            });
        }

        const cpEnabled = document.getElementById('admin-campus-enabled');
        const cpTitle = document.getElementById('admin-campus-title');
        const cpSub = document.getElementById('admin-campus-subtitle');
        const cpImg = document.getElementById('admin-campus-imgurl');
        const cpConsole = document.getElementById('admin-campus-consoletitle');
        const cpCalcT = document.getElementById('admin-campus-calctitle');
        const cpCalcD = document.getElementById('admin-campus-calcdesc');
        const cpCalcB = document.getElementById('admin-campus-calcbtn');
        const cpGeoT = document.getElementById('admin-campus-geotitle');
        const cpGeoD = document.getElementById('admin-campus-geodesc');
        const cpGeoB = document.getElementById('admin-campus-geobtn');
        const cpExamT = document.getElementById('admin-campus-examtitle');
        const cpExamD = document.getElementById('admin-campus-examdesc');
        const cpExamB = document.getElementById('admin-campus-exambtn');

        if (!siteData.campus) siteData.campus = {};
        if (cpEnabled) siteData.campus.enabled = cpEnabled.checked;
        if (cpTitle) siteData.campus.title = cpTitle.value.trim();
        if (cpSub) siteData.campus.subtitle = cpSub.value.trim();
        if (cpImg) siteData.campus.imageUrl = cpImg.value.trim();
        if (cpConsole) siteData.campus.consoleTitle = cpConsole.value.trim();
        if (cpCalcT) siteData.campus.calcTitle = cpCalcT.value.trim();
        if (cpCalcD) siteData.campus.calcDesc = cpCalcD.value.trim();
        if (cpCalcB) siteData.campus.calcBtnText = cpCalcB.value.trim();
        if (cpGeoT) siteData.campus.geoTitle = cpGeoT.value.trim();
        if (cpGeoD) siteData.campus.geoDesc = cpGeoD.value.trim();
        if (cpGeoB) siteData.campus.geoBtnText = cpGeoB.value.trim();
        if (cpExamT) siteData.campus.examTitle = cpExamT.value.trim();
        if (cpExamD) siteData.campus.examDesc = cpExamD.value.trim();
        if (cpExamB) siteData.campus.examBtnText = cpExamB.value.trim();

        // Guardar Testimonios
        const tCards = document.querySelectorAll('#admin-testimonials-list .admin-card');
        testimonialsData = [];
        tCards.forEach(card => {
            testimonialsData.push({
                name: card.querySelector('.testimonial-name').value.trim(),
                role: card.querySelector('.testimonial-role').value.trim(),
                quote: card.querySelector('.testimonial-quote').value.trim()
            });
        });
        // --- FASE 1: REGLAS DE NEGOCIO Y VALIDACIÓN ---
        if (siteData.hero.title === '') {
            showToast('El Título Principal de la portada no puede quedar vacío.', 'error');
            document.getElementById('admin-hero-title')?.focus();
            return;
        }
        if (Object.keys(courseData).length === 0) {
            showToast('El sitio debe tener al menos 1 curso publicado.', 'error');
            return;
        }
        if (testimonialsData.length === 0) {
            showToast('Debes mantener al menos 1 testimonio en la plataforma.', 'error');
            return;
        }

        StorageService.saveData(STORAGE_KEYS.SITE_CONFIG, siteData);
        StorageService.saveData(STORAGE_KEYS.COURSES, courseData);
        StorageService.saveData(STORAGE_KEYS.QUESTIONS, EXAM_QUESTIONS);
        StorageService.saveData(STORAGE_KEYS.CONTACT, contactData);
        StorageService.saveData(STORAGE_KEYS.TESTIMONIALS, testimonialsData);

        // Enviar a Live Preview
        syncToPreview();
        isDirty = false;

        showToast('¡Cambios guardados y publicados exitosamente en la Web!', 'success');

        const status = document.getElementById('admin-save-status');
        if (status) {
            status.style.display = 'flex';
            setTimeout(() => {
                status.style.display = 'none';
            }, 3000);
        }
    });

    const importBtn = document.getElementById('admin-import-btn');
    const importFile = document.getElementById('admin-import-file');
    if (importBtn && importFile) {
        importBtn.addEventListener('click', () => importFile.click());
        importFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                try {
                    const data = JSON.parse(ev.target.result);
                    if (data.courses && data.questions && data.site) {
                        StorageService.saveData(STORAGE_KEYS.COURSES, data.courses);
                        StorageService.saveData(STORAGE_KEYS.QUESTIONS, data.questions);
                        StorageService.saveData(STORAGE_KEYS.SITE_CONFIG, data.site);
                        if (data.contact) StorageService.saveData(STORAGE_KEYS.CONTACT, data.contact);
                        if (data.testimonials) StorageService.saveData(STORAGE_KEYS.TESTIMONIALS, data.testimonials);
                        
                        isDirty = false;
                        showToast('Copia de seguridad restaurada exitosamente. Actualizando...', 'success');
                        setTimeout(() => window.location.reload(), 1200);
                    } else {
                        showToast('El archivo no parece ser un respaldo válido de Horus Dron.', 'error');
                    }
                } catch (err) {
                    showToast('Error al leer el archivo JSON de respaldo.', 'error');
                }
            };
            reader.readAsText(file);
        });
    }

    document.getElementById('admin-export-btn')?.addEventListener('click', () => {
        const fullConfig = {
            courses: courseData,
            questions: EXAM_QUESTIONS,
            contact: contactData,
            site: siteData,
            testimonials: testimonialsData
        };
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullConfig, null, 4));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href",     dataStr);
        downloadAnchor.setAttribute("download", "horus_config.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });

    document.getElementById('admin-reset-btn')?.addEventListener('click', () => {
        showConfirmModal('Restablecer Valores de Fábrica', '¿Estás seguro de que quieres restablecer todos los contenidos de la escuela a los valores predeterminados?', () => {
            StorageService.removeData(STORAGE_KEYS.COURSES);
            StorageService.removeData(STORAGE_KEYS.QUESTIONS);
            StorageService.removeData(STORAGE_KEYS.CONTACT);
            StorageService.removeData(STORAGE_KEYS.SITE_CONFIG);
            StorageService.removeData(STORAGE_KEYS.TESTIMONIALS);
            
            courseData = JSON.parse(JSON.stringify(defaultCourses));
            EXAM_QUESTIONS = JSON.parse(JSON.stringify(defaultQuestions));
            siteData = JSON.parse(JSON.stringify(defaultSiteConfig));
            contactData = JSON.parse(JSON.stringify(defaultContact));
            testimonialsData = JSON.parse(JSON.stringify(defaultTestimonials));
            
            isDirty = false;
            initAdmin();
            syncToPreview();
            showToast('Se restablecieron los valores predeterminados de fábrica.', 'warning');
        });
    });

    document.getElementById('admin-logout-btn')?.addEventListener('click', () => {
        showConfirmModal('Cerrar Sesión', '¿Estás seguro de que deseas salir de la Plataforma Administrativa?', () => {
            isDirty = false;
            if (window.AuthService && typeof window.AuthService.logout === 'function') {
                window.AuthService.logout();
            } else {
                sessionStorage.removeItem('horus_admin_session');
                window.location.reload();
            }
        });
    });

    // --- SISTEMA DE LOGIN Y NAVEGACIÓN (SPLIT SCREEN) ---
    function initAdmin() {
        renderAdminSettings();
        renderAdminCourses();
        renderAdminQuestions();
        renderAdminTestimonials();
        renderAdminContact();
        renderAdminPricing();
        renderAdminAbout();
        renderAdminHeaderFooter();
    }

    // Listener de autenticación desacoplada (CustomEvent emitido por auth.js)
    document.addEventListener('auth:success', () => {
        const wrapper = document.getElementById('admin-wrapper');
        if (wrapper) wrapper.style.display = 'flex';
        initAdmin();
    });

    // Pestañas del Sidebar
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    const tabPanes = document.querySelectorAll('.admin-tab-pane');
    const sectionTitle = document.getElementById('admin-current-section-title');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
            
            if (sectionTitle) {
                sectionTitle.textContent = btn.textContent.trim();
            }

            // Sync context (Scroll) to preview iframe
            const scrollTarget = btn.getAttribute('data-scroll');
            const iframe = document.getElementById('live-preview');
            if (iframe && iframe.contentWindow && scrollTarget) {
                iframe.contentWindow.postMessage({
                    type: 'SCROLL_TO',
                    target: scrollTarget
                }, '*');
            }
        });
    });

    // --- SISTEMA TOAST Y MODAL CONFIRM ---
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        const bgColors = {
            success: 'rgba(0, 184, 76, 0.95)',
            error: 'rgba(255, 74, 74, 0.95)',
            warning: 'rgba(251, 215, 4, 0.95)',
            info: 'rgba(15, 17, 26, 0.95)'
        };
        const textColors = {
            warning: '#000',
            success: '#fff',
            error: '#fff',
            info: '#fff'
        };
        const icons = {
            success: 'check-circle',
            error: 'alert-circle',
            warning: 'alert-triangle',
            info: 'info'
        };

        toast.style.cssText = `
            background: ${bgColors[type] || bgColors.info};
            color: ${textColors[type] || '#fff'};
            padding: 12px 20px;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.4);
            pointer-events: auto;
            transition: all 0.3s ease;
            transform: translateY(20px);
            opacity: 0;
            border: 1px solid rgba(255,255,255,0.2);
        `;

        toast.innerHTML = `<i data-lucide="${icons[type] || 'info'}" style="width:18px;height:18px;"></i> <span>${message}</span>`;
        container.appendChild(toast);
        if (window.lucide) lucide.createIcons();

        requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        });

        setTimeout(() => {
            toast.style.transform = 'translateY(20px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    function showConfirmModal(title, message, onConfirm) {
        const modal = document.getElementById('admin-custom-confirm-modal');
        const titleEl = document.getElementById('confirm-modal-title');
        const msgEl = document.getElementById('confirm-modal-msg');
        const okBtn = document.getElementById('confirm-modal-ok');
        const cancelBtn = document.getElementById('confirm-modal-cancel');

        if (!modal) {
            if (window.confirm(message)) onConfirm();
            return;
        }

        if (titleEl) titleEl.textContent = title;
        if (msgEl) msgEl.textContent = message;

        modal.style.display = 'flex';

        const cleanup = () => {
            modal.style.display = 'none';
            okBtn.onclick = null;
            cancelBtn.onclick = null;
        };

        okBtn.onclick = () => {
            cleanup();
            onConfirm();
        };

        cancelBtn.onclick = () => {
            cleanup();
        };
    }

    // --- SEGUIMIENTO DE CAMBIOS NO GUARDADOS (DIRTY STATE) ---
    let isDirty = false;

    document.addEventListener('input', (e) => {
        if (e.target.closest('#editor-panel')) {
            isDirty = true;
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.closest('#editor-panel')) {
            isDirty = true;
        }
    });

    window.addEventListener('beforeunload', (e) => {
        if (isDirty) {
            e.preventDefault();
            e.returnValue = 'Tienes cambios sin publicar en la Plataforma Administrativa. ¿Deseas salir?';
            return e.returnValue;
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {

    const defaultCourses = {
        microdrones: {
            title: "Microdrones y Operación Urbana (Sub-250g)",
            desc: "Domina el vuelo legal en ciudades, bienes raíces y creación de contenido avanzado. Extrae el máximo potencial comercial a equipos ultraligeros como la serie DJI Mini.",
            viz: "course_microdrones.webp",
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
        }
    };

    let siteData = JSON.parse(localStorage.getItem('horus_site_config'));
    if (!siteData) {
        siteData = JSON.parse(JSON.stringify(defaultSiteConfig));
        localStorage.setItem('horus_site_config', JSON.stringify(siteData));
    }

    let courseData = JSON.parse(localStorage.getItem('horus_courses'));
    // Forzar actualización si los cursos viejos están cacheados
    if (!courseData || !courseData.alafija) {
        courseData = JSON.parse(JSON.stringify(defaultCourses));
        localStorage.setItem('horus_courses', JSON.stringify(courseData));
    }

    const defaultContact = {
        email: "info@horusdron.com",
        phone: "+54 9 11 3659-2233",
        address: "Buenos Aires & Neuquén, Argentina",
        whatsapp: "5491136592233"
    };
    let contactData = JSON.parse(localStorage.getItem('horus_contact')) || defaultContact;

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

    let testimonialsData = JSON.parse(localStorage.getItem('horus_testimonials'));
    if (!testimonialsData || testimonialsData.length === 0) {
        testimonialsData = JSON.parse(JSON.stringify(defaultTestimonials));
        localStorage.setItem('horus_testimonials', JSON.stringify(testimonialsData));
    }

    function renderAdminSettings() {
        const container = document.getElementById('admin-settings-container');
        if (!container) return;
        
        container.innerHTML = `
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

            <div class="admin-card" data-category="contact">
                <div class="admin-section-title"><i data-lucide="bar-chart-2" style="width:16px;height:16px;vertical-align:-3px;margin-right:6px;"></i> Contadores y Estadísticas</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
                    <div>
                        <label class="admin-label">Pilotos Egresados (+)</label>
                        <input type="number" id="admin-stat-graduates" class="admin-input" value="${siteData.stats.graduates}">
                    </div>
                    <div>
                        <label class="admin-label">Horas de Práctica (+)</label>
                        <input type="number" id="admin-stat-hours" class="admin-input" value="${siteData.stats.hours}">
                    </div>
                    <div>
                        <label class="admin-label">Drones Provistos</label>
                        <input type="number" id="admin-stat-drones" class="admin-input" value="${siteData.stats.drones}">
                    </div>
                    <div>
                        <label class="admin-label">Instructores (+)</label>
                        <input type="number" id="admin-stat-instructors" class="admin-input" value="${siteData.stats.instructors}">
                    </div>
                </div>
            </div>
        `;
    }

    function syncCourseDOM() {
        Object.keys(courseData).forEach(key => {
            const titleInput = document.querySelector(`.course-title[data-key="${key}"]`);
            if (!titleInput) return;
            const card = titleInput.closest('.admin-card');
            if (card) {
                const visCheckbox = card.querySelector(`.course-visible-checkbox`);
                courseData[key].visible = visCheckbox ? visCheckbox.checked : true;
                
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
        container.innerHTML = '';

        Object.keys(courseData).forEach(key => {
            const course = courseData[key];
            const isVisible = course.visible !== false;
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.setAttribute('data-category', 'course');
            card.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;">
                    <div style="display:flex; align-items:center; gap: 15px;">
                        <h3 style="color:var(--accent-yellow);font-size:1.1rem;text-transform:capitalize;font-weight:700;margin:0;">Programa: <span style="color:white">${key}</span></h3>
                        <label style="display:flex; align-items:center; gap: 6px; font-size:0.85rem; cursor:pointer; color: ${isVisible ? '#4aff80' : '#8b95b0'};">
                            <input type="checkbox" class="course-visible-checkbox" data-key="${key}" ${isVisible ? 'checked' : ''}>
                            Público
                        </label>
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
        container.innerHTML = '';

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

        // Guardar Settings (Hero y Estadísticas)
        const hPill = document.getElementById('admin-hero-pill');
        const hTitle = document.getElementById('admin-hero-title');
        const hTagline = document.getElementById('admin-hero-tagline');
        const hDesc = document.getElementById('admin-hero-desc');
        if (hPill) siteData.hero.pill = hPill.value.trim();
        if (hTitle) siteData.hero.title = hTitle.value.trim();
        if (hTagline) siteData.hero.tagline = hTagline.value.trim();
        if (hDesc) siteData.hero.description = hDesc.value.trim();

        const sGrads = document.getElementById('admin-stat-graduates');
        const sHours = document.getElementById('admin-stat-hours');
        const sDrones = document.getElementById('admin-stat-drones');
        const sInstr = document.getElementById('admin-stat-instructors');
        if (sGrads) siteData.stats.graduates = sGrads.value;
        if (sHours) siteData.stats.hours = sHours.value;
        if (sDrones) siteData.stats.drones = sDrones.value;
        if (sInstr) siteData.stats.instructors = sInstr.value;

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
            alert('❌ El Título Principal de la portada no puede quedar vacío.');
            document.getElementById('admin-hero-title')?.focus();
            return;
        }
        if (Object.keys(courseData).length === 0) {
            alert('❌ Error: El sitio debe tener al menos 1 curso publicado.');
            return;
        }
        if (testimonialsData.length === 0) {
            alert('❌ Error: Debes mantener al menos 1 testimonio en la plataforma.');
            return;
        }

        localStorage.setItem('horus_site_config', JSON.stringify(siteData));
        localStorage.setItem('horus_courses', JSON.stringify(courseData));
        localStorage.setItem('horus_questions', JSON.stringify(EXAM_QUESTIONS));
        localStorage.setItem('horus_contact', JSON.stringify(contactData));
        localStorage.setItem('horus_testimonials', JSON.stringify(testimonialsData));

        // Enviar a Live Preview
        syncToPreview();

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
                        localStorage.setItem('horus_courses', JSON.stringify(data.courses));
                        localStorage.setItem('horus_questions', JSON.stringify(data.questions));
                        localStorage.setItem('horus_site_config', JSON.stringify(data.site));
                        if (data.contact) localStorage.setItem('horus_contact', JSON.stringify(data.contact));
                        if (data.testimonials) localStorage.setItem('horus_testimonials', JSON.stringify(data.testimonials));
                        
                        alert('✅ Copia de seguridad restaurada exitosamente. El panel se actualizará.');
                        window.location.reload();
                    } else {
                        alert('❌ El archivo no parece ser un respaldo válido de Horus Dron.');
                    }
                } catch (err) {
                    alert('❌ Error al leer el archivo JSON.');
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
        if (confirm('¿Estás seguro de que quieres restablecer todos los contenidos de la escuela a los valores predeterminados?')) {
            localStorage.removeItem('horus_courses');
            localStorage.removeItem('horus_questions');
            localStorage.removeItem('horus_contact');
            localStorage.removeItem('horus_site_config');
            localStorage.removeItem('horus_testimonials');
            
            courseData = JSON.parse(JSON.stringify(defaultCourses));
            EXAM_QUESTIONS = JSON.parse(JSON.stringify(defaultQuestions));
            siteData = JSON.parse(JSON.stringify(defaultSiteConfig));
            contactData = JSON.parse(JSON.stringify(defaultContact));
            testimonialsData = JSON.parse(JSON.stringify(defaultTestimonials));
            
            initAdmin();
            syncToPreview();
        }
    });

    // --- SISTEMA DE LOGIN Y NAVEGACIÓN (SPLIT SCREEN) ---
    function initAdmin() {
        renderAdminSettings();
        renderAdminCourses();
        renderAdminQuestions();
        renderAdminTestimonials();
        renderAdminContact();
    }

    const loginForm = document.getElementById('admin-login-form');
    const loginError = document.getElementById('admin-login-error');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const pwd = document.getElementById('admin-password').value;
        const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        if (hashHex === "e3db3312a6075ac05146b1a68727b84494b545b845fd76de1d94db7e3b908571") { // horusadmin2026
            document.getElementById('admin-login-modal').style.display = 'none';
            document.getElementById('admin-wrapper').style.display = 'flex';
            initAdmin();
        } else {
            if (loginError) loginError.style.display = 'block';
        }
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

});

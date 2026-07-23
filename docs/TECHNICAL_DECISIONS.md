# TECHNICAL_DECISIONS.md — Registro de Decisiones Arquitectónicas (ADR)

Este documento registra oficialmente las decisiones de ingeniería y arquitectura adoptadas en la plataforma Horus Dron.

---

## 1. Abstracción de Persistencia Local (`StorageService`)
* **Problema:** Múltiples manipulaciones directas de `localStorage` con llamadas repetitivas a `JSON.parse` y `JSON.stringify`, sin manejo unificado de excepciones de almacenamiento.
* **Decisión:** Implementar un servicio singleton `StorageService` en `storage.js` para centralizar todas las lecturas, escrituras y eliminaciones de almacenamiento.
* **Motivo:** Aislar la capa de almacenamiento del resto de la aplicación y evitar fallas por `QuotaExceededError` o JSON corrupto.
* **Beneficios:** Manejo seguro de errores (`try/catch`), valores predeterminados automáticos ante ausencia de claves y código más limpio en los módulos consumidores.
* **Riesgos Aceptados:** El almacenamiento sigue siendo local al navegador (Single-Player); no hay sincronización multi-dispositivo sin una integración de backend posterior.

---

## 2. Desacoplamiento del Sistema de Autenticación (`AuthService` / `auth.js`)
* **Problema:** La lógica del modal de login, la lectura de clave y el cálculo del hash SHA-256 se encontraban fuertemente acoplados dentro de `admin.js`.
* **Decisión:** Extraer el 100% del proceso de autenticación a un módulo independiente `auth.js` (IIFE) que emite un `CustomEvent` nativo (`auth:success`) para notificar a `admin.js`.
* **Motivo:** Cumplir con el principio de responsabilidad única (SRP), aislar la clave/hash y desacoplar la interfaz del panel de la lógica de acceso.
* **Beneficios:** `admin.js` no contiene código de autenticación. `auth.js` mantiene su estado `_isAuthenticated` en un closure totalmente privado.
* **Riesgos Aceptados:** La autenticación se realiza exclusivamente en el cliente (*client-side*); el hash SHA-256 está presente en el código descargable por el navegador.

---

## 3. Estrategia de Migración Pasiva y Valores por Defecto
* **Problema:** Necesidad de garantizar que la aplicación funcione en instalaciones limpias (sin datos previos en `localStorage`) sin requerir un script de migración previo.
* **Decisión:** Implementar estructuras de datos por defecto (`defaultCourses`, `defaultSiteConfig`, `defaultContact`, `defaultTestimonials`) que se persisten automáticamente en `localStorage` si no se detecta configuración previa.
* **Motivo:** Garantizar la disponibilidad inmediata del sitio tanto en el primer arranque como tras un restablecimiento a valores de fábrica.
* **Beneficios:** Cero errores por `null` o `undefined` en componentes visuales. Experiencia fluida sin pasos manuales de configuración inicial.
* **Riesgos Aceptados:** Ligero incremento en el tamaño inicial de `admin.js` por incluir los objetos JSON por defecto.

---

## 4. Adopción de la Regla de Interpretación Cero
* **Problema:** Riesgo de desviaciones arquitectónicas, sobreingeniería o refactorizaciones no autorizadas basadas en suposiciones del desarrollador.
* **Decisión:** Implementar la Regla de Interpretación Cero como norma estricta de trabajo.
* **Motivo:** Asegurar que cada cambio en el código responda única y exclusivamente a especificaciones explícitas del Director Técnico (CTO).
* **Beneficios:** Proyectos predecibles, eliminación de código no solicitado y control riguroso del alcance (*scope control*).
* **Riesgos Aceptados:** Requiere especificar explícitamente cada requerimiento técnico sin asumir comportamientos implícitos.

---

## 5. Principio de Evolución Controlada
* **Problema:** Refactorizaciones masivas en un solo paso con alto riesgo de roturas y dificultad para aislar fallas.
* **Decisión:** Subdividir las fases complejas de refactorización en subfases secuenciales mínimas (ej. Subfase 3A: creación de `auth.js` y prueba de emisión de eventos; Subfase 3B: eliminación del código heredado en `admin.js`).
* **Motivo:** Reducir el radio de impacto de cada cambio y facilitar la validación paso a paso.
* **Beneficios:** Capacidad de verificar estabilidad intermedia, facilidad para rollback y trazabilidad limpia en el historial de control de versiones.
* **Riesgos Aceptados:** Proceso de implementación por etapas consecutivas que requiere validación formal entre subfases.

---

## 6. Principio de Decisión Basada en Valor
* **Problema:** Tendencia a incorporar bibliotecas externas, empaquetadores (*bundlers*) o frameworks pesados para tareas simples.
* **Decisión:** Mantener una pila tecnológica basada exclusivamente en JavaScript Vanilla, APIs nativas del navegador (`CustomEvent`, `crypto.subtle`) e inclusión directa de scripts síncronos.
* **Motivo:** Maximizar el rendimiento, la velocidad de carga, la simplicidad de despliegue y la mantenibilidad a largo plazo sin deuda técnica de dependencias externas.
* **Beneficios:** Cero vulnerabilidades de dependencias npm en la capa de runtime de producción, despliegue estático trivial.
* **Riesgos Aceptados:** No se utilizan sintaxis de módulos ES6 nativos (`import/export`) en esta etapa para mantener compatibilidad síncrona simple.

---

## 7. Regla de No Regresión
* **Problema:** Alteraciones secundarias no deseadas en la experiencia visual o funcional durante trabajos de infraestructura.
* **Decisión:** Exigir una matriz de validación obligatoria (login correcto/incorrecto, renderizado de formularios, vista previa iframe, guardado local y consola limpia) tras cada subfase.
* **Motivo:** Preservar la calidad y estabilidad del software en todo momento.
* **Beneficios:** Garantía de que la aplicación permanece en estado listo para producción (*production-ready*) después de cada iteración.
* **Riesgos Aceptados:** Tiempo dedicado a la ejecución de pruebas manuales e inspección de logs en cada entrega.

# DATA_MODEL.md — Modelo de Datos del Sistema Horus Dron

Este documento especifica las estructuras de datos, persistencia y módulos de servicio vigentes en la plataforma.

---

## 1. `siteData` (`horus_site_config`)

* **Propósito:** Almacena la configuración general del sitio web (textos de portada, métricas cuantitativas y visibilidad de secciones).
* **Estructura JSON:**
  ```json
  {
    "hero": {
      "pill": "string",
      "title": "string (HTML)",
      "tagline": "string",
      "description": "string"
    },
    "stats": {
      "graduates": "string",
      "hours": "string",
      "drones": "string",
      "instructors": "string"
    },
    "toggles": {
      "showConsultant": true,
      "showCourses": true,
      "showPlatform": true,
      "showStats": true
    }
  }
  ```
* **Responsable:** `admin.js` / `StorageService`.
* **Quién Lee:** `app.js` (renderizado público) y `admin.js` (editor del panel).
* **Quién Escribe:** `admin.js` (`StorageService.saveData('horus_site_config', payload)`).
* **Dependencias:** `StorageService` (`localStorage`).

---

## 2. `courseData` (`horus_courses`)

* **Propósito:** Almacena la oferta académica de la escuela (cursos, especificaciones, temario por módulos y beneficios).
* **Estructura JSON:**
  ```json
  {
    "<courseId>": {
      "title": "string",
      "desc": "string",
      "viz": "string (path imagen)",
      "status": "published | draft",
      "specs": ["string"],
      "modules": [
        {
          "name": "string",
          "topics": ["string"]
        }
      ],
      "bonus": ["string"]
    }
  }
  ```
* **Responsable:** `admin.js` / `StorageService`.
* **Quién Lee:** `app.js` (catálogo y modales de cursos) y `admin.js` (gestor de cursos).
* **Quién Escribe:** `admin.js` (`StorageService.saveData('horus_courses', payload)`).
* **Dependencias:** `StorageService` (`localStorage`).

---

## 3. `testimonialsData` (`horus_testimonials`)

* **Propósito:** Almacena el listado de testimonios y reseñas de egresados.
* **Estructura JSON:**
  ```json
  [
    {
      "name": "string",
      "role": "string",
      "quote": "string"
    }
  ]
  ```
* **Responsable:** `admin.js` / `StorageService`.
* **Quién Lee:** `app.js` (carrusel de testimonios) y `admin.js` (administrador de testimonios).
* **Quién Escribe:** `admin.js` (`StorageService.saveData('horus_testimonials', payload)`).
* **Dependencias:** `StorageService` (`localStorage`).

---

## 4. `contactData` (`horus_contact`)

* **Propósito:** Almacena los canales oficiales de contacto e información institucional.
* **Estructura JSON:**
  ```json
  {
    "email": "string",
    "phone": "string",
    "address": "string",
    "whatsapp": "string"
  }
  ```
* **Responsable:** `admin.js` / `StorageService`.
* **Quién Lee:** `app.js` (pie de página y botones de contacto) y `admin.js` (editor de contacto).
* **Quién Escribe:** `admin.js` (`StorageService.saveData('horus_contact', payload)`).
* **Dependencias:** `StorageService` (`localStorage`).

---

## 5. `EXAM_QUESTIONS` (`horus_questions`)

* **Propósito:** Banco de preguntas teóricas para el simulador de examen ANAC.
* **Estructura JSON:**
  ```json
  [
    {
      "id": 1,
      "category": "string",
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "answer": 0,
      "explanation": "string"
    }
  ]
  ```
* **Responsable:** `app.js` / `admin.js` / `StorageService`.
* **Quién Lee:** `app.js` (módulo interactivo del simulador) y `admin.js` (gestor de preguntas).
* **Quién Escribe:** `admin.js` (`StorageService.saveData('horus_questions', payload)`).
* **Dependencias:** `StorageService` (`localStorage`).

---

## 6. Módulo `StorageService`

* **Propósito:** Capa de abstracción I/O para operaciones sobre `window.localStorage`.
* **Estructura / API:**
  * `getData(key, defaultValue)`: Lee y parsea JSON desde `localStorage`. Retorna `defaultValue` ante ausencia o error.
  * `saveData(key, payload)`: Serializa y guarda `payload` en `localStorage`. Retorna booleano de éxito.
  * `removeData(key)`: Elimina la clave de `localStorage`.
* **Responsable:** `storage.js`.
* **Quién Lee / Escribe:** Invocado por `app.js` y `admin.js`.
* **Dependencias:** API nativa `window.localStorage`.

---

## 7. Módulo `AuthService`

* **Propósito:** Exposición mínima del estado de autenticación en memoria.
* **Estructura / API:**
  * `AuthService.isAuthenticated()`: Retorna un booleano indicando el estado en memoria (`_isAuthenticated`).
* **Responsable:** `auth.js`.
* **Quién Lee:** Cliente / scripts del panel que requieran verificar estado sin manipular variables privadas.
* **Quién Escribe:** Internamente `auth.js` al validar el hash SHA-256.
* **Dependencias:** API nativa `crypto.subtle` (SHA-256) y eventos DOM nativos (`CustomEvent`).

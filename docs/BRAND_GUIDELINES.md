# BRAND_GUIDELINES.md — Guía de Identidad Visual e Imagen Institucional

Este documento establece las reglas permanentes de identidad visual para el proyecto **Horus Dron** (Centro de Instrucción de Aeronáutica Civil — Categoría Abierta ANAC).

---

## 1. Nombre Institucional Oficial
El nombre de la marca en todos los elementos gráficos, uniformes, aeronaves y cartelería es exclusivamente:

**HORUS DRON**

---

## 2. Reglas de Generación y Edición de Imágenes

1. **Denominación Única:**
   Todo uniforme, vehículo terrestre, aeronave/dron, edificio, hangar o cartelera publicitaria visible dentro de cualquier imagen del proyecto deberá mostrar única y exclusivamente el texto **HORUS DRON**.

2. **Prohibición de Textos Secundarios Adicionales:**
   No se deben incorporar slogans, logotipos secundarios ni textos adicionales dentro de las imágenes, salvo que el Director Técnico lo solicite de manera explícita.

3. **Logotipo Institucional Configurable:**
   El logotipo institucional es configurable dinámicamente a través de `siteData.brand.logoUrl` desde el panel administrativo (`admin.html`).

4. **Comportamiento ante Ausencia de Logotipo (Fallback):**
   Si `logoUrl` no está definido o es una cadena vacía, el sistema mostrará de forma segura el isotipo vectorial predeterminado con la insignia ANAC sin alterar el diseño ni romper la maquetación.

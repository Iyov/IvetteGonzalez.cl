# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! 🎉

Esta guía te ayudará a entender cómo puedes contribuir de manera efectiva.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#-código-de-conducta)
- [¿Cómo Puedo Contribuir?](#-cómo-puedo-contribuir)
- [Configuración del Entorno](#-configuración-del-entorno)
- [Proceso de Desarrollo](#-proceso-de-desarrollo)
- [Estándares de Código](#-estándares-de-código)
- [Proceso de Pull Request](#-proceso-de-pull-request)
- [Reportar Bugs](#-reportar-bugs)
- [Sugerir Mejoras](#-sugerir-mejoras)
- [Preguntas Frecuentes](#-preguntas-frecuentes)

---

## 📜 Código de Conducta

### Nuestro Compromiso

Nos comprometemos a hacer de la participación en este proyecto una experiencia libre de acoso para todos, independientemente de:
- Edad
- Tamaño corporal
- Discapacidad
- Etnia
- Identidad y expresión de género
- Nivel de experiencia
- Nacionalidad
- Apariencia personal
- Raza
- Religión
- Identidad y orientación sexual

### Nuestros Estándares

**Comportamientos que contribuyen a crear un ambiente positivo:**
- ✅ Usar lenguaje acogedor e inclusivo
- ✅ Respetar diferentes puntos de vista y experiencias
- ✅ Aceptar críticas constructivas con gracia
- ✅ Enfocarse en lo que es mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros

**Comportamientos inaceptables:**
- ❌ Uso de lenguaje o imágenes sexualizadas
- ❌ Comentarios insultantes o despectivos (trolling)
- ❌ Acoso público o privado
- ❌ Publicar información privada de otros sin permiso
- ❌ Otras conductas que puedan considerarse inapropiadas

### Aplicación

Los casos de comportamiento abusivo, acosador o inaceptable pueden ser reportados contactando al equipo del proyecto en:
- 📧 ivettegonzalezrifo@gmail.com

Todas las quejas serán revisadas e investigadas, resultando en una respuesta apropiada a las circunstancias.

---

## 🤝 ¿Cómo Puedo Contribuir?

### 1. Reportar Bugs 🐛

¿Encontraste un bug? Ayúdanos a mejorarlo:

1. **Verifica** que el bug no haya sido reportado antes
2. **Abre un issue** con una descripción clara
3. **Incluye** pasos para reproducir el problema
4. **Añade** capturas de pantalla si es posible

### 2. Sugerir Mejoras 💡

¿Tienes una idea para mejorar el proyecto?

1. **Abre un issue** describiendo tu sugerencia
2. **Explica** por qué sería útil
3. **Proporciona** ejemplos de uso
4. **Discute** con la comunidad

### 3. Mejorar Documentación 📝

La documentación siempre puede mejorar:

- Corregir errores tipográficos
- Añadir ejemplos
- Mejorar explicaciones
- Traducir a otros idiomas

### 4. Contribuir con Código 💻

¿Quieres escribir código?

1. **Fork** el repositorio
2. **Crea** una rama para tu feature
3. **Escribe** código siguiendo nuestros estándares
4. **Prueba** tus cambios
5. **Envía** un Pull Request

### 5. Diseño y UX 🎨

Ayuda a mejorar la experiencia visual:

- Proponer mejoras de diseño
- Crear mockups
- Mejorar accesibilidad
- Optimizar animaciones

---

## 🛠 Configuración del Entorno

### Requisitos Previos

- Git instalado
- Editor de código (VS Code recomendado)
- Navegador moderno con DevTools
- Servidor local (Python, PHP, o Node.js)

### Instalación

1. **Fork el repositorio**
   ```bash
   # Click en "Fork" en GitHub
   ```

2. **Clona tu fork**
   ```bash
   git clone https://github.com/TU-USUARIO/ivettegonzalez.cl.git
   cd ivettegonzalez.cl
   ```

3. **Configura el remote upstream**
   ```bash
   git remote add upstream https://github.com/USUARIO-ORIGINAL/ivettegonzalez.cl.git
   ```

4. **Inicia servidor local**
   ```bash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: PHP
   php -S localhost:8000
   
   # Opción 3: Node.js
   npx http-server -p 8000
   ```

5. **Abre en navegador**
   ```
   http://localhost:8000
   ```

### Extensiones Recomendadas (VS Code)

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ritwickdey.liveserver",
    "formulahendry.auto-rename-tag",
    "pranaygp.vscode-css-peek"
  ]
}
```

---

## 🔄 Proceso de Desarrollo

### 1. Crear una Rama

```bash
# Actualiza tu main
git checkout main
git pull upstream main

# Crea una nueva rama
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/nombre-del-bug
```

**Convención de nombres de ramas:**
- `feature/` - Nueva funcionalidad
- `fix/` - Corrección de bug
- `docs/` - Cambios en documentación
- `style/` - Cambios de estilo (CSS)
- `refactor/` - Refactorización de código
- `test/` - Añadir o modificar tests
- `chore/` - Tareas de mantenimiento

### 2. Hacer Cambios

```bash
# Edita los archivos necesarios
# Prueba tus cambios localmente
# Verifica que todo funcione correctamente
```

### 3. Commit de Cambios

```bash
# Añade los archivos modificados
git add .

# Commit con mensaje descriptivo
git commit -m "tipo: descripción breve

Descripción más detallada si es necesario.

Fixes #123"
```

**Convención de mensajes de commit:**
```
tipo: descripción breve (máx 50 caracteres)

Descripción detallada (opcional, máx 72 caracteres por línea)

Refs #issue-number
```

**Tipos de commit:**
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Formato, punto y coma faltante, etc.
- `refactor:` - Refactorización de código
- `test:` - Añadir tests
- `chore:` - Actualizar tareas de build, etc.

**Ejemplos:**
```bash
git commit -m "feat: añadir modo oscuro automático según hora del día"
git commit -m "fix: corregir scroll en dispositivos iOS"
git commit -m "docs: actualizar README con instrucciones de instalación"
```

### 4. Push a tu Fork

```bash
git push origin feature/nombre-descriptivo
```

---

## 📏 Estándares de Código

### HTML

```html
<!-- ✅ BIEN: Semántico, accesible, indentado -->
<section id="about" aria-labelledby="about-title">
    <div class="container">
        <h2 id="about-title" class="section-title">Quién Soy</h2>
        <p>Descripción...</p>
    </div>
</section>

<!-- ❌ MAL: No semántico, sin accesibilidad -->
<div id="about">
    <div>
        <div class="title">Quién Soy</div>
        <div>Descripción...</div>
    </div>
</div>
```

**Reglas HTML:**
- ✅ Usar elementos semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ✅ Incluir atributos ARIA cuando sea necesario
- ✅ Añadir `alt` text a todas las imágenes
- ✅ Usar `data-lang-es` y `data-lang-en` para textos multiidioma
- ✅ Indentar con 4 espacios
- ✅ Cerrar todas las etiquetas

### CSS

```css
/* ✅ BIEN: Variables CSS, BEM, comentarios */
:root {
    --primary-color: #8e44ad;
    --spacing-md: 20px;
}

.testimonial-card {
    padding: var(--spacing-md);
    background-color: var(--card-bg);
    transition: transform 0.3s ease;
}

.testimonial-card:hover {
    transform: translateY(-10px);
}

/* ❌ MAL: Valores hardcodeados, sin organización */
.card {
    padding: 20px;
    background: #fff;
}
.card:hover {
    transform: translateY(-10px);
}
```

**Reglas CSS:**
- ✅ Usar variables CSS para colores y valores reutilizables
- ✅ Seguir metodología BEM o similar
- ✅ Agrupar propiedades relacionadas
- ✅ Usar shorthand cuando sea apropiado
- ✅ Comentar secciones importantes
- ✅ Mobile-first approach
- ✅ Evitar `!important` (excepto casos necesarios)

### JavaScript

```javascript
// ✅ BIEN: Funciones descriptivas, validaciones, comentarios
/**
 * Actualiza el mensaje motivacional según el día de la semana
 * @returns {void}
 */
function updateMotivationalMessage() {
    if (!motivationalMessage || !messageImage) {
        console.warn('Elementos de mensaje motivacional no encontrados');
        return;
    }
    
    const dayOfWeek = new Date().getDay();
    const language = localStorage.getItem('language') || 'es';
    
    motivationalMessage.textContent = motivationalMessages[language][dayOfWeek];
    messageImage.style.backgroundImage = backgroundImages[dayOfWeek];
}

// ❌ MAL: Sin validaciones, nombres poco descriptivos
function update() {
    var d = new Date().getDay();
    var l = localStorage.getItem('language');
    msg.textContent = messages[l][d];
}
```

**Reglas JavaScript:**
- ✅ Usar `const` y `let`, evitar `var`
- ✅ Nombres descriptivos para variables y funciones
- ✅ Validar existencia de elementos DOM
- ✅ Comentar funciones complejas
- ✅ Usar arrow functions cuando sea apropiado
- ✅ Manejar errores con try-catch
- ✅ Evitar código duplicado (DRY)
- ✅ Usar template literals para strings

### Accesibilidad

```html
<!-- ✅ BIEN: ARIA labels, roles, semántica -->
<button 
    class="faq-question" 
    aria-expanded="false" 
    aria-controls="faq-answer-1"
    aria-label="Pregunta sobre tipos de masajes">
    <span>¿Qué tipos de masajes ofrecen?</span>
    <i class="fas fa-chevron-down" aria-hidden="true"></i>
</button>

<!-- ❌ MAL: Div como botón, sin accesibilidad -->
<div class="faq-question" onclick="toggle()">
    <span>¿Qué tipos de masajes ofrecen?</span>
    <i class="fas fa-chevron-down"></i>
</div>
```

**Reglas de Accesibilidad:**
- ✅ Usar elementos semánticos correctos
- ✅ Añadir ARIA labels a elementos interactivos
- ✅ Incluir `aria-expanded` en elementos expandibles
- ✅ Usar `aria-hidden="true"` en iconos decorativos
- ✅ Asegurar navegación por teclado
- ✅ Mantener contraste de color adecuado (WCAG AA)
- ✅ Proporcionar texto alternativo para imágenes

---

## 🔀 Proceso de Pull Request

### Antes de Enviar

**Checklist:**
- [ ] El código sigue los estándares del proyecto
- [ ] He probado los cambios localmente
- [ ] He añadido comentarios al código (si es necesario)
- [ ] He actualizado la documentación (si es necesario)
- [ ] Los cambios no generan nuevos warnings
- [ ] He verificado la accesibilidad
- [ ] He probado en múltiples navegadores
- [ ] He probado en dispositivos móviles

### Crear Pull Request

1. **Ve a GitHub** y navega a tu fork
2. **Click en "New Pull Request"**
3. **Selecciona** tu rama
4. **Completa** el template:

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix (cambio que corrige un issue)
- [ ] Nueva funcionalidad (cambio que añade funcionalidad)
- [ ] Breaking change (cambio que rompe compatibilidad)
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas.

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código en áreas difíciles
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevos warnings
- [ ] He probado en múltiples navegadores

## Screenshots (si aplica)
Añade capturas de pantalla de los cambios visuales.

## Issues Relacionados
Fixes #123
Refs #456
```

### Revisión de Código

- El equipo revisará tu PR
- Pueden solicitar cambios
- Responde a los comentarios
- Realiza los cambios solicitados
- Una vez aprobado, se hará merge

### Después del Merge

```bash
# Actualiza tu repositorio local
git checkout main
git pull upstream main

# Elimina la rama local
git branch -d feature/nombre-descriptivo

# Elimina la rama remota
git push origin --delete feature/nombre-descriptivo
```

---

## 🐛 Reportar Bugs

### Template de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del bug.

**Pasos para Reproducir**
1. Ve a '...'
2. Click en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Descripción de lo que esperabas que sucediera.

**Comportamiento Actual**
Descripción de lo que realmente sucede.

**Screenshots**
Si aplica, añade screenshots para ayudar a explicar el problema.

**Entorno**
- OS: [e.g. Windows 10, macOS 12, Ubuntu 20.04]
- Navegador: [e.g. Chrome 90, Firefox 88, Safari 14]
- Versión: [e.g. 2026.02.08.4]
- Dispositivo: [e.g. Desktop, iPhone 12, Samsung Galaxy S21]

**Contexto Adicional**
Cualquier otra información relevante sobre el problema.
```

---

## 💡 Sugerir Mejoras

### Template de Feature Request

```markdown
**¿Tu solicitud está relacionada con un problema?**
Descripción clara del problema. Ej: "Siempre me frustra cuando [...]"

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que suceda.

**Describe alternativas que has considerado**
Descripción de soluciones o features alternativas.

**Contexto Adicional**
Cualquier otra información o screenshots sobre la solicitud.

**Beneficios**
- Beneficio 1
- Beneficio 2
- Beneficio 3
```

---

## ❓ Preguntas Frecuentes

### ¿Necesito experiencia previa para contribuir?

No necesariamente. Hay contribuciones de todos los niveles:
- **Principiante**: Corregir typos, mejorar documentación
- **Intermedio**: Añadir features pequeñas, mejorar estilos
- **Avanzado**: Refactorizar código, optimizar performance

### ¿Cuánto tiempo toma revisar un PR?

Generalmente 2-5 días hábiles. PRs urgentes pueden ser revisados más rápido.

### ¿Puedo trabajar en un issue que ya está asignado?

Es mejor preguntar primero. Comenta en el issue para coordinar.

### ¿Qué pasa si mi PR es rechazado?

No te desanimes. Recibirás feedback sobre por qué fue rechazado y cómo mejorarlo.

### ¿Puedo contribuir si no sé programar?

¡Sí! Puedes:
- Mejorar documentación
- Reportar bugs
- Sugerir mejoras
- Ayudar con traducciones
- Mejorar diseño

### ¿Cómo me mantengo actualizado?

- Watch el repositorio en GitHub
- Únete a las discusiones
- Lee el CHANGELOG regularmente

---

## 🎓 Recursos para Aprender

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

### Accesibilidad
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Git
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Guides](https://guides.github.com/)

---

## 📞 Contacto

¿Tienes preguntas? Contáctanos:

- 📧 Email: ivettegonzalezrifo@gmail.com
- 💬 GitHub Discussions: [Link]
- 📱 WhatsApp: +569 9613 8109

---

## 🙏 Agradecimientos

Gracias a todos los contribuidores que hacen este proyecto posible:

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- Aquí se listarán los contribuidores -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

<div align="center">

**¡Gracias por contribuir! 🎉**

Tu ayuda hace que este proyecto sea mejor para todos.

[⬆ Volver arriba](#guía-de-contribución)

</div>

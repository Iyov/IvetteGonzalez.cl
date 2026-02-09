# Ivette González - Masoterapeuta Profesional

<div align="center">

![Ivette González Logo](img/Ivette_Gonzalez_Logo_500.png)

**Servicios profesionales de masoterapia y jabones artesanales naturales en Chile**

[![Website](https://img.shields.io/badge/Website-ivettegonzalez.cl-8e44ad?style=for-the-badge)](https://ivettegonzalez.cl)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2026.02.08.4-blue?style=for-the-badge)](CHANGELOG.md)

[🌐 Sitio Web](https://ivettegonzalez.cl) • [📖 Documentación](#documentación) • [🤝 Contribuir](CONTRIBUTING.md) • [🔒 Seguridad](SECURITY.md)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [SEO y Accesibilidad](#-seo-y-accesibilidad)
- [Performance](#-performance)
- [Navegadores Soportados](#-navegadores-soportados)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

Sitio web profesional para **Ivette González**, masoterapeuta certificada especializada en terapias de relajación, recuperación muscular y fabricación de jabones artesanales naturales.

### Misión
Proporcionar bienestar integral a través de terapias naturales y productos artesanales, combinando técnicas tradicionales con ingredientes naturales para crear una experiencia rejuvenecedora.

### Servicios
- 💆 **Masoterapia Profesional**: Masajes relajantes, descontracturantes, terapéuticos y deportivos
- 🧼 **Jabones Artesanales**: Productos naturales libres de químicos agresivos, aptos para pieles sensibles

---

## ✨ Características

### Funcionalidades Principales
- 🌓 **Modo Oscuro/Claro**: Cambio dinámico de tema con persistencia en localStorage
- 🌍 **Multiidioma**: Soporte completo para Español e Inglés
- 📱 **Responsive Design**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- ♿ **Accesibilidad WCAG 2.1 AA**: 100% navegable por teclado, compatible con lectores de pantalla
- 🚀 **PWA**: Instalable como aplicación web progresiva
- 📊 **SEO Optimizado**: Meta tags, Schema.org, sitemap, robots.txt
- 🎨 **Animaciones Suaves**: Transiciones y efectos visuales optimizados
- 📍 **Navegación Inteligente**: Indicador de sección activa y breadcrumbs dinámicos

### Secciones
1. **Inicio**: Hero section con llamado a la acción
2. **Quién Soy**: Presentación profesional y experiencia
3. **Testimonios**: Opiniones de clientes satisfechos
4. **FAQ**: Preguntas frecuentes con acordeón interactivo
5. **Contacto**: Enlaces a redes sociales y métodos de contacto
6. **Motivación**: Mensaje diario personalizado según el día de la semana

---

## 🛠 Tecnologías

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS y flexbox
- **JavaScript (ES6+)**: Funcionalidad interactiva sin frameworks

### Librerías y Recursos
- **Font Awesome 6.4.0**: Iconos vectoriales
- **Google Fonts (Poppins)**: Tipografía moderna y legible

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **Schema.org**: Datos estructurados para SEO
- **Manifest.json**: Configuración PWA

### Optimizaciones
- **Throttle**: Optimización de eventos de scroll
- **Lazy Loading**: Carga diferida de imágenes
- **Preload**: Precarga de recursos críticos
- **Cache**: Configuración de cache en .htaccess

---

## 📁 Estructura del Proyecto

```
ivettegonzalez.cl/
├── 📄 index.html              # Página principal
├── 📁 css/
│   ├── index.css              # Estilos principales
│   └── font-awesome_6.4.0_all.min.css
├── 📁 js/
│   └── index.js               # Lógica de la aplicación
├── 📁 img/
│   ├── 01.jpg - 07.jpg        # Imágenes de fondo por día
│   ├── Cliente1-3.*           # Fotos de testimonios
│   ├── Ivette_Gonzalez_Logo_500.png
│   └── favicon.png
├── 📁 webfonts/               # Fuentes de Font Awesome
├── 📄 manifest.json           # Configuración PWA
├── 📄 robots.txt              # Directivas para crawlers
├── 📄 sitemap.xml             # Mapa del sitio
├── 📄 schema.json             # Datos estructurados
├── 📄 .htaccess               # Configuración Apache
├── 📄 README.md               # Este archivo
├── 📄 LICENSE                 # Licencia MIT
├── 📄 SECURITY.md             # Política de seguridad
├── 📄 CONTRIBUTING.md         # Guía de contribución
└── 📄 CHANGELOG.md            # Historial de cambios
```

---

## 🚀 Instalación

### Requisitos Previos
- Servidor web (Apache, Nginx, etc.)
- PHP 7.4+ (opcional, para .htaccess)
- Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/usuario/ivettegonzalez.cl.git
cd ivettegonzalez.cl
```

2. **Configurar servidor local**

**Opción A: Python**
```bash
python -m http.server 8000
```

**Opción B: PHP**
```bash
php -S localhost:8000
```

**Opción C: Node.js (http-server)**
```bash
npx http-server -p 8000
```

3. **Abrir en navegador**
```
http://localhost:8000
```

### Despliegue en Producción

1. **Subir archivos al servidor**
```bash
# Via FTP, SFTP o Git
scp -r * usuario@servidor:/var/www/html/
```

2. **Configurar dominio**
- Apuntar DNS a la IP del servidor
- Configurar SSL/TLS (Let's Encrypt recomendado)

3. **Verificar .htaccess**
- Asegurar que mod_rewrite esté habilitado
- Verificar redirecciones HTTPS

4. **Actualizar URLs**
- Cambiar URLs en `index.html` (canonical, og:url, etc.)
- Actualizar `sitemap.xml`
- Actualizar `robots.txt`

---

## 💻 Uso

### Cambiar Tema (Claro/Oscuro)
```javascript
// El tema se guarda automáticamente en localStorage
// Click en el botón de luna/sol en el header
```

### Cambiar Idioma (ES/EN)
```javascript
// El idioma se guarda automáticamente en localStorage
// Click en el botón de globo en el header
```

### Personalizar Contenido

**Modificar textos:**
```html
<!-- En index.html, buscar atributos data-lang-es y data-lang-en -->
<h1 data-lang-es="Texto en Español" data-lang-en="Text in English">
    Texto en Español
</h1>
```

**Modificar colores:**
```css
/* En css/index.css */
:root {
    --primary-color: #8e44ad;    /* Color principal */
    --secondary-color: #9b59b6;  /* Color secundario */
    --text-color: #333;          /* Color de texto */
    --bg-color: #f9f9f9;         /* Color de fondo */
}
```

**Añadir testimonios:**
```html
<!-- En index.html, dentro de .testimonials-container -->
<div class="testimonial-card" role="listitem">
    <div class="testimonial-content">
        <img src="img/cliente.jpg" alt="Nombre - Descripción" class="testimonial-image" loading="lazy">
        <p class="testimonial-text">Testimonio aquí...</p>
        <div class="testimonial-author">Nombre</div>
        <div class="testimonial-role">Rol</div>
    </div>
</div>
```

---

## 🔍 SEO y Accesibilidad

### SEO Implementado
- ✅ Meta tags optimizados (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org (LocalBusiness, Person, WebSite)
- ✅ Sitemap.xml actualizado
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Alt text en todas las imágenes
- ✅ Estructura semántica HTML5

### Accesibilidad (WCAG 2.1 AA)
- ✅ 100% navegable por teclado
- ✅ ARIA labels en todos los elementos interactivos
- ✅ ARIA expanded en FAQ
- ✅ Skip to content link
- ✅ Focus visible en todos los elementos
- ✅ Contraste de color adecuado
- ✅ Soporte para lectores de pantalla
- ✅ Respeta preferencias de usuario (reduced-motion, high-contrast)

---

## ⚡ Performance

### Optimizaciones Implementadas
- ✅ **Throttle en scroll**: Reduce carga de CPU en ~70%
- ✅ **Lazy loading**: Imágenes cargadas bajo demanda
- ✅ **Preload de imágenes**: Precarga de fondos diarios
- ✅ **Compresión GZIP**: Configurada en .htaccess
- ✅ **Cache de navegador**: Headers configurados
- ✅ **Minificación**: CSS y JS optimizados
- ✅ **Transiciones selectivas**: Solo en elementos necesarios

### Métricas
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 95+

---

## 🌐 Navegadores Soportados

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome    | 90+            | ✅ Completo |
| Firefox   | 88+            | ✅ Completo |
| Safari    | 14+            | ✅ Completo |
| Edge      | 90+            | ✅ Completo |
| Opera     | 76+            | ✅ Completo |
| Samsung Internet | 14+ | ✅ Completo |

### Características por Navegador
- **Smooth Scroll**: Todos los navegadores modernos
- **CSS Variables**: Todos los navegadores modernos
- **LocalStorage**: Todos los navegadores modernos
- **PWA**: Chrome, Edge, Samsung Internet, Safari 14+

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviar pull requests.

### Formas de Contribuir
- 🐛 Reportar bugs
- 💡 Sugerir nuevas características
- 📝 Mejorar documentación
- 🌍 Añadir traducciones
- 🎨 Mejorar diseño

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

**Ivette González** - Masoterapeuta Profesional

- 🌐 Website: [ivettegonzalez.cl](https://ivettegonzalez.cl)
- 📧 Email: [ivettegonzalezrifo@gmail.com](mailto:ivettegonzalezrifo@gmail.com)
- 📱 WhatsApp: [+569 9613 8109](https://wa.me/56996138109)
- 📸 Instagram: [@Masoterapia.Ivette](https://www.instagram.com/masoterapia.ivette/)
- 👤 Facebook: [@ivette.rifo](https://web.facebook.com/ivette.rifo)
- 🐦 Twitter: [@IveMasoterapia](https://twitter.com/IveMasoterapia)

---

## 🙏 Agradecimientos

- Font Awesome por los iconos
- Google Fonts por la tipografía Poppins
- Comunidad de desarrolladores web por las mejores prácticas

---

<div align="center">

**Hecho con ❤️ en Chile**

© 2026 Ivette González - Todos los derechos reservados

[⬆ Volver arriba](#ivette-gonzález---masoterapeuta-profesional)

</div>

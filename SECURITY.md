# Política de Seguridad

## 🔒 Versiones Soportadas

Actualmente se proporciona soporte de seguridad para las siguientes versiones:

| Versión | Soportada          | Estado |
| ------- | ------------------ | ------ |
| 2026.02.08.4 | ✅ Sí | Actual |
| 2026.02.08.3 | ✅ Sí | Estable |
| 2026.02.08.2 | ⚠️ Limitado | Deprecada |
| 2026.02.08.1 | ❌ No | Deprecada |
| < 2026.02.08 | ❌ No | No soportada |

---

## 🚨 Reportar una Vulnerabilidad

La seguridad de nuestros usuarios es nuestra máxima prioridad. Si descubres una vulnerabilidad de seguridad, por favor repórtala de manera responsable.

### Cómo Reportar

**NO** abras un issue público en GitHub para vulnerabilidades de seguridad.

En su lugar, envía un reporte privado a:

📧 **Email**: ivettegonzalezrifo@gmail.com  
📱 **WhatsApp**: +569 9613 8109 (solo para casos urgentes)

### Información a Incluir

Por favor incluye la siguiente información en tu reporte:

1. **Descripción de la vulnerabilidad**
   - Tipo de vulnerabilidad (XSS, CSRF, SQL Injection, etc.)
   - Impacto potencial
   - Severidad estimada (Crítica, Alta, Media, Baja)

2. **Pasos para reproducir**
   - Instrucciones detalladas paso a paso
   - URLs afectadas
   - Capturas de pantalla o videos (si aplica)

3. **Versión afectada**
   - Versión del sitio web
   - Navegador y versión
   - Sistema operativo

4. **Prueba de concepto (PoC)**
   - Código de ejemplo (si aplica)
   - Payload utilizado
   - Resultados obtenidos

5. **Sugerencias de mitigación** (opcional)
   - Posibles soluciones
   - Parches recomendados

### Proceso de Respuesta

1. **Confirmación** (24-48 horas)
   - Confirmaremos la recepción de tu reporte
   - Asignaremos un número de seguimiento

2. **Evaluación** (3-5 días)
   - Evaluaremos la severidad y el impacto
   - Reproduciremos la vulnerabilidad
   - Determinaremos el plan de acción

3. **Desarrollo de Parche** (7-14 días)
   - Desarrollaremos y probaremos la solución
   - Te mantendremos informado del progreso

4. **Despliegue** (1-3 días)
   - Desplegaremos el parche en producción
   - Verificaremos que la vulnerabilidad esté resuelta

5. **Divulgación** (30 días después del parche)
   - Publicaremos un aviso de seguridad
   - Te acreditaremos el descubrimiento (si lo deseas)

### Recompensas

Aunque este es un proyecto pequeño, valoramos enormemente tu contribución:

- 🏆 **Reconocimiento público** en el CHANGELOG y SECURITY.md
- 🎁 **Sesión de masoterapia gratuita** para vulnerabilidades críticas
- 🧼 **Set de jabones artesanales** para vulnerabilidades de alta severidad

---

## 🛡️ Medidas de Seguridad Implementadas

### Seguridad del Frontend

#### 1. Protección contra XSS (Cross-Site Scripting)
- ✅ Sanitización de inputs
- ✅ Content Security Policy (CSP) configurado
- ✅ Uso de `textContent` en lugar de `innerHTML`
- ✅ Validación de datos del usuario

#### 2. Protección CSRF (Cross-Site Request Forgery)
- ✅ SameSite cookies configuradas
- ✅ Tokens CSRF en formularios (si aplica)
- ✅ Validación de origen de requests

#### 3. Headers de Seguridad (.htaccess)
```apache
# X-Content-Type-Options
Header always set X-Content-Type-Options nosniff

# X-Frame-Options (Clickjacking)
Header always set X-Frame-Options DENY

# X-XSS-Protection
Header always set X-XSS-Protection "1; mode=block"

# Referrer-Policy
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Permissions-Policy
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
```

#### 4. HTTPS Forzado
- ✅ Redirección automática HTTP → HTTPS
- ✅ HSTS (HTTP Strict Transport Security)
- ✅ Certificado SSL/TLS válido

#### 5. Protección de Datos
- ✅ LocalStorage solo para preferencias no sensibles
- ✅ No se almacenan datos personales en el cliente
- ✅ No se utilizan cookies de terceros

### Seguridad del Backend

#### 1. Configuración del Servidor
- ✅ Versión de PHP actualizada (7.4+)
- ✅ Módulos de seguridad habilitados
- ✅ Permisos de archivos correctos (644 para archivos, 755 para directorios)
- ✅ .htaccess protegido

#### 2. Protección de Archivos Sensibles
```apache
# Denegar acceso a archivos sensibles
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>
```

#### 3. Rate Limiting
- ✅ Límite de requests por IP
- ✅ Protección contra DDoS básica
- ✅ Throttling en endpoints críticos

### Seguridad de Dependencias

#### 1. Librerías de Terceros
- ✅ Font Awesome 6.4.0 (última versión estable)
- ✅ Google Fonts (CDN oficial)
- ✅ Sin dependencias npm/node_modules

#### 2. Auditoría Regular
- ✅ Revisión mensual de dependencias
- ✅ Actualización de librerías
- ✅ Monitoreo de CVEs

---

## 🔐 Mejores Prácticas para Usuarios

### Para Desarrolladores

1. **Mantén tu entorno actualizado**
   ```bash
   # Verifica la versión actual
   git pull origin main
   ```

2. **No expongas información sensible**
   - No subas archivos de configuración con credenciales
   - Usa variables de entorno para datos sensibles
   - Revisa commits antes de push

3. **Valida todos los inputs**
   ```javascript
   // Ejemplo de validación
   function sanitizeInput(input) {
       return input.replace(/[<>]/g, '');
   }
   ```

4. **Usa HTTPS en desarrollo**
   ```bash
   # Genera certificado local
   mkcert localhost
   ```

### Para Administradores

1. **Backups regulares**
   - Backup diario de archivos
   - Backup semanal de base de datos (si aplica)
   - Almacenamiento en ubicación segura

2. **Monitoreo de logs**
   ```bash
   # Revisa logs de acceso
   tail -f /var/log/apache2/access.log
   
   # Revisa logs de error
   tail -f /var/log/apache2/error.log
   ```

3. **Actualizaciones del servidor**
   ```bash
   # Ubuntu/Debian
   sudo apt update && sudo apt upgrade
   
   # CentOS/RHEL
   sudo yum update
   ```

4. **Firewall configurado**
   ```bash
   # UFW (Ubuntu)
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```

---

## 📊 Historial de Seguridad

### 2026

#### v2026.02.08.4 (Actual)
- ✅ Sin vulnerabilidades conocidas
- ✅ Todos los headers de seguridad implementados
- ✅ HTTPS forzado
- ✅ Accesibilidad WCAG 2.1 AA

#### v2026.02.08.3
- ✅ Mejoras de accesibilidad
- ✅ ARIA labels implementados
- ✅ Focus visible mejorado

#### v2026.02.08.2
- ✅ Optimizaciones de performance
- ✅ Throttle implementado
- ✅ Preload de recursos

#### v2026.02.08.1
- ✅ Corrección de bugs críticos
- ✅ Validaciones añadidas
- ✅ Sanitización de inputs

---

## 🔍 Auditorías de Seguridad

### Última Auditoría
- **Fecha**: 2026-02-08
- **Tipo**: Interna
- **Resultado**: ✅ Aprobada
- **Vulnerabilidades encontradas**: 0
- **Recomendaciones implementadas**: 100%

### Próxima Auditoría Programada
- **Fecha**: 2026-03-08
- **Tipo**: Externa (opcional)

---

## 📚 Recursos Adicionales

### Guías de Seguridad
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Google Web Fundamentals - Security](https://developers.google.com/web/fundamentals/security)

### Herramientas de Seguridad
- [Observatory by Mozilla](https://observatory.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 📞 Contacto de Seguridad

Para reportes de seguridad urgentes:

📧 **Email**: ivettegonzalezrifo@gmail.com  
📱 **WhatsApp**: +569 9613 8109  
🌐 **Website**: https://ivettegonzalez.cl

**Tiempo de respuesta esperado**: 24-48 horas

---

## 🙏 Agradecimientos

Agradecemos a todos los investigadores de seguridad que han contribuido a hacer este proyecto más seguro:

- Ninguno hasta el momento (¡sé el primero!)

---

<div align="center">

**La seguridad es responsabilidad de todos**

Última actualización: 2026-02-08

</div>

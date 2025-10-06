# 🚀 Guía de SEO - Emozziona

## ✅ Implementaciones Realizadas

### 1. **Metadata Completa en Layout Principal** (`src/app/layout.tsx`)
- ✅ Título dinámico con template
- ✅ Descripción optimizada con palabras clave
- ✅ Keywords relevantes para el negocio
- ✅ Open Graph para redes sociales (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Robots meta tags
- ✅ Idioma configurado a español (`lang="es"`)

### 2. **Metadata por Página**
Cada página tiene su propia metadata optimizada:
- **Inicio** (`/`): Metadata general del negocio
- **Sobre Nosotros** (`/about`): Información sobre la empresa
- **Historia** (`/history`): Historia de la fundadora y la empresa

### 3. **Structured Data (JSON-LD)**
Implementado Schema.org para mejorar la comprensión de los motores de búsqueda:
- ✅ **OrganizationSchema**: Información de la empresa
- ✅ **ProductSchema**: Información de productos/servicios
- ✅ **AboutPageSchema**: Página de historia
- ✅ **BreadcrumbSchema**: Navegación estructurada

### 4. **Archivos de SEO Técnico**
- ✅ **sitemap.ts**: Mapa del sitio XML automático
- ✅ **robots.ts**: Configuración para crawlers
- ✅ **manifest.ts**: PWA manifest para mejor experiencia

### 5. **Optimizaciones de Imágenes**
- Uso de Next.js Image component para optimización automática
- Alt text descriptivo en todas las imágenes

---

## 📋 Checklist de SEO Adicional

### Tareas Pendientes (Recomendadas)

#### 1. **Google Search Console**
```bash
# Pasos:
1. Ir a https://search.google.com/search-console
2. Agregar tu dominio: emozziona.com
3. Verificar propiedad (agregar el código en layout.tsx)
4. Enviar el sitemap: https://emozziona.com/sitemap.xml
```

#### 2. **Google Analytics**
```typescript
// Agregar en src/app/layout.tsx dentro del <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

#### 3. **Meta Pixel (Facebook)**
```typescript
// Para tracking de conversiones y remarketing
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'TU_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

#### 4. **Actualizar URLs**
En los siguientes archivos, reemplaza `https://emozziona.com` con tu dominio real:
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/components/seo/JsonLd.tsx`

#### 5. **Crear Contenido Adicional**
- [ ] Blog para contenido SEO
- [ ] Página de contacto con formulario
- [ ] Página de servicios detallada
- [ ] Galería de productos/proyectos
- [ ] Testimonios de clientes

#### 6. **Performance**
```bash
# Verificar performance con Lighthouse
npm run build
npm run start
# Abrir Chrome DevTools > Lighthouse > Generar reporte
```

#### 7. **Redes Sociales**
Actualizar en `src/components/seo/JsonLd.tsx`:
```typescript
sameAs: [
  'https://www.facebook.com/emozziona',
  'https://www.instagram.com/emozziona',
  'https://www.linkedin.com/company/emozziona',
  'https://www.tiktok.com/@emozziona',
]
```

#### 8. **Favicon y Open Graph Images**
- [ ] Crear favicon.ico (32x32, 16x16)
- [ ] Crear apple-touch-icon.png (180x180)
- [ ] Crear og-image.jpg (1200x630) optimizado para redes sociales

---

## 🎯 Keywords Principales

### Keywords Implementadas:
- Regalos corporativos
- Merchandising personalizado
- Regalos empresariales
- Branding
- Packaging premium
- Regalos personalizados
- Merchandising de marca
- Regalos ejecutivos

### Keywords Sugeridas para Contenido Futuro:
- Regalos corporativos Lima
- Regalos empresariales Perú
- Merchandising corporativo personalizado
- Regalos para clientes VIP
- Kits corporativos personalizados
- Regalos de fin de año empresariales
- Obsequios corporativos premium

---

## 📊 Herramientas de Monitoreo

### Gratuitas:
1. **Google Search Console** - Monitoreo de indexación
2. **Google Analytics** - Análisis de tráfico
3. **Google PageSpeed Insights** - Performance
4. **Bing Webmaster Tools** - Indexación en Bing

### De Pago (Opcionales):
1. **Ahrefs** - Análisis de backlinks y keywords
2. **SEMrush** - Análisis competitivo
3. **Moz** - Domain Authority tracking

---

## 🔍 Verificación de SEO

### Comandos útiles:
```bash
# Verificar que el sitemap se genera correctamente
curl http://localhost:3000/sitemap.xml

# Verificar robots.txt
curl http://localhost:3000/robots.txt

# Verificar manifest
curl http://localhost:3000/manifest.webmanifest
```

### URLs a verificar después del deploy:
- ✅ https://emozziona.com/sitemap.xml
- ✅ https://emozziona.com/robots.txt
- ✅ https://emozziona.com/manifest.webmanifest

---

## 📈 Métricas a Monitorear

1. **Core Web Vitals**
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

2. **SEO Metrics**
   - Posición en Google para keywords principales
   - Tráfico orgánico mensual
   - Tasa de rebote
   - Tiempo en página

3. **Conversiones**
   - Formularios completados
   - Clics en WhatsApp/Email
   - Páginas por sesión

---

## 🚀 Próximos Pasos

1. **Inmediato** (Esta semana):
   - [ ] Actualizar todas las URLs con el dominio real
   - [ ] Configurar Google Search Console
   - [ ] Configurar Google Analytics
   - [ ] Verificar que todas las imágenes tengan alt text

2. **Corto Plazo** (Este mes):
   - [ ] Crear contenido de blog
   - [ ] Optimizar imágenes Open Graph
   - [ ] Configurar Meta Pixel
   - [ ] Crear página de contacto

3. **Mediano Plazo** (3 meses):
   - [ ] Estrategia de link building
   - [ ] Crear más contenido SEO
   - [ ] Optimizar conversiones
   - [ ] A/B testing de landing pages

---

## 📞 Soporte

Para más información sobre SEO en Next.js 15:
- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)

---

**Última actualización**: Enero 2025
**Versión Next.js**: 15.5.4

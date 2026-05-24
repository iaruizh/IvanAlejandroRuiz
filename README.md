# ivanruiz.com — Marca Personal

Sitio web de marca personal de **Iván Alejandro Ruiz Hernández**, terapeuta holointegrativo y fundador de ZANATTE Centro Holointegrativo.

## Stack

- **Next.js 15** con App Router
- **Tailwind CSS 4**
- **Framer Motion** para animaciones
- **TypeScript**

## Estructura del proyecto

```
app/
  layout.tsx          → Root layout con SEO global, Schema.org, Open Graph
  page.tsx            → Homepage completa (hero, stats, about, filosofía, terapias, testimonios, zanatte, contacto)
  sobre-mi/page.tsx   → Página "Sobre mí" con bio completa
  blog/
    page.tsx          → Índice del blog (15 artículos SEO)
    [slug]/page.tsx   → Páginas individuales de artículos con JSON-LD
  conferencias/page.tsx → Temas de conferencias disponibles
  prensa/page.tsx     → Kit de prensa para medios
  en/page.tsx         → Versión en inglés (auto-detección de idioma)
  sitemap.ts          → Sitemap automático
  globals.css         → Tema oscuro con colores dorados

components/
  Nav.tsx             → Navegación fija con scroll effect
  Footer.tsx          → Footer con links y redes sociales

middleware.ts         → Auto-detección de idioma (redirige a /en si navegador en inglés)
public/robots.txt     → Permite todos los crawlers de IA (GPTBot, ClaudeBot, etc.)
```

## SEO incluido

- ✅ Schema.org JSON-LD: Person, WebSite, Article, BreadcrumbList
- ✅ Open Graph tags en todas las páginas
- ✅ Twitter Cards con @IvanAleRuizH
- ✅ Meta descriptions únicas por página
- ✅ robots.txt con todos los bots de IA permitidos
- ✅ Sitemap automático en /sitemap.xml
- ✅ Versión en inglés en /en/ con hreflang
- ✅ Auto-detección de idioma via middleware

## Instalación local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

### Paso 1: Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `ivanruiz-web`
3. Privado o público (tu elección)
4. **No** inicialices con README

### Paso 2: Subir el código

```bash
git init
git add .
git commit -m "feat: sitio inicial ivanruiz.com"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ivanruiz-web.git
git push -u origin main
```

### Paso 3: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Clic en **"Add New Project"**
3. Selecciona el repositorio `ivanruiz-web`
4. Vercel detecta Next.js automáticamente
5. Clic en **"Deploy"**

### Paso 4: Apuntar el dominio ivanruiz.com

1. En el dashboard de Vercel → tu proyecto → **Settings → Domains**
2. Agrega `ivanruiz.com` y `www.ivanruiz.com`
3. Vercel te dará registros DNS para agregar en tu proveedor de dominio
4. En tu proveedor (GoDaddy, Namecheap, etc.) agrega los registros que Vercel indica

### Auto-deploy

Cada vez que hagas `git push`, Vercel desplegará automáticamente. ✅

## Personalización de colores

En `app/globals.css`, cambia estas variables para ajustar el acento dorado:

```css
--color-accent: #b8935a;    /* dorado principal */
--color-accent-light: #d4a96a;  /* dorado claro */
```

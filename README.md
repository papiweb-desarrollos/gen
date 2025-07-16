# 🎨 Generador de Imágenes IA - Papiweb

Un generador de imágenes espectacular powered by **Google Gemini API** con efectos visuales impresionantes.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Gemini API](https://img.shields.io/badge/Google-Gemini%20API-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-teal)

## ✨ Características Principales

### 🚀 Generación de Imágenes
- **API Google Gemini** - Imagen 3.0 Generate 002
- Prompts detallados con múltiples parámetros
- Estilos: Fotorrealista, Anime, Cyberpunk, Fantasy, etc.
- Paletas de colores personalizables
- Control de emociones y aspectos ratio
- Descarga directa de imágenes en JPEG

### 🎆 Efectos Visuales Espectaculares
- **Lluvia de estrellas animada** con rastros luminosos
- **Explosiones multicolor** aleatorias
- **Marca "Papiweb"** aparece en 15% de explosiones con efectos profesionales:
  - Múltiples capas de brillo dorado
  - Chispas rotatorias animadas
  - Efectos de sombra y resplandor
- **Fondo dinámico** canvas en tiempo real

### 🎨 Interfaz Moderna
- Diseño **dark theme** elegante
- Gradientes **púrpura/rosa** 
- **Footer personalizado** con:
  - Icono de café con vapor animado
  - Enlace directo a MercadoPago Papiweb
  - Efectos hover suaves
- **Responsive design** completo
- Animaciones y transiciones suaves

## 🛠️ Tecnologías

- **React 19** + **TypeScript**
- **Vite** para desarrollo ultra-rápido
- **Google Gemini API** para generación IA
- **Tailwind CSS** para styling
- **Canvas API** para animaciones
- **ES Modules** y **importmaps**

## 🚀 Deploy Rápido

### Vercel (Recomendado)
```bash
# 1. Fork este repo
# 2. Conecta con Vercel
# 3. Agrega variable de entorno:
GEMINI_API_KEY=tu_api_key_aqui
# 4. Deploy automático ✅
```

### Netlify
```bash
# 1. Fork este repo  
# 2. Conecta con Netlify
# 3. Build settings:
#    Build command: npm run build
#    Publish directory: dist
# 4. Environment variables:
GEMINI_API_KEY=tu_api_key_aqui
```

### Otras plataformas
El proyecto es compatible con cualquier hosting que soporte:
- Node.js 18+
- Build estático
- Variables de entorno

## 🔧 Desarrollo Local

### Prerrequisitos
- **Node.js 18+**
- **API Key de Google Gemini**

### Instalación
```bash
# 1. Clonar repositorio
git clone https://github.com/papiweb-desarrollos/gen.git
cd gen

# 2. Instalar dependencias
npm install

# 3. Configurar API Key
echo "GEMINI_API_KEY=tu_api_key_aqui" > .env.local

# 4. Iniciar desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
gen/
├── components/
│   ├── ImageDisplay.tsx        # Visor de imágenes con descarga
│   ├── ImageGenerator.tsx      # Componente principal
│   ├── PromptForm.tsx         # Formulario de configuración
│   ├── StarfieldBackground.tsx # Fondo animado con estrellas
│   └── icons/
│       ├── CoffeeIcon.tsx     # Icono café animado
│       ├── DownloadIcon.tsx   # Icono descarga
│       └── SparklesIcon.tsx   # Icono chispas
├── services/
│   └── geminiService.ts       # Cliente API Gemini
├── App.tsx                    # Componente raíz
├── constants.ts               # Configuraciones
├── types.ts                   # Tipos TypeScript
└── vite.config.ts            # Configuración Vite
```

## 🎯 Funcionalidades Avanzadas

### Generación de Imágenes
- **Prompts inteligentes** con contexto automático
- **Múltiples estilos** artísticos
- **Paletas de colores** predefinidas
- **Control emocional** del resultado
- **Aspect ratios** variables (1:1, 16:9, etc.)

### Efectos Visuales
- **30 estrellas** simultáneas con física realista
- **Rastros luminosos** con desvanecimiento
- **Explosiones procedurales** con partículas
- **Texto "Papiweb"** con efectos de película
- **60 FPS** de animación fluida

### UX/UI
- **Indicadores de carga** animados
- **Mensajes de error** informativos
- **Botón de descarga** contextual
- **Formulario sticky** en desktop
- **Validación en tiempo real**

## 🔐 Seguridad

- ✅ **API Key protegida** (no se incluye en build)
- ✅ **Variables de entorno** configuradas
- ✅ **HTTPS requerido** para producción
- ✅ **Sin datos sensibles** en código

## 📈 Performance

- ⚡ **Vite** para builds ultra-rápidos
- ⚡ **React 19** con optimizaciones
- ⚡ **Canvas optimizado** para animaciones
- ⚡ **Lazy loading** de componentes
- ⚡ **Build size** < 500KB

## 🎨 Personalización

### Colores del tema
Modifica en `App.tsx` y componentes:
```css
/* Gradientes principales */
from-purple-400 to-pink-500
from-purple-500 to-pink-500

/* Backgrounds */
bg-gray-900 bg-gray-800
```

### Efectos de estrellas
Ajusta en `StarfieldBackground.tsx`:
```typescript
// Cantidad de estrellas
for (let i = 0; i < 30; i++)

// Probabilidad de explosiones
if (Math.random() < 0.005)

// Probabilidad de texto "Papiweb"  
const showText = Math.random() < 0.15
```

## 📄 Licencia

Este proyecto está licenciado bajo MIT License.

## 👨‍💻 Desarrollado por

**Papiweb - Desarrollos Informáticos**
- 🌐 [MercadoPago](https://link.mercadopago.com.ar/papiweb)
- 📧 Contacto para proyectos custom

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐

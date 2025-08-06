# TPI - Think Positive Ideas Landing Page

Una landing page horizontal moderna y animada para la agencia de marketing digital TPI (Think Positive Ideas).

## 🚀 Características

- **Scroll Horizontal**: Navegación única con scroll horizontal suave
- **Animaciones Fluidas**: Animaciones con Framer Motion para una experiencia inmersiva
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Secciones Interactivas**: Hero, Servicios, Testimonios y Contacto
- **Navegación Inteligente**: Menú de navegación con indicadores de sección

## 🛠️ Tecnologías Utilizadas

- **Next.js 15**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS utility-first
- **Framer Motion**: Biblioteca de animaciones
- **GSAP**: Animaciones avanzadas (opcional)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd tpi-landing
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
└── components/
    ├── HorizontalScroll.tsx # Componente de scroll horizontal
    ├── HeroSection.tsx      # Sección hero
    ├── ServicesSection.tsx  # Sección de servicios
    ├── TestimonialsSection.tsx # Sección de testimonios
    ├── ContactSection.tsx   # Sección de contacto
    └── Navigation.tsx       # Navegación
```

## 🎯 Funcionalidades

### Scroll Horizontal
- Navegación suave entre secciones
- Animaciones de transición fluidas
- Indicadores de progreso visual

### Secciones
1. **Hero**: Presentación de la marca con animaciones de fondo
2. **Servicios**: Catálogo de servicios con tarjetas interactivas
3. **Testimonios**: Opiniones de clientes con estadísticas
4. **Contacto**: Formulario de contacto con información de la empresa

### Navegación
- Menú flotante con indicadores de sección activa
- Navegación por clic o scroll
- Animaciones de transición suaves

## 🚀 Scripts Disponibles

- `npm run dev`: Ejecuta el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Ejecuta la aplicación en modo producción
- `npm run lint`: Ejecuta el linter

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en los componentes:
- Azul: `blue-600`, `blue-500`
- Púrpura: `purple-600`, `purple-500`
- Rosa: `pink-600`

### Contenido
Edita el contenido en cada componente:
- `HeroSection.tsx`: Título, subtítulo y descripción principal
- `ServicesSection.tsx`: Lista de servicios
- `TestimonialsSection.tsx`: Testimonios y estadísticas
- `ContactSection.tsx`: Información de contacto

## 📱 Responsive Design

La landing page está optimizada para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. ¡Listo! Se desplegará automáticamente

### Otros Proveedores
```bash
npm run build
npm run start
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

TPI - Think Positive Ideas
- Email: hola@tpi.com
- Teléfono: +54 11 1234-5678
- Ubicación: Buenos Aires, Argentina

---

Desarrollado con ❤️ por TPI

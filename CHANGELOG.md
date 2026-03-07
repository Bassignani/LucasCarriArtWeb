# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [0.2.0] - 2026-03-07

### Added
- Estructura inicial funcional del portfolio en `src/` con rutas para Home, Illustrations, Logos, Portraits, Available Designs y Collabs.
- Sistema de navegación visual por iconos de ola con comportamiento contextual (`Home` dinámico en páginas internas).
- Sistema de galería reutilizable con `GalleryGrid`, `GalleryItem` y `ExpandedArtwork`.
- Animaciones de expansión/cierre integradas en la grilla usando Framer Motion.
- Sección de contacto reutilizable (formulario UI + enlaces a Instagram/WhatsApp/email).
- Fuente de datos mock de artworks categorizados en `src/data/artworks.ts`.
- Placeholders de imágenes en `/public/images/placeholders` para las categorías principales.
- Nueva documentación técnica en español para arquitectura, componentes, navegación y galerías.

### Changed
- Migración de la app desde el scaffold inicial de Next.js a una estructura productiva centrada en portfolio artístico.
- Actualización de versión del proyecto de `0.1.0` a `0.2.0`.

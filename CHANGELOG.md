# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [0.3.3] - 2026-03-09

### Changed
- Migración de tipografías desde archivos locales `.ttf` a variables CSS globales para evitar errores de compatibilidad con PRs automáticos que no aceptan binarios adjuntos.
- Se mantienen las variables `--font-brittany` y `--font-gagalin` para no romper estilos existentes en Home y navegación, sin depender de descarga remota en build.
- Documentación de Home actualizada con la estrategia tipográfica sin binarios versionados.

## [0.3.2] - 2026-03-09

### Changed
- Imagen central del hero en Home ampliada para dar mayor protagonismo visual al banner.
- Tipografía de título principal y labels de navegación alineada al estilo BrittanySignature mediante la clase `font-brittany-signature`.
- Ajuste de capas y posición en Home para mantener la navegación fija sobre la zona del footer.
- Footer mantenido como bloque final del layout, por debajo del contenido principal.

## [0.3.1] - 2026-03-09

### Changed
- Ajuste del título principal `LucasCarriArt` en Home para asegurar uso explícito de fuente Brittany.
- Navegación visual actualizada para mostrar la label a la derecha de cada botón y conservar estética artística.
- Distribución de navegación en Home reorganizada en patrón de dos filas (3 ítems superiores y 2 inferiores).
- Posición de navegación de Home ajustada para mantenerse por encima del footer y evitar solapamientos.

## [0.3.0] - 2026-03-09

### Added
- Nueva sección hero en Home con banner, título principal, subtítulo y descripción en párrafos para mejorar la narrativa visual de portada.
- Carga de fuentes locales `Brittany.ttf` y `Gagalin.ttf` mediante `next/font/local` con variables CSS globales.
- Documentación técnica en `docs/home-hero.md` sobre estructura del hero, sistema tipográfico y comportamiento de navegación en Home.

### Changed
- Tipografía de labels en `WaveNavigation` actualizada para usar Brittany sin alterar la lógica de navegación.
- Navegación de Home ajustada a posición fija en el borde inferior de la ventana para mantener acceso constante a categorías.
- Espaciado de Home actualizado para evitar solapamiento entre contenido principal y navegación fija.

## [0.2.1] - 2026-03-07

### Changed
- Ajuste visual global para que todas las páginas utilicen fondo `rgb(214,210,193)`.
- Header actualizado para usar el logo real del proyecto desde `/public/banner.png`.
- Navegación actualizada para usar el recurso gráfico `/public/ui/button.png` como botón visual de cada ítem.
- Reubicación de la navegación en Home a la zona inferior de la página, manteniendo navegación superior para secciones internas.

### Fixed
- Corrección de estructura de layout para separar la experiencia de Home (navegación inferior) del resto de rutas.

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

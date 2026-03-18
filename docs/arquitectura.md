# Arquitectura actual (MVP funcional)

## Estructura base

El proyecto se organiza en `src/` para mantener separación clara entre rutas, componentes y datos:

- `src/app`: rutas App Router
- `src/components`: componentes reutilizables
- `src/data`: fuente de datos mock de artworks
- `src/lib`: utilidades

## Rutas implementadas

- `/`
- `/illustrations`
- `/logos`
- `/portraits`
- `/available-designs`
- `/collabs`

## Sistemas clave

### 1) Navegación visual

Implementada con `WaveNavigation`, basada en iconos de ola y comportamiento contextual (Home dinámico).

### 2) Galería animada

Implementada con Framer Motion usando `layoutId` compartido para transición fluida entre celda y vista ampliada.

### 3) Datos de obras

`src/data/artworks.ts` centraliza el contenido mock por categoría y permite filtrado por función reutilizable.

## Decisiones de diseño

- UI minimalista para priorizar ilustraciones.
- Componentes pequeños y tipados.
- Preparación para futura tienda sin implementar checkout.

## Ajuste de layout por ruta (v0.2.1)

Se agregó `SiteShell` como componente de estructura para detectar la ruta actual y decidir la posición de la navegación:

- Home (`/`): navegación inferior
- Rutas internas: navegación superior

Esto permite mantener el diseño de portada sin duplicar lógica en cada página.

## Configuración de entorno de desarrollo

Se desactivó el indicador flotante de Next.js en `next.config.ts` mediante `devIndicators: false` para evitar ruido visual sobre el portfolio durante pruebas en local.

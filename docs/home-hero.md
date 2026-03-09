# Home Hero y sistema tipográfico

## Objetivo

Se ajustó nuevamente la portada Home para cumplir el criterio visual final: banner central más protagonista, uso de estilo **BrittanySignature** en título y navegación, y separación clara entre navegación fija y footer.

## Estructura del hero en Home

La Home (`src/app/page.tsx`) mantiene la composición de hero, pero con ajustes:

1. **Banner principal** (`/public/banner.png`) más grande dentro del contenedor para aumentar presencia visual.
2. **Título principal** `LucasCarriArt` con clase `font-brittany-signature` para asegurar la firma visual Brittany en el texto central.
3. **Subtítulo** en mayúsculas `A TSUNAMI OF INFINITE CREATION` con fuente Gagalin.
4. **Bloque descriptivo** en párrafos para lectura clara en mobile/tablet/desktop.

## Sistema tipográfico

Se cargan tipografías mediante variables CSS globales en `src/app/globals.css` para evitar versionado de binarios y dependencia de red en build:

- `--font-brittany`
- `--font-gagalin`

Clases utilitarias disponibles:

- `font-brittany`
- `font-brittany-signature`
- `font-gagalin`

`font-brittany-signature` se mantiene para conservar la firma visual y se usa específicamente en:

- título principal del hero
- labels de `WaveNavigation`

## Navegación y footer en Home

Ajustes aplicados sin cambiar la lógica de rutas:

- Labels de navegación a la derecha del botón gráfico.
- Distribución de Home en 2 filas: **3 arriba + 2 abajo**.
- Navegación fija posicionada **sobre el footer** con `z-index` superior.
- Footer mantenido como bloque final del layout (debajo de todo el contenido).
- Padding inferior de Home incrementado para prevenir solapamiento visual.

## Resultado UX

- Mayor impacto del banner en la primera vista.
- Firma tipográfica consistente en hero + navegación.
- Jerarquía más clara: contenido → footer → navegación flotante sobre zona inferior.


## Compatibilidad de PR

Se eliminó el versionado de archivos `.ttf` dentro del repositorio y se migró a variables tipográficas en CSS para evitar errores de compatibilidad al generar PRs automáticos con binarios y fallos de build por descarga remota de fuentes.

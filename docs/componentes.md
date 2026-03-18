# Componentes implementados en el MVP

## Layout

### `PageContainer`

Define el ancho máximo (1200px) y padding general para respetar la composición visual del sitio.

### `Footer`

Pie de página simple con información del portfolio.

## Navegación

### `WaveNavigation`

Navegación principal basada en iconos de olas.

- Reemplaza el item activo por `Home` dentro de páginas internas.
- Usa `usePathname` para comportamiento contextual.
- Mantiene navegación accesible con `aria-current`.

## Galería

### `GalleryGrid`

- Renderiza artworks en grilla responsive (2/2/3 columnas).
- Controla el estado de item expandido.

### `GalleryItem`

- Tarjeta de obra con `next/image`.
- Hover suave y botón accesible.
- Modo especial para Available Designs preparado para futuro botón de compra.

### `ExpandedArtwork`

- Vista ampliada centrada.
- Mantiene la grilla visible en segundo plano.
- Cierre por botón o click en overlay.

## Contacto

### `ContactSection`

Bloque reutilizable en Home con una columna titulada `Contacts` y 3 filas de contacto interactivo.

- iconos por canal desde `/public/ui/button_email.png`, `/public/ui/button_insta.png` y `/public/ui/button_whatsapp.png`
- enlace de email (`mailto:`)
- enlace a Instagram
- enlace a WhatsApp
- botones de contacto (email, Instagram y WhatsApp) escalados a 2x para mejorar visibilidad

## Principios aplicados

- componentes funcionales
- tipado con TypeScript
- responsabilidad única por componente
- preparación para escalado futuro

### `SiteShell`

Componente de layout cliente que decide la posición de `WaveNavigation` según la ruta activa.

- Home: sin nav superior
- Internas: nav superior

# Sistema de galerías (MVP)

## Objetivo

El sistema de galerías del MVP permite mostrar obras por categoría con una interacción integrada en la grilla, sin usar un lightbox clásico independiente.

## Componentes

- `GalleryGrid`: controla el estado de obra expandida y renderiza la grilla responsive.
- `GalleryItem`: representa cada tarjeta dentro del grid y deja un hueco cuando la obra está expandida.
- `ExpandedArtwork`: muestra la obra ampliada en el centro con animación de transición de Framer Motion.

## Comportamiento implementado

1. El usuario hace click en una obra.
2. La tarjeta original se reemplaza por un espacio vacío con borde tenue.
3. La obra se anima desde su posición original al centro.
4. El resto de la galería sigue visible en segundo plano.
5. Al cerrar, la obra vuelve animada a su celda.

## Responsive

La grilla usa:

- Mobile: 2 columnas
- Tablet: 2 columnas
- Desktop: 3 columnas

## Preparación para futuras versiones

La estructura de `Artwork` incluye campos opcionales para evolucionar a tienda (`isAvailableForPurchase`, `description`) sin romper el MVP.

## Ajustes visuales recientes

- Se eliminó el contenedor blanco sobredimensionado al expandir una obra en `ExpandedArtwork`.
- La imagen ampliada ahora se renderiza sin marco extra, respetando únicamente su tamaño máximo visible (`90vh` x `90vw`).
- El botón **Cerrar** queda flotando en la esquina superior derecha de la imagen para mantener la acción accesible sin tapar el contenido principal.


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

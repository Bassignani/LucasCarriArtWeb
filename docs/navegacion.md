# Sistema de navegación por olas

## Objetivo

Implementar una navegación visual y lúdica sin navbar tradicional, siguiendo el estilo surf/vintage del proyecto.

## Componente principal

- `src/components/navigation/WaveNavigation.tsx`

## Reglas implementadas

- En Home (`/`) se muestran las secciones: Illustrations, Logos, Portraits, Available, Collabs.
- Dentro de cualquier sección, el primer icono pasa a ser `Home`.
- La sección actual usa `aria-current="page"` para accesibilidad.

## Detalle visual

Cada item de navegación usa:

- icono circular con trazo negro
- símbolo de ola
- micro animación de elevación en hover
- labels cortos y legibles

## Beneficios de arquitectura

- Componente único y reutilizable para todas las rutas.
- Lógica de estado de ruta encapsulada con `usePathname`.
- Fácil ampliación para futuras categorías.

## Actualización visual 0.2.1

- Los ítems de navegación ahora usan la imagen real del botón en `/public/ui/button.png`.
- En la Home, la navegación se ubica en la parte inferior de la pantalla para respetar la referencia visual del proyecto.
- En el resto de rutas, la navegación se mantiene sobre la galería para facilitar recorridos entre categorías.

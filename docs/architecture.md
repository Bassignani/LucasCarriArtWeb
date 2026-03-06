# Arquitectura del Proyecto

Este documento describe la arquitectura técnica del proyecto **LucasCarri.Art**.

El objetivo es mantener una estructura clara, escalable y fácil de mantener para un sitio portfolio visual basado en galerías de ilustraciones.

---

# 1. Stack tecnológico

El proyecto utiliza:

- Next.js
- React
- TailwindCSS

La aplicación se construye utilizando **Next.js App Router**.

---

# 2. Estructura del proyecto

Estructura principal recomendada:

```
/app
/components
/lib
/styles
/public
/docs
```

Descripción de cada carpeta:

### /app

Contiene las rutas principales del sitio.

Ejemplo:

```
/app
  /portraits
  /logos
  /available-designs
  /collabs
  /contact
  page.tsx
  layout.tsx
```

Cada carpeta representa una página.

---

### /components

Contiene componentes reutilizables de la interfaz.

Ejemplo:

```
/components
  WaveNavigation.tsx
  GalleryGrid.tsx
  GalleryItem.tsx
  LightboxImage.tsx
  HeroSection.tsx
  ContactForm.tsx
```

Reglas:

- componentes pequeños
- reutilizables
- bien tipados

---

### /lib

Contiene lógica reutilizable.

Ejemplo:

```
/lib
  galleryData.ts
  utils.ts
```

---

### /public

Contiene recursos estáticos.

Ejemplo:

```
/public/images
/public/icons
```

---

### /docs

Documentación del proyecto.

```
/docs
  arquitectura.md
  componentes.md
  roadmap.md
  design-reference/
```

---

# 3. Referencias visuales

Las referencias de diseño se encuentran en:

```
/docs/design-reference
```

Estas imágenes representan **el diseño base del sitio** y deben respetarse al implementar la interfaz.

Ejemplos de referencias:

```
docs/design-reference/home-layout.png
docs/design-reference/logos-gallery.png
docs/design-reference/portraits-gallery.png
docs/design-reference/available-designs.png
docs/design-reference/collabs-page.png
```

La implementación de la web debe ser **lo más fiel posible a estas ilustraciones**.

---

# 4. Sistema de navegación

El sitio utiliza un sistema de navegación visual basado en **iconos de olas de surf**.

Características:

- navegación visual
- iconos circulares
- interacción simple
- estilo ilustrado

Componente principal:

```
WaveNavigation
```

Responsabilidades:

- mostrar iconos de secciones
- manejar navegación entre páginas
- mostrar icono de Home cuando corresponda

---

# 5. Sistema de galerías

Las galerías son uno de los componentes centrales del sitio.

Componentes principales:

```
GalleryGrid
GalleryItem
LightboxImage
```

---

## GalleryGrid

Responsable de mostrar el grid de imágenes.

Layout:

Desktop:
3 columnas

Tablet:
2 columnas

Mobile:
2 columnas

Implementado con CSS Grid.

---

## GalleryItem

Elemento individual del grid.

Responsabilidades:

- mostrar imagen
- manejar hover
- activar lightbox

---

## LightboxImage

Sistema de ampliación de imágenes.

Comportamiento:

1. usuario hace click en imagen
2. imagen se anima hacia el centro
3. overlay aparece
4. imagen se amplía
5. al cerrar vuelve a su posición original

---

# 6. Sistema de datos de galerías

Las galerías deben poder cargarse desde archivos de datos.

Ejemplo:

```
/lib/galleryData.ts
```

Ejemplo de estructura:

```ts
export const portraits = [
  {
    id: "portrait-01",
    image: "/images/portraits/portrait1.jpg",
    title: "Surfer Portrait"
  }
]
```

Esto permite en el futuro agregar metadata como:

- precio
- disponibilidad
- categoría
- tags

---

# 7. Animaciones

Las animaciones deben ser simples y suaves.

Se pueden usar:

- CSS
- Framer Motion

Las animaciones principales incluyen:

- hover en iconos
- aparición de imágenes
- animación de lightbox

---

# 8. Responsive design

El sitio debe ser completamente responsive.

Breakpoints aproximados:

Mobile:
< 768px

Tablet:
768px – 1024px

Desktop:
> 1024px

---

# 9. Contacto

La sección de contacto debe incluir:

- formulario simple
- email del artista
- enlaces a redes sociales

Redes principales:

- Instagram
- WhatsApp

---

# 10. Preparación para tienda futura

Aunque inicialmente el sitio es solo portfolio, el código debe permitir agregar en el futuro:

- venta de prints
- venta de diseños
- licencias de arte

Por eso las galerías deben soportar metadata adicional en el futuro.

---

# 11. Principios de arquitectura

El proyecto debe seguir estos principios:

- componentes reutilizables
- separación clara de responsabilidades
- código simple y legible
- arquitectura preparada para escalar

El objetivo es mantener el proyecto **mantenible y extensible a largo plazo**.
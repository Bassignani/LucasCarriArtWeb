# Componentes del Proyecto

Este documento define los **componentes principales de la interfaz** del proyecto **LucasCarri.Art**.

El objetivo es mantener una arquitectura consistente y evitar duplicación de componentes.

Los componentes deben ser:

- reutilizables
- simples
- desacoplados
- fáciles de mantener

---

# 1. Estructura de componentes

Los componentes se ubican en:

```
/components
```

Estructura sugerida:

```
/components
  navigation/
  gallery/
  layout/
  contact/
  ui/
```

---

# 2. Componentes de Layout

## SiteLayout

Ubicación:

```
components/layout/SiteLayout.tsx
```

Responsabilidad:

Layout general del sitio.

Incluye:

- estructura base
- contenedor principal
- navegación global

Ejemplo:

```
<SiteLayout>
  {children}
</SiteLayout>
```

---

# 3. Navegación

## WaveNavigation

Ubicación:

```
components/navigation/WaveNavigation.tsx
```

Este es uno de los componentes más importantes del sitio.

Responsabilidades:

- mostrar iconos de navegación
- manejar navegación entre páginas
- representar visualmente cada sección

Cada icono representa una sección:

- Home
- Portraits
- Logos
- Available Designs
- Collabs
- Contact

Los iconos tienen forma circular con estilo **surf wave badge**.

Cuando el usuario navega a una sección, uno de los iconos debe transformarse en **Home**.

Ejemplo conceptual:

```
WaveNavigation
  - WaveIcon
  - WaveIcon
  - WaveIcon
  - WaveIcon
  - WaveIcon
```

---

## WaveIcon

Ubicación:

```
components/navigation/WaveIcon.tsx
```

Responsabilidad:

Representar un icono individual de navegación.

Props esperadas:

```
label
icon
href
```

Debe tener:

- hover animation
- cursor pointer
- estilo consistente con ilustración

---

# 4. Componentes de Galería

Las galerías son el núcleo del sitio.

Se implementan mediante tres componentes principales.

---

## GalleryGrid

Ubicación:

```
components/gallery/GalleryGrid.tsx
```

Responsabilidad:

Mostrar el grid de imágenes.

Debe ser reutilizable para todas las galerías:

- portraits
- logos
- available designs
- collabs

Props esperadas:

```
images: ImageItem[]
```

Layout responsive:

Desktop:

```
3 columnas
```

Tablet:

```
2 columnas
```

Mobile:

```
2 columnas
```

---

## GalleryItem

Ubicación:

```
components/gallery/GalleryItem.tsx
```

Responsabilidad:

Mostrar una imagen individual dentro del grid.

Incluye:

- imagen
- hover effect
- interacción para abrir lightbox

Props esperadas:

```
image
title
onClick
```

---

## LightboxImage

Ubicación:

```
components/gallery/LightboxImage.tsx
```

Responsabilidad:

Mostrar una imagen ampliada sobre el resto de la página.

Comportamiento esperado:

1. usuario hace click en una imagen
2. se abre overlay
3. la imagen aparece ampliada en el centro
4. el fondo se oscurece
5. al cerrar vuelve a su lugar original

Debe incluir:

- animación de apertura
- animación de cierre
- botón de cerrar
- cerrar al hacer click fuera

Puede implementarse usando:

- Framer Motion
- CSS transitions

---

# 5. Componentes de Home

## HeroSection

Ubicación:

```
components/layout/HeroSection.tsx
```

Responsabilidad:

Sección principal de la página Home.

Debe incluir:

- ilustración central
- nombre del artista
- tagline
- navegación principal

Debe respetar el estilo visual de las ilustraciones originales.

---

# 6. Componentes de Contacto

## ContactForm

Ubicación:

```
components/contact/ContactForm.tsx
```

Responsabilidad:

Formulario para que clientes contacten al artista.

Campos esperados:

```
name
email
message
```

Botón:

```
Send Message
```

En futuras versiones puede integrarse con:

- email API
- backend serverless

---

## SocialLinks

Ubicación:

```
components/contact/SocialLinks.tsx
```

Responsabilidad:

Mostrar redes sociales del artista.

Debe incluir:

- Instagram
- WhatsApp
- Email

Los iconos deben mantener coherencia visual con el resto del sitio.

---

# 7. Componentes UI reutilizables

Estos componentes son pequeños bloques reutilizables.

Ubicación:

```
components/ui/
```

Ejemplos:

```
Button
SectionTitle
Container
Icon
```

---

## Button

Botón reutilizable del sitio.

Debe mantener estilo consistente.

---

## SectionTitle

Título reutilizable para secciones.

Ejemplo:

```
Portraits
Logos
Available Designs
```

---

## Container

Componente para controlar ancho máximo del contenido.

Ejemplo:

```
<Container>
  contenido
</Container>
```

---

# 8. Principios de diseño de componentes

Todos los componentes deben seguir estas reglas:

1. Responsabilidad única
2. Reutilizables
3. Evitar lógica compleja en UI
4. Props claras
5. Código legible

---

# 9. Consistencia visual

Todos los componentes deben respetar el estilo visual del proyecto:

- estilo surf vintage
- outlines negros
- colores planos
- estética ilustrada

Las referencias visuales se encuentran en:

```
/docs/design-reference
```

Los componentes deben implementar una interfaz **lo más fiel posible a esas ilustraciones**.

---

# 10. Extensibilidad

Los componentes deben diseñarse para permitir futuras funcionalidades:

- venta de prints
- tienda online
- licencias de arte
- metadata en imágenes

Por lo tanto los componentes de galería deben poder aceptar metadata adicional en el futuro.
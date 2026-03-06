# PROJECT_CONTEXT.md

## 1. Descripción del proyecto

Este repositorio contiene el código de la web **LucasCarri.Art**.

LucasCarri.Art es el portfolio online de un ilustrador especializado en arte relacionado con la cultura:

- surf
- skate
- beach lifestyle
- surf shops
- surf camps
- branding para negocios de surf

El objetivo principal del sitio es **mostrar trabajos del artista y permitir que potenciales clientes lo contacten para encargos personalizados**.

La web debe funcionar como un **portfolio visual fuerte**, donde las ilustraciones sean el centro de la experiencia.

---

# 2. Objetivos del sitio

El sitio tiene cuatro objetivos principales:

### 1. Mostrar trabajos del artista
Galerías visuales organizadas por categorías.

### 2. Mostrar diseños disponibles
Diseños que pueden comprarse o licenciarse en el futuro.

### 3. Mostrar colaboraciones
Proyectos realizados con marcas o concursos de ilustración.

### 4. Permitir contacto directo
Clientes pueden contactar al artista para solicitar:

- ilustraciones personalizadas
- logos
- posters
- branding para surf shops
- proyectos artísticos

---

# 3. Stack tecnológico

El proyecto utiliza:

- **Next.js**
- **React**
- **TailwindCSS**

El proyecto fue creado con:

```
npm create next-app
```

El código debe seguir buenas prácticas de:

- React
- componentes reutilizables
- separación clara de responsabilidades

---

# 4. Estilo visual del sitio

La estética del sitio es **clave**.

El diseño está basado en ilustraciones creadas por el artista y debe respetar el estilo visual.

Características del estilo:

- surf vintage
- ilustración estilo cartel
- cultura surf/skate
- outlines negros gruesos
- colores planos
- estilo cartoon / vector
- vibe retro surf shop

Colores predominantes:

- beige / arena RGB(214, 210, 193)
- negro
- azul océano
- verde turquesa

Fuente de titulo y navegacion:

- brittany

El sitio **no debe parecer una web corporativa moderna**.

Debe sentirse como **una ilustración surf convertida en web interactiva**.

---

# 5. Estructura del sitio

El sitio contiene las siguientes páginas:

### Home

Página principal del portfolio.

Contiene:

- ilustración central
- nombre del artista
- tagline
- descripción
- navegación por iconos

---

### Portraits

Galería de retratos ilustrados.

---

### Logos

Galería de logos creados por el artista.

---

### Available Designs

Diseños que ya existen y están disponibles.

En el futuro podrán venderse como:

- prints
- diseños licenciables

Por ahora solo se muestran.

---

### Collabs / Contests

Poster designs, colaboraciones y concursos.

---

### Contact

Sección de contacto para clientes.

Incluye:

- formulario
- redes sociales
- email

---

# 6. Sistema de navegación

El sitio **NO utiliza una navbar tradicional**.

La navegación se basa en **iconos circulares con olas de surf**.

Estos iconos aparecen principalmente en la Home.

Cada icono representa una sección:

- Portraits
- Logos
- Available Designs
- Collabs
- Contact

Cuando el usuario navega a otra página, uno de los iconos debe transformarse en **Home** para volver al inicio.

La navegación debe sentirse **visual, ilustrada y divertida**.

---

# 7. Galerías de imágenes

Las páginas de contenido contienen galerías.

Características:

### Desktop
Grid de **3 columnas**

### Tablet
Grid de **2 columnas**

### Mobile
Grid de **2 columnas**

Las imágenes deben mostrarse con:

- bordes redondeados
- borde negro
- estilo consistente con la ilustración

---

# 8. Interacción con imágenes

Las imágenes deben poder ampliarse.

Comportamiento esperado:

1. El usuario hace click en una imagen.
2. La imagen se anima hacia el centro de la pantalla.
3. La imagen aparece ampliada en un overlay.
4. La posición original queda vacía en el grid.
5. Al cerrar la imagen vuelve suavemente a su lugar.

Este comportamiento es similar a un **lightbox animado**.

---

# 9. Animaciones

Las animaciones deben ser:

- suaves
- simples
- no intrusivas

Ejemplos:

- hover en iconos
- aparición suave de imágenes
- animación al abrir imágenes

Las animaciones no deben afectar el rendimiento.

---

# 10. Preparación para funcionalidades futuras

El código debe diseñarse para permitir agregar en el futuro:

### Tienda online
Venta de:

- prints
- posters
- diseños digitales

### Comisiones personalizadas
Sistema para solicitar ilustraciones.

### Licencias de diseño
Licenciar diseños para marcas.

Por lo tanto, los componentes de galería deben poder aceptar metadata futura como:

- precio
- disponibilidad
- categoría
- tags

---

# 11. Componentes principales esperados

El sitio probablemente necesitará componentes como:

### HeroSection
Hero de la página principal.

### WaveNavigation
Navegación por iconos de olas.

### GalleryGrid
Grid reutilizable para galerías.

### LightboxImage
Sistema de ampliación de imágenes.

### ContactForm
Formulario de contacto.

---

# 12. Idioma del sitio

La web debe estar **100% en inglés**.

Ejemplos:

- botones
- textos
- secciones
- formularios

---

# 13. Prioridad del proyecto

La prioridad es:

1. experiencia visual
2. simplicidad
3. portfolio claro
4. facilidad de contacto

El sitio **no necesita funcionalidades complejas** en esta primera etapa.

Debe ser:

- rápido
- visual
- claro
- fácil de navegar

---

# 14. Filosofía del proyecto

La web debe sentirse como:

> "A surf illustration portfolio turned into an interactive website."

Las ilustraciones son el elemento central.

La interfaz debe acompañar el arte, **no competir con él**.
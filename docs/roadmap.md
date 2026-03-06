# Roadmap del Proyecto

Este documento describe el plan de evolución del proyecto **LucasCarri.Art**.

El objetivo es definir claramente:

- qué funcionalidades pertenecen al **MVP**
- qué funcionalidades pertenecen a **versiones futuras**
- cómo debe evolucionar la arquitectura del proyecto

Esto permite mantener el proyecto **simple, escalable y bien organizado**.

---

# Filosofía del desarrollo

El proyecto sigue una estrategia **MVP-first**.

Primero se desarrolla un **portfolio visual sólido**, y luego se agregan funcionalidades más avanzadas.

Prioridades:

1. mostrar el trabajo del artista
2. facilitar el contacto con clientes
3. mantener una experiencia visual fuerte
4. mantener el sitio rápido y simple

---

# Versión 1.0 — MVP (Portfolio)

Estado: **en desarrollo**

Esta versión implementa el sitio portfolio básico.

## Objetivos

- mostrar ilustraciones del artista
- permitir contacto con clientes
- crear una presencia profesional online

---

## Funcionalidades

### Navegación visual

Sistema de navegación con iconos estilo **surf wave**.

Secciones:

- Home
- Portraits
- Logos
- Available Designs
- Collabs
- Contact

---

### Galerías de imágenes

Cada sección contiene una galería visual.

Características:

- grid responsive
- imágenes ampliables
- animaciones suaves

---

### Lightbox de imágenes

Al hacer click en una imagen:

- la imagen se amplía
- aparece overlay
- animación suave
- cierre al hacer click fuera

---

### Página Home

Incluye:

- ilustración principal
- nombre del artista
- tagline
- navegación visual

---

### Página Contact

Incluye:

- formulario de contacto
- email del artista
- redes sociales

Redes:

- Instagram
- WhatsApp

---

### Diseño responsive

El sitio debe funcionar correctamente en:

- mobile
- tablet
- desktop

---

# Versión 1.1 — Mejoras visuales

Estado: **planeado**

Mejoras en experiencia visual e interacción.

## Posibles mejoras

- animaciones más refinadas
- microinteracciones en navegación
- animaciones de carga de galerías
- optimización de imágenes

---

# Versión 1.2 — Sistema de metadata en imágenes

Estado: **planeado**

Agregar metadata a los elementos de galería.

Esto prepara el sistema para funcionalidades futuras.

Ejemplo de metadata:

```
title
description
category
tags
available
price
```

Esto permitirá en el futuro:

- vender prints
- licenciar diseños
- organizar mejor el portfolio

---

# Versión 2.0 — Tienda de prints

Estado: **planeado**

Introducción de una tienda básica.

## Objetivo

Permitir comprar:

- posters
- prints
- diseños seleccionados

---

## Funcionalidades

### Catálogo de productos

Los diseños de **Available Designs** podrán marcarse como productos.

Ejemplo:

```
isProduct: true
price: 30
```

---

### Página de producto

Cada diseño tendrá una página propia.

Contenido:

- imagen
- descripción
- precio
- botón de compra

---

### Integración de pagos

Posibles opciones:

- Stripe
- Shopify Lite
- Gumroad

---

# Versión 2.5 — Comisiones personalizadas

Estado: **planeado**

Sistema para solicitar ilustraciones personalizadas.

---

## Funcionalidades

Formulario de solicitud de comisiones.

Campos posibles:

```
nombre
email
tipo de proyecto
presupuesto estimado
mensaje
```

Tipos de proyecto:

- logo
- ilustración
- poster
- branding surf shop

---

# Versión 3.0 — Licencias de arte

Estado: **planeado**

Sistema para que marcas puedan licenciar diseños.

Ejemplo:

- surf brands
- skate brands
- apparel brands

---

## Funcionalidades posibles

- catálogo de diseños licenciables
- sistema de contacto comercial
- paquetes de licencia

---

# Versión 4.0 — Panel de administración

Estado: **futuro**

Panel para que el artista pueda gestionar el contenido.

Funciones posibles:

- subir nuevas ilustraciones
- editar galerías
- gestionar productos
- ver solicitudes de comisiones

---

# Evolución técnica del proyecto

El proyecto debe prepararse para escalar gradualmente.

Evolución esperada:

### Fase 1

Portfolio estático con galerías.

### Fase 2

Portfolio + metadata estructurada.

### Fase 3

Portfolio + tienda básica.

### Fase 4

Portfolio + tienda + comisiones.

---

# Reglas importantes para desarrollo

Durante el desarrollo actual:

El agente de IA **NO debe implementar funcionalidades que pertenezcan a versiones futuras**.

En particular:

No implementar aún:

- carrito de compra
- checkout
- sistema de pagos
- panel de administración

Estas funcionalidades pertenecen a versiones futuras del roadmap.

---

# Visión final del proyecto

El objetivo final es convertir **LucasCarri.Art** en una plataforma donde el artista pueda:

- mostrar su trabajo
- vender prints
- vender diseños
- recibir comisiones
- licenciar arte a marcas

Todo manteniendo una **experiencia visual fuerte basada en ilustración surf vintage**.
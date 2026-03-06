# AGENTS.md

Guía de comportamiento para asistentes de IA que colaboren en este repositorio.

Este documento define **las reglas obligatorias** que debe seguir cualquier agente de IA (Codex u otro asistente automatizado) al generar, modificar o eliminar código dentro de este proyecto.

El objetivo es garantizar:

- consistencia del código
- trazabilidad de cambios
- documentación clara
- versionado correcto
- mantenimiento del proyecto a largo plazo

---

# 1. Contexto del proyecto

Este repositorio contiene el código de la web **LucasCarri.Art**, un portfolio de ilustración con estética **surf / vintage / skate culture**.

Stack tecnológico principal:

- Next.js
- React
- TailwindCSS
- TypeScript (si el proyecto fue inicializado con TS)

La web debe respetar el estilo visual basado en **ilustraciones creadas por el artista**, por lo que el código debe priorizar:

- layouts flexibles
- galerías visuales
- animaciones suaves
- componentes reutilizables

---

# 2. Reglas generales para el agente

El agente **NO debe realizar cambios arbitrarios** en el proyecto.

Cada cambio debe:

1. Tener un propósito claro
2. Estar documentado
3. Actualizar el versionado
4. Reflejarse en el CHANGELOG

El agente debe:

- generar código limpio
- evitar duplicación
- usar componentes reutilizables
- seguir buenas prácticas de React y Next.js

---

# 3. Estructura del proyecto

El agente debe respetar y mantener una estructura clara.

Ejemplo recomendado:

```
/app
/components
/lib
/styles
/public
/docs
```

Reglas:

- `components/` contiene componentes reutilizables
- `app/` contiene rutas y páginas
- `lib/` contiene utilidades
- `docs/` contiene documentación técnica del proyecto

---

# 4. Documentación obligatoria

Cada vez que el agente:

- agregue una feature
- cambie arquitectura
- agregue componentes importantes
- modifique lógica relevante

DEBE crear o actualizar documentación en:

```
/docs
```

Los archivos deben ser **Markdown (.md)**.

Ejemplos:

```
docs/
  arquitectura.md
  componentes.md
  galerias.md
  animaciones.md
  deploy.md
```

### Reglas de documentación

- Toda la documentación debe estar **en español**
- Debe explicar **qué se hizo y por qué**
- Debe incluir ejemplos de uso cuando sea necesario

---

# 5. Versionado del proyecto

Cada vez que el agente modifique el código del proyecto debe:

1. **Incrementar la versión en `package.json`**
2. Registrar el cambio en `CHANGELOG.md`

El versionado debe seguir **Semantic Versioning**:

```
MAJOR.MINOR.PATCH
```

Reglas:

### PATCH
Correcciones pequeñas o refactorizaciones sin cambiar funcionalidad.

### MINOR
Nueva funcionalidad compatible hacia atrás.

### MAJOR
Cambios incompatibles o grandes refactorizaciones.

Ejemplo:

```
1.0.0 → 1.0.1
1.0.1 → 1.1.0
1.1.0 → 2.0.0
```

---

# 6. CHANGELOG obligatorio

El archivo:

```
CHANGELOG.md
```

debe seguir estrictamente la estructura definida en:

https://keepachangelog.com/es-ES/1.0.0/

El CHANGELOG debe:

- estar escrito **en español**
- usar **fechas reales**
- describir claramente cada cambio

Ejemplo:

```
## [1.1.0] - 2026-03-07

### Added
- Nueva galería para la sección Portraits
- Componente reutilizable GalleryGrid

### Changed
- Mejora en la navegación por iconos de olas

### Fixed
- Corrección en animación de lightbox de imágenes
```

El agente **NO debe inventar fechas**.

Debe usar la **fecha real del sistema al momento del cambio**.

---

# 7. Reglas de commits generados por el agente

Cuando el agente genere mensajes de commit debe usar un formato claro.

Ejemplo recomendado:

```
feat: agregar galería de portraits

fix: corregir animación de lightbox

docs: agregar documentación de arquitectura

refactor: reorganizar componentes de navegación
```

Tipos recomendados:

- `feat`
- `fix`
- `docs`
- `refactor`
- `style`
- `chore`

---

# 8. Estándares de código

El agente debe:

- usar componentes funcionales
- preferir hooks de React
- evitar lógica innecesaria en páginas
- extraer lógica a `lib/` cuando corresponda

Buenas prácticas:

- props tipadas
- componentes pequeños
- separación clara de responsabilidades

---

# 9. Animaciones y UI

Las animaciones deben ser:

- suaves
- no intrusivas
- optimizadas

Se recomienda usar:

- CSS
- Framer Motion si es necesario

Las galerías deben permitir:

- ampliación de imágenes
- animación desde su posición original
- overlay central tipo lightbox

---

# 10. Preparación para futuras funcionalidades

El agente debe diseñar el código para permitir agregar fácilmente en el futuro:

- tienda online
- venta de prints
- descargas digitales
- comisiones personalizadas

Por lo tanto:

- las galerías deben ser reutilizables
- los items deben permitir metadata futura

---

# 11. Idioma

Reglas de idioma:

### Código

- nombres en inglés

### Documentación

- español

### CHANGELOG

- español

---

# 12. Prohibiciones

El agente **NO debe**:

- eliminar documentación existente
- cambiar versiones sin actualizar CHANGELOG
- crear código sin documentar funcionalidades importantes
- introducir dependencias innecesarias

---

# 13. Flujo de trabajo esperado

Cuando el agente haga cambios debe seguir este orden:

1. Implementar el cambio en el código
2. Crear o actualizar documentación en `/docs`
3. Incrementar versión en `package.json`
4. Actualizar `CHANGELOG.md`
5. Generar commit message apropiado

---

# 14. Objetivo final

El código generado por el agente debe:

- ser mantenible
- ser claro
- ser extensible
- estar bien documentado
- permitir evolución del proyecto sin romper funcionalidades
# Impeccable — auditoría y mejoras del portfolio

27 de octubre de 2026. Target principal: `app/page.js`; revisión de home, tres casos y recorrido hasta contacto. Prioridad: claridad del portfolio, conservando la identidad actual. El contacto público utiliza lenguaje profesional de networking.

## Veredicto y calidad

**Integridad: PASS.** El sistema sigue siendo reconocible y específico del trabajo de Fernando: paper/black/acid yellow, Archivo/Sora/IBM Plex Mono, artefactos reales y conceptos diferenciados. El recorrido ahora prioriza evaluar los casos y después abrir el producto. Inventario 9=4 live+2 concept+3 internal conservado. Los límites de las simulaciones y la ausencia de resultados comerciales medidos siguen explícitos.

**GO, publicado y verificado.** No se detectaron P0/P1 técnicos abiertos en el alcance probado. Tras la revisión se neutralizó el contacto público y Fer autorizó la publicación; la suite completa pasa también en el dominio de producción.

La valoración siguiente es orientativa, basada en inspección de código y Chromium; no equivale a una certificación WCAG ni a métricas de campo.

| Dimensión Impeccable | Puntos | Evidencia y límite |
|---|---:|---|
| Accesibilidad | 3/4 | Axe sin infracciones detectadas, teclado, foco y contenido sin JS; sin prueba con lector de pantalla real |
| Performance | 3/4 | Ilustraciones SSR, sin dependencias nuevas, motion existente pausado; sin Core Web Vitals de campo |
| Theming | 3/4 | Paleta y tipografía coherentes, nuevos controles con tokens compartidos; quedan literales heredados |
| Responsive | 3/4 | 320–1440 px, menú/disclosure y taps sintetizados; sin Safari/iOS físico |
| Integridad de implementación | 4/4 | Datos y estados coherentes, semántica nativa, diagramas legibles y detector sin hallazgos en los targets |
| **Total** | **16/20 — Good** | Continuar con experiencia profesional verificable y validación real de campo |

## Problemas encontrados y resueltos

### P1 — Textos de los casos reducidos a 3,5–8 px

**Antes:** los SVG de heroes conceptuales y galerías reducían sus etiquetas con el viewBox. En 390 px, Product Kit llegaba a 3,5 px y Storefront a 4,4 px. Los diagramas de Reactor incluían textos de 8 px. Las captions externas eran mayores, pero el contenido interior seguía siendo difícil de leer.

**Solución:** `components/CaseStudy.jsx:100` comparte ToolPreview en los heroes conceptuales. `components/CaseDiagram.jsx:4` renderiza las nueve galerías con texto HTML de al menos 12 px y geometría decorativa. `lib/case-visuals.js` contiene datos estructurados en lugar de grandes cadenas SVG. La captura real de Reactor se conserva como evidencia del producto.

**Comprobación:** tres casos en 320/390/768/1024/1440; ningún texto de las nuevas ilustraciones por debajo de 12 px, sin overflow. Se mantienen sus captions y la distinción entre ilustración y captura.

**Ruta Impeccable:** typeset/adapt → polish. No se declara un umbral tipográfico de 12 px como regla WCAG; es el mínimo de diseño de este proyecto.

### P2 — Navegación móvil oculta

**Antes:** a 760 px o menos desaparecían Work/Approach/About; quedaban logo y mailto. El usuario debía recorrer un catálogo largo o encontrar los enlaces del footer.

**Solución:** `components/MobileNav.jsx:6` y `components/Nav.jsx:23` añaden un menú compacto con Work/Approach/About/Contact. Details/summary funciona sin JS; después de hidratar cierra con Escape, al elegir destino, al hacer tap fuera o al pasar a desktop. Escape devuelve el foco al summary.

**Comprobación:** Enter/Tab/Escape; navegación de secciones a 110 px del borde superior sin quedar bajo el header; el Tab siguiente a About continúa hacia contacto y no vuelve al header. Taps sintetizados en Chromium. Summary y enlaces del menú de al menos 44 px.

**Ruta Impeccable:** harden/adapt → polish.

### P2 — La demo competía con la evaluación del candidato

**Antes:** Open the tool/concept era la primera acción y el enlace al caso tenía menos presencia.

**Solución:** `components/ToolCard.jsx:57` pone Read the case study como acción principal en las tres herramientas con caso. La demo queda disponible al lado; las otras seis conservan su acción directa. Se amplían los objetivos clave a 44 px, incluidos ticker, marca y enlaces de navegación/contacto/footer.

**Comprobación:** primer enlace de cada card seleccionada apunta a su caso; links externos y estados conservados. Esto es una mejora de jerarquía orientada a la contratación, no una mejora de conversión demostrada.

**Ruta Impeccable:** layout/clarify → polish.

### P2 — Catálogo largo antes de About

**Antes:** las nueve cards completas precedían a metodología y perfil. La revisión de 390 px situó About aproximadamente en 12.078 px de desplazamiento.

**Solución:** `components/ToolsGrid.jsx:6` muestra primero los tres casos. Las otras seis herramientas siguen en un disclosure nativo, con inventario y estados derivados de los mismos datos. No se añadieron filtros o menús de clasificación. Se retira el pequeño estado duplicado del falso chrome de cada preview; el estado completo permanece en la card.

**Comprobación:** About queda en 6.768 px a 390×844, aproximadamente 44% menos de recorrido. La home cerrada mide 8.988 px. Tres cards visibles por defecto y nueve tras abrir la colección, también sin JS. Son medidas de layout local, no evidencia de más entrevistas.

**Ruta Impeccable:** distill/layout → polish.

### P2 — Criterio y alcance repetido en los casos

**Antes:** el criterio quedaba bajo varios pasos del producto y las mismas tres cifras aparecían en dos bloques. La cuadrícula móvil 2×2 dejaba una celda vacía.

**Solución:** `components/CaseStudy.jsx:74` destaca Key decision con texto ya existente: audiencia compartida, una próxima acción y packaging por canal. Se elimina el bloque duplicado de cifras del hero y su data/CSS sin consumidor. Product scope sigue bajo los límites de validación, ahora en tres filas completas en móvil.

**Comprobación:** las cifras, estados, roles y límites se conservan. No se añadieron responsabilidades personales ni impacto comercial no documentados. Las tres métricas comparten columna completa en móvil.

**Ruta Impeccable:** layout/distill → polish.

### P3 — Consistencia de acabado

Se limita el tracking excesivamente negativo a−0,04 em, se modera el título de caso a un máximo de 6 rem y se retiran un offset duro y un borde lateral grueso de las previews. Se preservan la firma tipográfica, los numerales funcionales y el kicker 04 Contact que Fer había fijado como decisión intencional.

## Qué funciona y se conserva

- Posicionamiento de Growth & Demand Lead claro; el contacto final invita a comparar ideas y resolver preguntas sobre los proyectos.
- Artefactos identificables; estados Live/Concept/Internal sin presentar conceptos como resultados.
- Scope y límites separados de impacto comercial; Reactor identifica respuestas sintéticas.
- Hero y ticker con pausa, reduced motion y estado estático útil.
- Identidad, rutas, URLs de herramientas, LinkedIn/GitHub, contactos, metadatos y redirects.

## Evidencia de verificación

- `npm run build:check`: salida 0, 8/8 páginas generadas en `.next-check`.
- `AUDIT_URL=http://localhost:3001 npm run check`: salida 0, 54 comprobaciones. Incluye cinco tamaños para las cuatro páginas principales, Axe, noJS/reduced, navegación, loop de casos, metadata/JSON-LD, redirects y 404. La prueba de home abre la colección para cubrir también las seis cards adicionales.
- `check:legibility`: seis anchos 320–1440 px, nueve herramientas, mínimo tipográfico y clipping.
- `check:journey`: recorrido de contratación, menú, Escape/foco, noJS, ilustraciones de casos y filas móviles. El baseline anterior fallaba porque mostraba nueve cards en la primera colección en vez de tres.
- QA independiente final:320/390/768/1440, sin solapamientos o textos pequeños en las nuevas ilustraciones; navegación y disclosure operativos sin JS; taps sintetizados en Chromium.
- Impeccable: `context --target app/page.js` ejecutado una vez. No había PRODUCT.md/DESIGN.md; el contexto permitió refinar la implementación existente sin convertirlo en rediseño. Se aplicaron audit y polish, con la craft floor y dos revisiones independientes de diseño y técnica.
- Detector manual ejecutado una vez al finalizar los componentes: Nav, MobileNav, ToolsGrid, ToolCard, ToolPreview, CaseStudy y CaseDiagram. Salida 0, JSON`[]`. Es un scan de fuente, no un overlay visual ni prueba de ausencia de todos los defectos posibles.
- `npm audit`:0 vulnerabilidades. `git diff --check`:sin errores.
- Robots, sitemap, favicons y OG versionado responden 200 en la preview.

## Pendientes y límites

- **P2 editorial:** para demostrar seniority faltan trayectoria y contribuciones profesionales verificables. Fer debe proporcionar la evidencia; el portfolio no la inventa. Es una oportunidad de contratación, no un bloqueo técnico.
- No se midió conversión a entrevistas, lectores de pantalla reales, Safari/Firefox, dispositivos físicos, Core Web Vitals de campo, indexación ni APIs de pago de herramientas externas. Un viewport reducido no se presenta como prueba de zoom nativo al 200%.
- La documentación PRODUCT.md/DESIGN.md puede formalizarse con Impeccable init/document en una sesión posterior. No se reparó ese contexto como efecto lateral de esta auditoría.
- Se mantiene el sistema visual existente; no se introducen temas, formularios, urgencia o tracking ajenos al objetivo de contratación.

## Entrega

Publicado en https://www.fernandopeccatiello.com desde origin/main, código `8c9706b7a68093f95de4d89b4f0c4bfb4783bae6`. Vercel Ready/Production y check GitHub success. Suite en producción:54/54, salida0. Contacto, hero, perfil y cierre de casos usan tono profesional neutro; OG/Twitter apuntan a v3. Se purgó selectivamente la caché externa de Cloudflare para que las copias v2/og.png también sirvan la imagen neutra.

Preview: http://localhost:3001/#work. El servidor de preview se mantiene para revisión; se detiene con Ctrl-C en su proceso. No se inició ni se detuvo ningún proceso en3000. Cierre del release y límites de caché de terceros en `work/handoff.md`.

Log: `/tmp/fp-impeccable-final.log`. Detector: `/tmp/fp-impeccable-detect.json`. Capturas: `/tmp/fp-impeccable-qZiVcG`.

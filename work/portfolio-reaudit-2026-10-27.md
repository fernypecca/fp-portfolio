# Reauditoría del portfolio — 27 de octubre de 2026

## Veredicto

**GO técnico. Sin P0 ni P1 confirmados en el alcance probado.** Hay cinco ajustes P2: cuatro de precisión/presentación del contenido y uno de coherencia de caché. No son fallos de navegación ni justifican retirar el sitio actual. Corregirlos haría más defendible el portfolio y más predecible una futura actualización social.

La identidad, la legibilidad y el recorrido funcionan: presentación profesional → tres casos destacados → colección ampliable → metodología → perfil → contacto neutro. Los límites de los conceptos y de las respuestas sintéticas se explican, y las cifras de alcance no se presentan como resultados comerciales medidos. Las recomendaciones siguientes afinan esa distinción.

Esta pasada es de solo lectura sobre la aplicación y producción. Se añadieron este informe y el estado de sesión; no se modificó código del producto, ni se hizo commit, push, despliegue o purga de caché.

## Alcance y evidencia

- Producción: https://www.fernandopeccatiello.com/ y los tres casos. Revisión del checkout `efc35eba24f2c779c6ac7b7969ba44e30cebb272`.
- `npm run build:check`: salida 0, generación 8/8. Usa `.next-check` para aislar la comprobación. Manifest: home, tres casos, robots, sitemap, not-found y global-error. La generación de ocho entradas no significa ocho páginas públicas de contenido.
- `AUDIT_URL=https://www.fernandopeccatiello.com npm run check`: salida 0, **54 PASS**. Log: `/tmp/fp-reaudit-live-suite.log`.
- `npm audit --json`: cero vulnerabilidades reportadas. `git diff --check`: correcto.
- Playwright/Chromium, Axe y revisión visual tras recorrer la página para activar los reveals. Matriz principal: 375×844, 390×844, 768×1024, 1024×768 y 1440×900. Comprobaciones adicionales a 320 px; tipografía de las nueve cards entre 320 y 1440 px.
- Capturas de esta pasada: `/tmp/fp-reaudit-apNwXU/`. Son evidencia temporal local, no assets públicos.
- Inspección de datos/componentes/configuración y revisión independiente de copy, fuentes y enlaces. Lectura de CLIENT.md y criterio Impeccable aplicado al contexto actual.

## Hallazgos confirmados

### P2-01 — Las galerías no identifican sus cifras de ejemplo junto al diagrama

**Tipo:** presentación del contenido; riesgo de interpretación. **No es una afirmación de resultados comerciales falsos:** los casos incluyen límites más abajo.

- Archivos: `components/CaseDiagram.jsx:7`, `components/CaseStudy.jsx:168`, `lib/case-visuals.js:7` y `lib/case-visuals.js:12`.
- Reproducción: abrir `/work/reactor`, bajar a la galería y leer “7 moved A → B · 2 moved B → A · 17 held”; abrir Storefront y observar el score 62 y la comparación con el top 10.
- Evidencia: `lib/case-visuals.js:1` indica en un comentario que son estados ilustrativos. Ese comentario no llega al lector. En cambio, las previews de las cards sí muestran “Illustrative preview” (`components/ToolPreview.jsx:116`).
- Impacto: una captura aislada de la galería puede parecer un resultado observado o una ejecución concreta, sin el contexto del caso.
- Solución: añadir una identificación visible y cercana a las galerías; conservar las limitaciones existentes.
- Variante A [transparencia]: “Illustrative UI states — example values.”
- Variante B [contexto]: “Example flow, not a measured campaign result.” Para Storefront conviene adaptar la segunda parte a “not a validated conversion score”.

### P2-02 — Storefront suena más concluyente en los títulos que en su explicación

**Tipo:** precisión editorial, no bug funcional.

- Archivos: `lib/cases.js:159` y `lib/cases.js:183`; contraste con `lib/cases.js:144`, `lib/cases.js:160` y `lib/cases.js:195`.
- Reproducción: en `/work/storefront-analyzer`, leer “See what costs most.” y “The friction points that matter most, in order.”; después leer las limitaciones.
- Evidencia: las limitaciones describen recomendaciones ilustrativas, sin causas medidas de pérdida de consultas ni lift demostrado. El cuerpo del caso es prudente; los títulos sugieren un ranking validado por impacto.
- Impacto: quien solo escanee títulos puede atribuir al concepto una certeza que no tiene.
- Solución: mantener la idea de priorización y formularla como hipótesis para investigar. Revisar también la description SEO si se adopta este tono.
- Variante A [precisión]: “Review the suggested priorities.”
- Variante B [avance concreto]: “Choose one change to test first.”

### P2-03 — Product Kit promete todos los canales y publicación inmediata

**Tipo:** coherencia entre promesa y alcance, no bug funcional.

- Archivos: `lib/cases.js:227`, `lib/cases.js:286` y `lib/cases.js:301`; contraste con `lib/cases.js:304` y `lib/cases.js:307`.
- Reproducción: en `/work/product-kit-generator`, leer “A kit that fits every channel”, “1:1, ready to post” y “One output, every surface.”; comparar con la revisión humana requerida y los tres formatos propuestos.
- Evidencia: se demuestran tres relaciones de aspecto, no compatibilidad universal con cada canal. El propio caso exige comprobar exactitud del producto, marca y requisitos de canal. La description también usa “channel-ready”.
- Impacto: el lenguaje de entrega terminada resulta más fuerte que el estado Concept y sus límites.
- Solución: hablar de borradores para tres formatos y de revisión previa.
- Variante A [especificidad]: “One product URL. A draft kit for three formats.”
- Variante B [beneficio]: “Turn one product page into a starting kit for social and catalog content.”
- Apoyo posible: “Image directions and copy for 1:1, 4:5 and 9:16, ready for review.”

### P2-04 — “52 provinces” incluye dos ciudades autónomas

**Tipo:** precisión factual de la etiqueta; el total de zonas no está mal.

- Archivo: `components/ToolPreview.jsx:58`.
- Reproducción: home → desplegar la colección completa → Wedding Earnings Estimator → leer “52 provinces · 6 categories · No signup”.
- Evidencia: el estimador externo carga 52 features en `/data/spain-provinces.geojson`, incluidas Ceuta (51) y Melilla (52), y dibuja 52 regiones. Son 50 provincias y dos ciudades autónomas. La [clasificación territorial del INE](https://www.ine.es/daco/daco42/codmun/cod_ccaa_provincia.htm) distingue esas ciudades.
- Impacto: pequeño error de nomenclatura en una herramienta que se presenta como estimador de mercado.
- Variante A [precisión]: “50 provinces + Ceuta and Melilla · 6 categories”.
- Variante B [síntesis]: “52 locations · 6 categories · No signup”.

### P2-05 — La respuesta pública de `/og.png` no respeta el TTL configurado

**Tipo:** discrepancia de configuración/caché confirmada; sin contenido incorrecto en la respuesta actual.

- Archivo de referencia: `next.config.mjs:35`.
- Reproducción: `curl -sD - -o /dev/null https://www.fernandopeccatiello.com/og.png`.
- Esperado por configuración: `Cache-Control: public, max-age=0, must-revalidate`.
- Observado en GET público: `Cache-Control: public, max-age=14400, must-revalidate`, servidor Cloudflare. Una segunda lectura confirmó el valor. Permite reutilizar esa URL hasta cuatro horas sin revalidar.
- Impacto: una futura sustitución del archivo de compatibilidad puede tardar en verse aunque el archivo se haya actualizado.
- Atenuante: las cuatro páginas usan `/og-growth-demand-v3.png`, correctamente versionada e immutable. v3, v2 y og.png sirven ahora los mismos bytes neutros (SHA-256 comienza por `5e0289e6ff40f50e`). No hay una imagen antigua visible en estas respuestas.
- Solución: revisar la política efectiva de caché del dominio para que `/og.png` revalide como indica el repo; seguir versionando cada imagen social nueva.
- Límite de diagnóstico: la URL directa del deployment devuelve 302 de protección de acceso. No se atribuye el origen exacto del override a una regla concreta sin inspeccionar la configuración. No se cambió ni purgó caché durante esta auditoría.

## Mejoras opcionales de copy y CRO — opiniones, no bugs

### P3 — Ajustar el método a la evidencia disponible

`app/page.js:122` usa “Prove the lift”; `app/page.js:64` dice “useful on day one”. Son frases válidas como filosofía de trabajo, pero los casos actuales demuestran construcción, criterio y alcance funcional, no lift medido. Haría más coherente el conjunto explicitar experimentación y medición, sin inventar resultados.

- Variante A [rigor]: “Find the constraint. Build the experiment. Measure what changes.”
- Variante B [criterio]: “Diagnose the bottleneck. Build a useful test. Follow the evidence.”

### P3 — Explicar mejor las decisiones propias

En los dos conceptos, Key decision reutiliza la explicación de Build (`lib/cases.js:144`, `lib/cases.js:253`, render en `components/CaseStudy.jsx:74`). Role repite el título profesional. Es correcto, pero pierde una ocasión para mostrar responsabilidad concreta y tradeoffs.

Recomiendo sustituir la repetición por una decisión real: qué alternativa se descartó, por qué y qué parte construiste. Dos enfoques, sujetos a confirmación factual de Fer:

- Variante A [autoría]: “I scoped the output to one suggested change so the review ends with an action to test.”
- Variante B [criterio]: “The tradeoff: keep the first version focused on one useful decision rather than a longer audit.”

No se incorporaron estas frases al producto: requieren que la decisión y la autoría sean verdaderas.

El contacto “Let’s compare notes” encaja con la voz profesional actual. No recomiendo reintroducir disponibilidad, contratación explícita o un posicionamiento freelance. Tampoco añadiría formularios, urgencia, FAQs o prueba social inventada a este portfolio por aplicar una checklist genérica.

## Checklist punto por punto

| Área | Resultado y alcance |
| --- | --- |
| Build y rutas | Build aislado 8/8. Home y tres casos cargan; 404 real devuelve 404. Robots y sitemap devuelven 200. |
| Consola/hidratación/red | Sin pageerror, console.error, hidratación reportada o requests fallidos en las cuatro páginas recorridas. Las animaciones no dejan títulos ocultos. |
| Navegación | Header, Work, Approach, About y Contact funcionan. Tras terminar el scroll suave, los títulos quedan visibles bajo el header fijo. |
| Teclado | Skip lleva el foco a main; siguiente Tab entra al contenido. Menú con Enter/Tab; Escape cierra y devuelve el foco; click fuera cierra; cambio a desktop cierra. Disclosure funciona con Enter/Space. |
| Recorrido | Tres casos primero; seis herramientas restantes en disclosure. CTA al caso principal y demo secundaria. Volver a Work y navegación atrás funcionan. Loop Reactor → Storefront → Product Kit → Reactor correcto. |
| Legacy | `/index.html` y los tres `/work/*.html` responden 308 a las rutas nuevas. Comprobación adicional conserva `?audit=1`. HTML legacy del repo no constituye rutas públicas activas. |
| Responsive | Sin overflow horizontal, solapamiento de cards, texto lateralmente cortado o CTA/footer roto en la matriz probada. Previews y galerías se redistribuyen, sin reducir texto SVG. |
| Tipografía | Texto HTML de las nueve previews y diagramas de casos cumple el mínimo de 12 px de los checks. Cuerpo y CTA tienen mayor tamaño. No se interpreta 12 px como garantía universal de comodidad ni como un mínimo exigido por WCAG. |
| Estados y datos | 9 herramientas = 4 live + 2 concept + 3 internal. Tres casos; nombres, estados, destinos y cifras de alcance coherentes entre home y casos, con el matiz geográfico P2-04. |
| Copy | Inglés coherente, sin lorem ipsum o placeholders de interfaz encontrados. Growth & Demand Lead claro. Contacto de networking neutro. Ajustes de precisión en P2-01/02/03. |
| Accesibilidad automática | Axe sin infracciones reportadas en cuatro páginas × cinco tamaños con colección abierta. Incluye contraste computable, landmarks, nombres y controles anidados detectables. No equivale a certificación. |
| Semántica visual/HTML | H1 de página y secciones coherentes; diagramas decorativos separados del texto HTML; imagen real de Reactor con alternativa; foco y targets principales comprobados. No se encontró interacción anidada inválida. |
| Movimiento | Hero y ticker avanzan, pausan y reanudan. Hero pausa fuera del viewport; reduced-motion conserva contenido estático. Contenido de las cuatro páginas, menú y colección disponibles sin JS. |
| Zoom | El viewport permite pinch zoom y se comprobó cambio de escala 1→2 en emulación táctil. No sustituye una prueba de zoom nativo del navegador al 200% o de dispositivo físico. |
| Enlaces | Internos válidos. Ocho demos Vercel cargan interfaces y no arrojan pageerror. Claude y LinkedIn quedan parcialmente sin verificar por challenge/anti-bot. Tabla debajo. |
| Metadatos | Cuatro títulos únicos, descriptions, canonical, OG y Twitter Card coherentes. Títulos 43–59 caracteres; longitud no se usa como garantía de visualización en buscadores. |
| JSON-LD | Parseable; Person/WebSite/ProfilePage en home; SoftwareApplication/BreadcrumbList en cada caso. Origen/URLs coherentes y sin precio gratuito inventado. No validación externa de Rich Results. |
| Sitemap/robots | Solo las cuatro URLs canónicas de contenido; accesibles y coherentes con la app. No promesa de indexación efectiva. |
| Iconos/social | Favicon SVG, Apple icon e imagen social devuelven 200. V3 y copias de compatibilidad contienen imagen neutra actual. Matiz de caché en P2-05. |
| Fuentes/imágenes | `next/font` con Archivo/Sora/IBM Plex Mono; sin fallo de carga observado. Reactor usa Next Image, asset 1200×750 para unos 1102 px de ancho a DPR1; no se ve una descarga de tamaño original excesivo en esa prueba. |
| JS/SVG | Dependencias runtime: Next/React/React DOM. No Framer Motion. En la medición no limitada: unos 141–150 KB de scripts transferidos por carga y 0–6 KB de SVG inline según página. Son medidas puntuales, no presupuesto certificado. |
| Dependencias/config | Lockfile v3 versionado y coherente. Playwright/Axe usados por checks; Sharp por generador OG. Sin imports/exports muertos identificados en inspección textual del código activo; no análisis formal exhaustivo de dead code. |
| Seguridad | Cabeceras públicas de nosniff, frame, referrer, permissions y CSP verificadas. CSP protege base/objects/framing/forms; no es una política estricta de scripts. Esto es alcance de protección, no vulnerabilidad demostrada. |
| Secretos/ignore | .gitignore excluye node_modules, builds, .env*, .DS_Store y .vercel. Sin credenciales versionadas o patrones de claves encontrados en archivos actuales inspeccionables. No se auditó todo el historial Git. |

## SEO de las cuatro páginas

Todas usan `summary_large_image`, OG `https://www.fernandopeccatiello.com/og-growth-demand-v3.png` y canonical con dominio www y ruta correspondiente. No se encontró duplicación de title/canonical entre los casos.

| Ruta | Title | Tipos JSON-LD |
| --- | --- | --- |
| `/` | Fernando Peccatiello — Growth & Demand Lead | Person, WebSite, ProfilePage |
| `/work/reactor` | Reactor — Synthetic copy exploration \| Fernando Peccatiello | SoftwareApplication, BreadcrumbList |
| `/work/storefront-analyzer` | Storefront Analyzer — CRO concept \| Fernando Peccatiello | SoftwareApplication, BreadcrumbList |
| `/work/product-kit-generator` | Product Kit Generator — AI concept \| Fernando Peccatiello | SoftwareApplication, BreadcrumbList |

No se evaluaron Search Console, indexación real, posicionamiento, backlinks o rendimiento orgánico. Compartir una OG entre casos es una opción válida; hacer imágenes distintas sería una mejora de presentación opcional, no un error SEO.

## Enlaces externos

Se comprobó respuesta y carga de interfaz. Un 200 por sí solo no se usó para declarar funcional una aplicación. No se enviaron formularios, correos o mensajes ni se ejecutaron generaciones de pago/IA.

| Destino | Resultado |
| --- | --- |
| [Reactor](https://reactor-chi-seven.vercel.app/) | 200, interfaz cargada |
| [Competitor Teardowns](https://battle-room-five.vercel.app/) | 200, interfaz cargada |
| [Competitor Gap Analyzer](https://competitor-gap-analyzer.vercel.app/) | 200, interfaz cargada |
| [Wedding Earnings Estimator](https://wedding-earnings-estimator.vercel.app/) | 200, interfaz/mapa cargados; 52 regiones verificadas |
| [Storefront Analyzer](https://storefront-analyzer.vercel.app/) | 200, interfaz cargada |
| [Landing QA Tool](https://landing-qa-tool.vercel.app/) | 200, interfaz cargada |
| [Product Kit Generator](https://photoroom-kit-generator.vercel.app/) | 200, interfaz cargada |
| [Background Generator](https://bodasnet-bg-generator.vercel.app/) | 200, interfaz cargada |
| [Popup HTML Generator](https://claude.ai/public/artifacts/bee4a566-6b42-4c74-bb7d-abc83bbd8d49) | Redirige al challenge de seguridad de Claude/Cloudflare. Disponibilidad del artefacto no confirmada; no se declara caído. |
| [LinkedIn](https://www.linkedin.com/in/fernando-peccatiello/) | Bloqueo 999/anti-bot. No se declara caído por ese bloqueo. |
| [GitHub](https://github.com/fernypecca) | 200, perfil correcto |
| mailto | Dirección y subject válidos: fernypecca@gmail.com / Hello Fernando. No se envió correo ni se verificó entrega. |

**Cero enlaces caídos confirmados.** Quedan dos destinos con verificación parcial: Claude y LinkedIn. Tampoco se certifica el funcionamiento completo del backend de los ocho demos que sí cargan.

## Performance: observación, no certificación de Core Web Vitals

En una carga de laboratorio Chromium sin throttling, con observadores instalados antes de navegar y scroll completo:

| Página | LCP observado | CLS observado |
| --- | --- | --- |
| Home | 496 ms | 0,000015 |
| Reactor | 172 ms | 0 |
| Storefront | 144 ms | 0 |
| Product Kit | 96 ms | 0 |

Estos números dependen de entorno/caché/red y no representan móvil real, percentil 75 o datos CrUX. No justifican afirmar que el sitio pasa Core Web Vitals en campo. No hubo layout shift significativo en esta muestra; falta medir INP y datos de usuarios reales para esa conclusión.

## Impeccable y límites pendientes

El detector ejecutado una vez sobre `app` y `components` produjo una advertencia: borde lateral de 3 px en `.proof-context`, `app/globals.css:2657`. Aquí separa las limitaciones del caso y tiene una función informativa. Es una observación estética contextual, no un bug, incumplimiento de accesibilidad o motivo para eliminar el bloque. JSON: `/tmp/fp-reaudit-detector.json`.

No se probaron lectores de pantalla con una persona, Safari/Firefox, dispositivos físicos, todas las combinaciones de zoom del navegador, APIs de generación de los demos, entregabilidad de email, artefacto Claude detrás del challenge, Rich Results externo o todo el historial Git. Las pruebas sintéticas no garantizan ausencia de errores futuros ni resultados de conversión.

Prioridad recomendada: etiquetar las galerías, ajustar las promesas de Storefront/Product Kit, corregir la etiqueta geográfica y revisar la caché de compatibilidad. Después, enriquecer decisiones/autoría con hechos verificables. Ninguno de estos cambios se implementó en esta pasada.

## Seguimiento — correcciones autorizadas el 28 de octubre

Fer solicitó aplicar y publicar las mejoras. Los cinco P2 se resolvieron después de la auditoría: etiqueta visible de 14px en los nueve diagramas; Storefront como sugerencias a comprobar; Product Kit como borrador para tres formatos con revisión humana, incluido home/SEO; Earnings con “52 locations”; y regla Cloudflare limitada a `/og.png` en los hosts apex/www con Browser TTL Respect origin TTL. GET público confirma `max-age=0, must-revalidate`; v3 conserva `max-age=31536000, immutable`.

Las propuestas P3 de autoría y tradeoffs quedan fuera de este ajuste: requieren hechos adicionales. El informe anterior se conserva como evidencia del estado auditado. La verificación y publicación de las correcciones se registran en `work/handoff.md`.

# Portfolio — estado al 28 de octubre de 2026

## Correcciones P2 autorizadas — verificación previa a publicación

- Fer solicitó «ok publica las mejoras»: autorizados ajustes de la reauditoría, commit/push a main y producción. Se aplican los cinco P2; P3 de autoría/tradeoffs quedan pendientes de datos verificables.
- Nueve diagramas con identificación ilustrativa visible14px; Storefront presenta sugerencias para comprobar; Product Kit borrador de tres formatos y revisión humana en home/caso/SEO; Earnings52locations. Sin nuevos resultados comerciales, dependencias o cambios de identidad/contacto.
- Cloudflare: regla activa `Revalidate portfolio OG compatibility image` (603925cfd77e4aea803e970444a920a5), solo path `/og.png` en apex/www, Browser TTL Respect origin TTL. GET confirma max-age0/must-revalidate; v3 sigue anual/immutable. Sin cambios DNS/seguridad/globalTTL o purgas. README documenta la dependencia de esta regla.
- Build aislado8/8 y suite final54/54, salida0; npm audit0; diff-check limpio. Logs `/tmp/fp-p2-release-build.log` y `/tmp/fp-p2-release-final-check.log`. Revisión independiente de código/QA sin bloqueos; sample tiene contraste5,57:1 en claro/9,77:1 en oscuro. Detector acotado sin hallazgos. Copy puntual de cuatro páginas comprobado tras el último build.
- Preview3001 sesión27872 conservada; ningún proceso3000 detenido. Push y comprobación pública pendientes al escribir este punto; el resultado se añadirá tras verificar el deployment.

## Reauditoría integral de producción — solo revisión

- Fer pidió repetir auditoría punto por punto, incluidos copy y enlaces. Informe nuevo: `work/portfolio-reaudit-2026-10-27.md`. No se modificó producto, ni se hizo commit/push/deploy/purga.
- GO técnico: sin P0/P1 confirmados. Cinco P2: identificación de cifras ilustrativas en galerías; títulos demasiado concluyentes en Storefront; promesa universal/ready-to-post de Product Kit; “52 provinces” incluye Ceuta/Melilla; `/og.png` público devuelve max-age14400 frente a max-age0 del repo. Imagen actual correcta y metadata v3 versionada. No se atribuye el override a una regla concreta sin evidencia.
- Build aislado salida0,8/8; suite completa en dominio público54/54; npm audit0; sin errores de consola/network en cuatro páginas. Log `/tmp/fp-reaudit-live-suite.log`; capturas `/tmp/fp-reaudit-apNwXU`. Detector amplio app/components: una advertencia estética de borde en proof-context, no bug.
- Ocho demos Vercel cargan. GitHub correcto. Claude challenge y LinkedIn anti-bot quedan parcialmente sin verificar; no hay enlaces caídos confirmados. No se probaron generaciones/APIs/envíos, lectores de pantalla o dispositivos físicos. Medidas LCP/CLS son de laboratorio sin throttling, no CWV de campo.
- Preview3001 reiniciada tras build aislado, sesión19677. No se inició/detuvo ningún proceso3000. Próximo paso, solo si Fer lo solicita: corregir P2 y repetir checks; publicación requiere instrucción nueva.

## Publicación Impeccable y contacto neutro — verificada

- Fer solicitó «publica». Código publicado en origin/main: `8c9706b7a68093f95de4d89b4f0c4bfb4783bae6`.
- Vercel `dpl_EK7jvRrMsLdLnkF52UZwKMeWMR8Y`, Ready/Production y check GitHub success. Deployment: https://fp-portfolio-oy5f75s2c-fernypecca-1173s-projects.vercel.app. Dominio confirmado: https://www.fernandopeccatiello.com.
- Build local8/8 y suite54/54; recorrido repetido antes del commit y npm audit0. Suite completa en el dominio público:54/54, salida0. Log `/tmp/fp-impeccable-live-check.log`.
- Smoke público final: cuatro páginas sin llamadas explícitas de disponibilidad, títulos/metadatos profesionales y OG/Twitterv3. Captura nueva y PNG verificados; v3 coincide byte a byte con el archivo neutro local. Las copias v2/og.png también sirven el mismo hash tras purga.
- La primera verificación detectó que Cloudflare conservaba v2 con la cabecera immutable anterior. La purga CDN de Vercel no afectó a esa caché externa. Se usó la sesión existente de Cloudflare para Custom Purge de las cuatro URL v2/og.png con/sin www. Después, el smoke completo pasa y las tres imágenes públicas comparten hash `5e0289e6ff40f5…`. No se modificaron DNS, seguridad o TTL. Las cachés de publicaciones antiguas de terceros quedan fuera de este control.
- Este registro documental no cambia el código funcional. El check Vercel de origin/main identifica el deployment del commit documental más reciente. Preview3001 conservada; ningún proceso3000 alterado. No queda trabajo requerido para esta publicación.

## Contacto profesional: tono neutro

- Contacto home: “Let's compare notes.” y un párrafo sobre growth, demand generation y otras perspectivas. Se conserva “Let's talk” y el mailto neutral “Hello Fernando”.
- Hero queda en “Growth & Demand Lead”, sin indicador de disponibilidad; se elimina la fila Open to del perfil. Los tres casos cierran con “Have a question about this project?”. CLIENT.md fija networking profesional como voz pública y evita CTAs de disponibilidad o contratación. README acompaña ese posicionamiento.
- OG también contenía Open to roles: eliminado del SVG y de todas las copias PNG. Nueva URL `/og-growth-demand-v3.png` en metadata de cuatro páginas y header de caché; v2 y og.png se regeneran como compatibilidad con el mismo contenido neutro. Se actualizan generador y comprobación de metadata. No se garantiza actualizar cachés de publicaciones antiguas de terceros.
- Validación final: build8/8; suite54/54 salida0; QA focal y escaneo de las cuatro UI/metadata sin llamadas explícitas de búsqueda de empleo. v3/v2/og.png responden200 y tienen el mismo hash. OG revisado visualmente. Log `/tmp/fp-neutral-copy-check.log`; captura `/tmp/fp-impeccable-qZiVcG/contact-neutral-final.png`.
- La entrega inicial fue local. La publicación posterior autorizada y verificada figura al principio del documento. Preview http://localhost:3001/#contact conservada.

## Impeccable: auditoría y recorrido del portfolio

- Fer pidió Impeccable para auditar y mejorar. Prioridad confirmada: claridad del recorrido, conservando identidad. Se leyeron SKILL, audit, polish y craft-floor; `impeccable context --target app/page.js` se ejecutó una vez. Falta PRODUCT/DESIGN; no bloquea refinamiento ni se reparó como efecto lateral.
- MobileNav añade details/summary nativo con Work/Approach/About/Contact, cierre con Escape, fuera, link y resize a desktop. Sin JS conserva el disclosure nativo. Objetivos clave a44px.
- ToolsGrid destaca tres casos; las otras seis herramientas quedan en disclosure nativo. Case CTA ahora principal; demo secundaria. Inventario9/4/2/3, estados, enlaces y contenido se conservan. About en390px pasa de aproximadamente12.078px a6.768px de desplazamiento (−44%); home cerrada8.988px.
- CaseStudy destaca una decisión con copy existente. Heroes conceptuales comparten ToolPreview; las nueve galerías usan CaseDiagram/HTML12+ y geometría decorativa, desde datos estructurados en lib/case-visuals.js. Reactor conserva captura real. Se retiran cifras duplicadas del hero, data/CSS sin uso y minipill duplicada; Product scope aparece una sola vez tras sus límites, en tres filas en móvil. Tracking mínimo−0,04em y título de caso máximo6rem.
- Verificación final: build aislado8/8; suite54/54 salida0 con Axe cuatro páginas/cinco tamaños (colección completa abierta), noJS/reduced, keyboard/focus, rutas/SEO/redirects, mínimo tipográfico, recorrido y diagramas de casos. QA independiente sin hallazgos accionables; taps sintetizados Chromium, no dispositivo físico. npm audit0; git diff --check limpio.
- Detector Impeccable ejecutado una vez al terminar siete componentes JSX: salida0/JSON[]. No se inyectó overlay. Informe completo `work/impeccable-audit-2026-10-27.md`; log `/tmp/fp-impeccable-final.log`; detector `/tmp/fp-impeccable-detect.json`; capturas `/tmp/fp-impeccable-qZiVcG`.
- La entrega inicial fue local; el release posterior se documenta arriba. Preview http://localhost:3001/#work, proceso `preview:check` de esta sesión (Ctrl-C para detener). No había servidor3000 al arrancar y no se inició/detuvo ninguno allí. Pendiente editorial: experiencia/contribuciones verificables; límites de dispositivos/lector de pantalla/CWV en informe.

## Publicación de la corrección de microtextos — verificada

- Fer solicitó «ok publica» tras revisar la preview. Código publicado mediante commit/push a origin/main: `da701be22b676226b7fdda83f7078d9cd0bfed81`.
- Vercel `dpl_B1n4wdFXTRQk2w7KtkmfB9tNxDEs`, Ready/Production y check GitHub success. Deployment: https://fp-portfolio-eqzauq6sj-fernypecca-1173s-projects.vercel.app. Dominio confirmado: https://www.fernandopeccatiello.com.
- Validación local: build8/8, suite48/48 y check de legibilidad repetido antes del commit. npm audit0. Suite completa sobre el dominio público:48/48, salida0, incluido texto de las nueve cards de320a1440px sin microtexto o clipping. Log: `/tmp/fp-readable-tools-production.log`.
- Confirmación visual pública: nueve previews HTML, cero textos dentro de sus SVG y etiquetas mínimas de12px. Hero, ticker, cards, robots, sitemap, favicons y OG correctos; smoke sin errores de consola/network. No se probaron APIs de generación de las herramientas externas.
- Este registro documental no cambia el código funcional del release. El check Vercel de origin/main identifica el despliegue del commit documental más reciente. Repositorio sincronizado; servidor original3000 y preview3001 conservados. No queda trabajo requerido para esta publicación.

## Corrección de microtextos en herramientas — 23 octubre

- Fer señaló textos todavía diminutos en la card de Reactor. La versión publicada tenía labels HTML de 9–10 px y textos SVG que se reducían a 3–7 px según el ancho. La corrección del día anterior se había centrado en HeroSystem; estos diagramas eran independientes.
- Las nueve previews usan ahora `components/ToolPreview.jsx` y `components/tool-previews.css`: componente de servidor con etiquetas HTML de al menos 12 px, cuerpo de 14 px y SVG/CSS decorativos sin texto. Las composiciones se redistribuyen por ancho de contenedor, sin reducir la tipografía. Se indica que son previews ilustrativas. No se añadieron dependencias, JS cliente o interacciones ficticias.
- Eliminadas las cadenas SVG antiguas de `lib/tools.js` y sus helpers CSS sin consumidores. Los datos de inventario, links, estados y descripciones se conservan. `ToolCard.jsx` usa el nuevo componente; se amplían URL, estado, pills, tags, captions, Shows y CTA al caso. URL y captions pueden envolver líneas en móvil.
- Metadata HTML de Stats, metodología, perfil, contacto, footer y casos se unifica a un mínimo de 12 px; se conservan los SVG/screenshots independientes de los casos. El logo FP no se trata como texto de lectura.
- Añadido `scripts/check-legibility.mjs` a `npm run check`: mínimo de 12 px renderizados en textos de las nueve cards, comprobación de clipping y overflow en 320/375/390/768/1024/1440. La comprobación falla contra la versión pública anterior y pasa contra la preview corregida. QA independiente: nueve previews visibles sin JS y con reduced motion, sin desbordes ni incidencias Axe en las ilustraciones.
- Verificación final: build aislado 8/8 y suite completa 48/48, salida 0, incluido Axe en las cuatro páginas y cinco tamaños. Mínimo HTML confirmado de 12 px en Reactor; no quedan textos dentro del SVG de su preview. Log `/tmp/fp-legibility-final-verified.log`. Preview http://localhost:3001. Capturas temporales `/tmp/fp-tool-type-FwGpHv`.
- La entrega inicial fue local. Fer aprobó y solicitó después la publicación; el release verificado figura al principio del documento. El servidor original3000 no se detuvo.

## Publicación de los últimos ajustes — verificada

- Fer solicitó «ok deploy en main y live»: autorizados commit, push a origin/main y producción. Código publicado en `c5af70883ab470e7c871b452f28e05dcaed735ab`.
- Vercel `dpl_6riAuqp1Qa3WspurQHyrtanMBcgG`, estado Ready/Production, check GitHub success y build remoto8/8. Deployment: https://fp-portfolio-6w3hx38mw-fernypecca-1173s-projects.vercel.app. Dominio confirmado: https://www.fernandopeccatiello.com y alias sin www.
- Prepublicación: build aislado8/8, suite42/42 y npm audit0. Repetida la suite completa sobre el dominio público:42/42, salida0. Log: `/tmp/fp-portfolio-production-check.log`.
- Smoke público confirma caption14px, nodo central160, cinta antes de Stats con pausa funcional, fondo piedra/cards con sombra, nueve herramientas y descripción prudente del estimador. Móvil390: etiquetas mínimas13,4px y sin overflow. Sin errores de consola/network en esa carga. Robots, sitemap, favicons y OG versionado200.
- Este registro documental acompaña al release sin cambiar su código funcional. El check Vercel de origin/main identifica el despliegue del commit documental más reciente. Proceso original3000 intacto; preview aislada3001 conservada.
- No queda trabajo técnico necesario para publicar. P2 editoriales y límites de la auditoría permanecen documentados en `work/audit-2026-10-22.md`; requieren evidencia de Fer o una decisión futura de CRO.

## Última revisión — legibilidad del hero y auditoría integral

- User pidió ampliar los textos de HeroSystem y auditar la página completa. Labels SVG mínimos reales observados12,2px en los tamaños probados320/375/390/768/981/1024/1440; detalle14px, header12px, control13px y44pxalto. Core y outputs ampliados con conectores ajustados; caption grid conserva altura durante las tres fases. Thirdstep unificado como Measure.
- Estimador de ingresos describe una estimación anual sin prometer ingresos “realistas” no validados. No se alteraron métricas, estados o URLs.
- Build final aislado8/8 y suite42/42 aprobados. Axe sin infracciones detectadas en cuatro páginas/cinco tamaños y404 adicional; consola/network limpios en rutasprincipales; anchors/teclado/loop/redirects/metadatos/assets y9URLs verificados. npm audit0. Revisión de fuente, contenido y QA independientes sin P0/P1.
- Informe completo: `work/audit-2026-10-22.md`. P2 abiertos son oportunidades editoriales: experiencia profesional verificable y probar más jerarquía del caso frente a la demo. No se inventó información ni se reorganizó la colección sin evidencia.
- La entrega inicial fue local; la publicación posterior autorizada y verificada figura al principio de este documento. Preview http://localhost:3001 y proceso3000 intacto. Capturas `/tmp/fp-legibility-audit-PNUecY`, log local `/tmp/fp-portfolio-final-audit-verified.log`.

## Último ajuste — cinta y separación de herramientas

- Fer pidió recuperar movimiento en las disciplinas, considerar situarlas encima de 09/04/02/03 y distinguir mejor las cards. Implementado en preview: Hero → cinta negra animada → Stats. Botón pausa/reanudación; se detiene fuera de viewport, en pestaña oculta y con movimiento reducido. Sin JS o con movimiento reducido, una sola copia permite desplazamiento horizontal con teclado/touch. Grupos de al menos 100vw evitan huecos en ultrawide.
- Work usa fondo piedra; cards blancas con borde y sombra visibles en reposo, gap de 26px y división más clara entre preview y contenido. Se conserva el sistema paper/black/yellow y el contenido existente.
- Verificación: build aislado 8/8; suite portfolio/hero/ticker completa aprobada, incluyendo Axe y cinco tamaños. Revisión adicional de cinta en 375, 390, 768, 1024, 1440 y 2560 px sin overflow; flecha derecha desplaza la cinta estática con foco. Revisión independiente final sin hallazgos accionables.
- Estado: cambios locales sin commit, push ni deploy. Preview http://localhost:3001. Producción conserva el release anterior; el proceso original :3000 no se detuvo. Próximo paso: revisión visual de Fer y publicación cuando la solicite.

## Alcance y restricciones

Fer autorizó primero las correcciones y, posteriormente, el commit/push y publicación de toda la versión el 22 de octubre de 2026. Se conserva el checkout y el servidor original de localhost:3000. Los checks aislados usan :3001. Las restricciones anteriores de no publicar correspondían a la fase de auditoría.

## Implementado

- Reveal muestra HTML por defecto, usa IntersectionObserver/Web Animations sólo para desplazamiento opcional y cancela movimiento cuando cambia la preferencia del usuario. Hero es un componente de servidor. Eliminada dependencia Framer Motion.
- Corregidos contrastes secundarios y foco con anillo de dos colores. Skip link global con main enfocable en home/casos/404; headings de galería coherentes. El ticker inicialmente se dejó estático; el ajuste posterior solicitado por Fer se documenta al final.
- Inventario 9/4/2/3 derivado desde lib/tools.js; retiradas cifras personales de mercados/idiomas cuyo alcance no estaba documentado; corregidos 01–02 del hero y nombre Wedding Earnings Estimator.
- Casos distinguen alcance funcional, conceptos y límites; Reactor identifica respuestas sintéticas sin pretender validación humana; no se inventaron resultados comerciales. proof.limitations se muestra antes de métricas Product scope. Títulos SEO de casos acortados.
- lib/site.js centraliza origen, contactos y OG. Imagen social 1200×630 actualizada, URL versionada y fallback og.png. SoftwareApplication ya no afirma un precio gratuito no documentado. 404 declara noindex.
- Redirects .html y headers de seguridad centralizados en next.config.mjs, usados también por Vercel. CSP conservadora para base/objects/framing/forms, sin pretender política estricta de scripts.
- README/CLIENT.md actualizados, .env* ignorados salvo ejemplo. Quitados featuredTool, rise y copia pública sin referencias de teardown.png. Archivos HTML legacy permanecen en el repo por decisión del usuario.
- scripts/check-portfolio.mjs + npm run check para Playwright/Axe; scripts/generate-og.mjs + npm run og para la imagen social.

## Verificación

- npm run build: salida 0, 8/8 páginas generadas.
- Suite de navegador: 34 comprobaciones pasan; cuatro páginas en 375, 390, 768, 1024 y 1440 px; sin contenido oculto ni overflow; cero infracciones detectadas por Axe en esas combinaciones.
- Contenido visible sin JavaScript y con prefers-reduced-motion en las cuatro páginas. Skip link lleva el foco al main; loop de casos correcto; redirects antiguos responden 308; metadata/canonical/JSON-LD y headers comprobados.
- npm audit: 0 vulnerabilidades. git diff --check sin errores.
- Comprobación final de foco/skip link tras ajustar su ocultación: pasa en las cuatro páginas. Cambio dinámico a movimiento reducido cancela las animaciones.
- Capturas temporales de revisión: /tmp/fp-portfolio-fixed-dF3eBA. No son assets del producto.

## Límites y próximos pasos

- Producción ya sirve esta versión desde el 22 de octubre de 2026, tras autorización explícita de Fer. Las futuras publicaciones requieren una nueva instrucción del usuario.
- LinkedIn/Claude pueden bloquear navegadores automatizados. No se corrigieron servicios externos ni se ejecutaron generaciones de pago o pruebas de backend de las nueve herramientas.
- Impacto comercial, calibración humana y cifras profesionales requieren evidencia de Fer; ahora el portfolio no las presenta como resultados medidos.
- No se hizo certificación con lector de pantalla, dispositivos físicos, Rich Results externo o métricas de campo. No declarar esas pruebas como realizadas.
- Se detectó que :3000 es un proceso de producción que conserva el build anterior en memoria. Tras generar el build nuevo, se recuperaron sus cuatro assets faltantes desde las pestañas de auditoría; sus cuatro rutas vuelven a cargar sin errores y nunca se detuvo el proceso.
- Para repetir sin tocar los assets del servidor original: npm ci; npx playwright install chromium; npm run build:check; npm run preview:check; en otra terminal AUDIT_URL=http://localhost:3001 npm run check. PORTFOLIO_DIST_DIR separa .next-check del .next normal.
- La preview corregida está en localhost:3001 y la versión pública en https://www.fernandopeccatiello.com. localhost:3000 conserva su proceso anterior sin reiniciar.

## Ajuste posterior del hero — 22 octubre 2026

+- Petición de Fer: quitar la captura rosa y las cuatro cifras bajo los CTA del hero. Stats inferior se conserva.
+- Hero.jsx sustituye el stack de screenshots por HeroSystem.jsx, una ilustración React/SVG de Diagnose → Build → Measure en paper/black/yellow. Sin métricas de rendimiento ni dependencias nuevas.
+- Conectores animados, fase visual y control Play/Pause. Se pausa fuera del viewport, en pestaña oculta y con prefers-reduced-motion. SSR sin JS conserva diagrama y caption estáticos; listeners/intervals tienen cleanup.
+- Limpiado el CSS exclusivo del hero anterior, preservando el estilo del badge .tool__chrome .mini. Retirada animación decorativa continua del punto del eyebrow.
+- Nuevo npm run check:hero integrado en npm run check. Baseline anterior falló por las dos capturas; la nueva versión pasa composición, avance, pausa/reanudación, fuera de viewport, movimiento reducido y sin JS. Build aislado genera 8/8 rutas. Revisión independiente sin hallazgos severos.
+- Durante la fase de desarrollo se entregó preview en localhost:3001 sin commit/deploy; la autorización posterior de publicación figura abajo. :3000 conserva su proceso anterior.

Validación final del nuevo hero: 38 comprobaciones pasan (suite portfolio + hero), cero infracciones detectadas por Axe, build 8/8 y cinco anchos sin overflow. Capturas de hero: /tmp/fp-hero-react-oZBud0.

## Publicación autorizada — 22 octubre 2026

+- Solicitud explícita de Fer: «push a live de todo». Autorizados commit, push a main y despliegue de producción del portfolio completo.
+- Remoto: https://github.com/fernypecca/fp-portfolio.git; rama de producción: main; proyecto Vercel: fp-portfolio; dominio: https://www.fernandopeccatiello.com.
+- No se incluyen .env, credenciales, node_modules, .next o .next-check. Se conservan en Git las referencias HTML legacy/conceptos solicitadas, fuera de las rutas públicas de Next.
+- La confirmación efectiva del release se comprueba con el estado Vercel del commit en main y la presencia de .hero-system en el dominio público; no basta un HTTP 200 de la versión antigua.

Prepublicación: build aislado 8/8 y suite completa 38/38 pasan; npm audit sin vulnerabilidades. Proyecto Vercel actualizado de Other a Next.js, con build/install/output automáticos y sin variables de entorno de producción.

## Release verificado en producción

+- Código publicado: commit 2aac0c695a886e2710586af3ef79b4898323f39b, push a origin/main.
+- Vercel: dpl_8GEhxNTzS1m2NAxik3LUyYxcgoeu, estado Ready/Production y check GitHub success. Build remoto generó 8/8 rutas.
+- Dominio confirmado: https://www.fernandopeccatiello.com (también alias sin www). Deployment de código: https://fp-portfolio-1r6boyk8o-fernypecca-1173s-projects.vercel.app.
+- Smoke test público: home y tres casos 200; hero SVG animado y pausa funcionales; sin screenshots ni inventario dentro del hero; móvil375 sin overflow; robots/sitemap/iconos/OG200; inexistente404; cuatro redirects .html308; canonical y headers de seguridad correctos; sin errores de consola ni requests fallidos.
+- Esta actualización de documentación no cambia el código funcional del release. Checkout sincronizado mediante commit/push; comprobar git status y check Vercel de main para el SHA documental más reciente.

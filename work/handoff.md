# Portfolio — estado al 22 de octubre de 2026

## Alcance y restricciones

Fer autorizó primero las correcciones y, posteriormente, el commit/push y publicación de toda la versión el 22 de octubre de 2026. Se conserva el checkout y el servidor original de localhost:3000. Los checks aislados usan :3001. Las restricciones anteriores de no publicar correspondían a la fase de auditoría.

## Implementado

- Reveal muestra HTML por defecto, usa IntersectionObserver/Web Animations sólo para desplazamiento opcional y cancela movimiento cuando cambia la preferencia del usuario. Hero es un componente de servidor. Eliminada dependencia Framer Motion.
- Corregidos contrastes secundarios y foco con anillo de dos colores. Skip link global con main enfocable en home/casos/404; headings de galería coherentes; ticker estático sin bucle continuo.
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

- Producción sigue teniendo la versión anterior. Verificar dominio, redirects y headers efectivos en Vercel cuando Fer autorice publicar; no desplegar por iniciativa propia.
- LinkedIn/Claude pueden bloquear navegadores automatizados. No se corrigieron servicios externos ni se ejecutaron generaciones de pago o pruebas de backend de las nueve herramientas.
- Impacto comercial, calibración humana y cifras profesionales requieren evidencia de Fer; ahora el portfolio no las presenta como resultados medidos.
- No se hizo certificación con lector de pantalla, dispositivos físicos, Rich Results externo o métricas de campo. No declarar esas pruebas como realizadas.
- Se detectó que :3000 es un proceso de producción que conserva el build anterior en memoria. Tras generar el build nuevo, se recuperaron sus cuatro assets faltantes desde las pestañas de auditoría; sus cuatro rutas vuelven a cargar sin errores y nunca se detuvo el proceso.
- Para repetir sin tocar los assets del servidor original: npm ci; npx playwright install chromium; npm run build:check; npm run preview:check; en otra terminal AUDIT_URL=http://localhost:3001 npm run check. PORTFOLIO_DIST_DIR separa .next-check del .next normal.
- La vista corregida queda en localhost:3001. localhost:3000 conserva la versión anterior hasta que Fer decida reiniciar ese proceso.

## Ajuste posterior del hero — 22 octubre 2026

+- Petición de Fer: quitar la captura rosa y las cuatro cifras bajo los CTA del hero. Stats inferior se conserva.
+- Hero.jsx sustituye el stack de screenshots por HeroSystem.jsx, una ilustración React/SVG de Diagnose → Build → Measure en paper/black/yellow. Sin métricas de rendimiento ni dependencias nuevas.
+- Conectores animados, fase visual y control Play/Pause. Se pausa fuera del viewport, en pestaña oculta y con prefers-reduced-motion. SSR sin JS conserva diagrama y caption estáticos; listeners/intervals tienen cleanup.
+- Limpiado el CSS exclusivo del hero anterior, preservando el estilo del badge .tool__chrome .mini. Retirada animación decorativa continua del punto del eyebrow.
+- Nuevo npm run check:hero integrado en npm run check. Baseline anterior falló por las dos capturas; la nueva versión pasa composición, avance, pausa/reanudación, fuera de viewport, movimiento reducido y sin JS. Build aislado genera 8/8 rutas. Revisión independiente sin hallazgos severos.
+- Preview actualizada en localhost:3001; :3000 conserva el proceso anterior. Sin commit ni deploy.

Validación final del nuevo hero: 38 comprobaciones pasan (suite portfolio + hero), cero infracciones detectadas por Axe, build 8/8 y cinco anchos sin overflow. Capturas de hero: /tmp/fp-hero-react-oZBud0.

## Publicación autorizada — 22 octubre 2026

+- Solicitud explícita de Fer: «push a live de todo». Autorizados commit, push a main y despliegue de producción del portfolio completo.
+- Remoto: https://github.com/fernypecca/fp-portfolio.git; rama de producción: main; proyecto Vercel: fp-portfolio; dominio: https://www.fernandopeccatiello.com.
+- No se incluyen .env, credenciales, node_modules, .next o .next-check. Se conservan en Git las referencias HTML legacy/conceptos solicitadas, fuera de las rutas públicas de Next.
+- La confirmación efectiva del release se comprueba con el estado Vercel del commit en main y la presencia de .hero-system en el dominio público; no basta un HTTP 200 de la versión antigua.

Prepublicación: build aislado 8/8 y suite completa 38/38 pasan; npm audit sin vulnerabilidades. Proyecto Vercel actualizado de Other a Next.js, con build/install/output automáticos y sin variables de entorno de producción.

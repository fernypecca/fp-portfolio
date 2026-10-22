# Hero visual — 22 octubre 2026

Petición: quitar el screenshot rosa y el inventario bajo los CTA; sustituir el módulo visual por una opción React con movimiento. Mantener Stats inferior, copy principal y paleta.

Opciones consideradas: circuito de growth (seleccionado por su relación con attention → pipeline); recreaciones de tools alternadas (demasiado próximas al stack anterior); nodos orbitales (más decorativos y menos claros).

Diseño: figura React/SVG en paper/black/yellow, tres fases Diagnose/Build/Measure, señales sobre conexiones y un cuello de botella central. Sin números de rendimiento ni claims adicionales. Control pausa/play, pausa fuera del viewport/pestaña y vista estática con prefers-reduced-motion o sin JS. Sin dependencias nuevas.

Archivos: components/Hero.jsx; nuevo HeroSystem.jsx; app/globals.css; chequeo funcional en scripts/check-portfolio.mjs. Conservar .mini de ToolCard al limpiar CSS antiguo.

Validación: build aislado .next-check, controles de reproducción, sin JS/reduced motion, Axe y capturas a 375/390/768/1024/1440. No commit/deploy ni parar :3000.

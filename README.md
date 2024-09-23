# README para Proyecto Next.js con App Router y Vitest

Este documento proporciona instrucciones sobre cómo ejecutar, probar y gestionar tu proyecto de Next.js utilizando `pnpm`, el App Router y Vitest como framework de pruebas.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js** (v10.13 o superior)
- **pnpm**: Si no lo tienes instalado, puedes hacerlo ejecutando:
  ```bash
  npm install -g pnpm
  ```

## Instalación de Dependencias

Navega al directorio de tu proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
pnpm install
```

## Ejecutar el Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
pnpm run dev
```

Abre tu navegador y visita `http://localhost:3000` para ver tu aplicación en acción.

## Estructura del Proyecto con App Router

Con el App Router, la estructura del proyecto se organiza dentro de la carpeta `app`. Aquí hay un ejemplo básico de cómo podría verse:

```
gruas-ucab-web/
├── node_modules/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── about/
│       └── page.js
├── public/
├── styles/
├── .gitignore
├── package.json
└── next.config.js
```

- **app/layout.js**: Define la estructura común de las páginas.
- **app/page.js**: Es la página principal.
- **app/about/page.js**: Es una página adicional (Acerca de).

## Scripts Disponibles

En tu archivo `package.json`, encontrarás los siguientes scripts predefinidos:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "vitest"
}
```

- **dev**: Inicia el servidor en modo desarrollo.
- **build**: Compila la aplicación para producción.
- **start**: Inicia la aplicación en modo producción.
- **test**: Ejecuta las pruebas configuradas con Vitest.

## Realizar Pruebas

Para realizar pruebas en tu proyecto utilizando Vitest, asegúrate de que esté correctamente configurado. Puedes ejecutar tus pruebas con el siguiente comando:

```bash
pnpm run test
```

### Ejemplo de Pruebas con Vitest

Aquí tienes un ejemplo básico de cómo estructurar una prueba utilizando Vitest:

```javascript
import { describe, it, expect } from 'vitest';

describe('sample test', () => {
  it('should return true', () => {
    expect(true).toBe(true);
  });
});
```

Vitest permite escribir pruebas que se integran fácilmente con tu código, aprovechando su soporte nativo para módulos ES y TypeScript.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

Con este README, tendrás una guía clara y concisa sobre cómo trabajar con tu proyecto Next.js utilizando el App Router, pnpm y Vitest como framework de pruebas.

Citations:
[1] https://saucelabs.com/resources/blog/vitest-vs-jest-comparison
[2] https://www.wearecapicua.com/blog/jest-vs-vitest
[3] https://blog.seancoughlin.me/vitest-vs-jest-the-new-javascript-testing-framework
[4] https://www.reddit.com/r/reactjs/comments/10zyse3/is_jest_still_faster_than_vitest/
[5] https://github.com/angular/angular-cli/issues/25217
[6] https://vitest.dev/guide/comparisons
[7] https://dev.to/thejaredwilcurt/vitest-vs-jest-benchmarks-on-a-5-year-old-real-work-spa-4mf1
[8] https://stackoverflow.com/questions/78137788/how-do-i-test-routes-made-with-the-app-router-in-nextjs-im-using-vitest-for-th

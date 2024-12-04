![Nextjs 14 logo in black brackground](https://nextjs.org/static/blog/next-14/twitter-card.png)

# Gruas UCAB Web Application

This document provides instructions on how to run, test, and manage your Next.js project using `pnpm`, the App Router, and Vitest as the testing framework.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v10.13 or higher)
- **pnpm**: If you don't have it installed, you can do so by running:
  ```bash
  npm install -g pnpm
  ```

## Installing Dependencies

Navigate to your project directory and run the following command to install the dependencies:

```bash
pnpm install
```

## Running the Project

To start the development server, execute:

```bash
pnpm run dev
```

Open your browser and visit `http://localhost:3000` to see your application in action.

## Project Structure with App Router

With the App Router, the project structure is organized within the `app` folder. Here is a basic example of what it might look like:

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

- **app/layout.js**: Defines the common structure for pages.
- **app/page.js**: This is the main page.
- **app/about/page.js**: This is an additional page (About).

## Available Scripts

In your `package.json` file, you will find the following predefined scripts:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "vitest"
}
```

- **dev**: Starts the server in development mode.
- **build**: Compiles the application for production.
- **start**: Starts the application in production mode.
- **test**: Runs tests configured with Vitest.

## Running Tests

To run tests in your project using Vitest, ensure it is properly configured. You can execute your tests with the following command:

```bash
pnpm run test
```

### Example Test with Vitest

Here’s a basic example of how to structure a test using Vitest:

```javascript
import { describe, it, expect } from 'vitest';

describe('sample test', () => {
  it('should return true', () => {
    expect(true).toBe(true);
  });
});
```

Vitest allows you to write tests that integrate seamlessly with your code, taking advantage of its native support for ES modules and TypeScript.

## Contributions

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. Please refer to the LICENSE file for more details.

---

With this README, you will have a clear and concise guide on how to work with your Next.js project using the App Router, pnpm, and Vitest as your testing framework.

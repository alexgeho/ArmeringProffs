/**
 * Custom server – startfil för Passenger / DirectAdmin "Setup Node.js App" (Inleed).
 *
 * CloudLinux Node.js Selector (Passenger) kör en startfil direkt, inte `npm run start`.
 * Ange denna fil som "Application startup file" i DirectAdmin. Kör `next build` först.
 *
 * CommonJS med avsikt: filen körs INTE genom Next-kompilatorn (måste vara körbar av
 * Node som den är). Se node_modules/next/dist/docs/01-app/02-guides/custom-server.md.
 */
// Ladda .env-filer (SMTP-uppgifter m.m.) INNAN Next initieras. En custom server
// går inte genom Next CLI, så vi måste ladda miljövariablerna själva. @next/env
// läser .env, .env.production, .env.local i appmappen.
require("@next/env").loadEnvConfig(__dirname, false);

const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> Server listening on port ${port}`);
  });
});

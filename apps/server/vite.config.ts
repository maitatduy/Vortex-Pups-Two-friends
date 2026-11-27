import { defineConfig } from "vite";
import { colyseus } from "colyseus/vite";

export default defineConfig({
    // Colyseus runs on Vite's HTTP server, so pin the port: the client connects to ws://localhost:2567
    server: { port: 2567, strictPort: true },
    // This app is server-only (the web client lives in apps/client), so build just the colyseus environment.
    builder: {
        buildApp: async (builder) => {
            await builder.build(builder.environments.colyseus);
        },
    },
    plugins: [colyseus({ serverEntry: "/src/app.config.ts" })],
});

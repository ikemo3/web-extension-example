import { crx } from "@crxjs/vite-plugin";
import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

import manifest from "./manifest.config";

export default defineConfig(({ mode }) => {
  const isFirefox = mode === "firefox";
  const browser = isFirefox ? "firefox" : "chrome";

  return {
    build: {
      outDir: `dist/${browser}`,
      target: "esnext",
      rollupOptions: {
        input: {
          options: "options.html",
        },
      },
    },
    plugins: [solidPlugin(), crx({ manifest, browser })],
    server: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: "happy-dom",
      coverage: {
        provider: "istanbul",
      },
    },
  };
});

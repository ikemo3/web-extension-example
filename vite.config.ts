import { crx } from "@crxjs/vite-plugin";
import solidPlugin from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

import { chromeManifest, firefoxManifest } from "./manifest";

export default defineConfig(({ mode }) => {
  const isFirefox = mode === "firefox";
  const manifest = isFirefox ? firefoxManifest : chromeManifest;
  const browser = isFirefox ? "firefox" : "chrome";

  return {
    build: {
      outDir: `dist/${browser}`,
      target: "esnext",
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

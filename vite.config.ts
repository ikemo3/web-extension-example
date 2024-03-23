import { crx } from "@crxjs/vite-plugin";
import stringHash from "string-hash";
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
      minify: false,
      cssMinify: false,
      sourcemap: true,
      rollupOptions: {
        input: {
          popup: "src/popup/index.html",
          options: "src/options/index.html",
        },
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
    },
    css: {
      modules: {
        generateScopedName: function (name, filename, css) {
          const i = css.indexOf(`.${name}`);
          const lineNumber = css.substring(0, i).split(/[\r\n]/).length;
          const hash = stringHash(css).toString(36).substring(0, 5);

          return `crx-_${name}_${hash}_${lineNumber}`;
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

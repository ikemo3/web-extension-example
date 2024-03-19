import { defineManifest } from "@crxjs/vite-plugin";

const baseManifest = {
  manifest_version: 3,
  name: "CRXJS Solid Vite Example",
  version: "0.0.2",
  action: { default_popup: "index.html" },
  content_scripts: [
    {
      js: ["src/content.tsx"],
      matches: ["https://example.com/*"],
    },
  ],
};

const chromeManifest = baseManifest;

const firefoxManifest = {
  ...baseManifest,
  browser_specific_settings: {
    gecko: {
      id: "chrome-extension-example@ikemo3.com",
    },
  },
};

export default defineManifest((env) => {
  const isFirefox = env.mode === "firefox";

  if (isFirefox) {
    return firefoxManifest;
  } else {
    return chromeManifest;
  }
});

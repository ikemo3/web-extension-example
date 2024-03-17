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

export const chromeManifest = baseManifest;

export const firefoxManifest = {
  ...baseManifest,
  browser_specific_settings: {
    gecko: {
      id: "chrome-extension-example@ikemo3.com",
    },
  },
};

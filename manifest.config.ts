import { defineManifest } from "@crxjs/vite-plugin";

import packageJson from "./package.json";
import { convertSemverToManifestVersion } from "./src/libs/version";
const { version } = packageJson;

const baseManifest = {
  manifest_version: 3,
  name: "CRXJS Solid Vite Example",
  version: convertSemverToManifestVersion(version),
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

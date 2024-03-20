import { defineManifest } from "@crxjs/vite-plugin";

import packageJson from "./package.json";
import { convertSemverToManifestVersion } from "./src/libs/version";
const { version } = packageJson;

const firefoxSpecificSettings = {
  gecko: {
    id: "chrome-extension-example@ikemo3.com",
  },
};

export default defineManifest((env) => {
  const isFirefox = env.mode === "firefox";
  const browserSpecificSettings = isFirefox
    ? firefoxSpecificSettings
    : undefined;

  return {
    manifest_version: 3,
    name: "CRXJS Solid Vite Example",
    version: convertSemverToManifestVersion(version),
    action: { default_popup: "index.html" },
    options_ui: {
      page: "options.html",
      open_in_tab: true,
    },
    content_scripts: [
      {
        js: ["src/content.tsx"],
        matches: ["https://example.com/*"],
      },
    ],
    browser_specific_settings: browserSpecificSettings,
  };
});

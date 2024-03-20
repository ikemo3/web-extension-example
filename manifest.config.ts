import { defineManifest } from "@crxjs/vite-plugin";

import packageJson from "./package.json";
import { convertSemverToManifestVersion } from "./src/libs/version";
const { version } = packageJson;

type ChromeManifestBackground = {
  service_worker: string;
  type?: "module";
};

type FirefoxManifestBackground = {
  scripts: string[];
  persistent?: false;
};

type ManifestBackground = ChromeManifestBackground | FirefoxManifestBackground;

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
  const background: ManifestBackground = isFirefox
    ? { scripts: ["src/background.ts"] }
    : { service_worker: "src/background.ts", type: "module" };

  return {
    manifest_version: 3,
    name: "CRXJS Solid Vite Example",
    version: convertSemverToManifestVersion(version),
    action: { default_popup: "index.html" },
    permissions: ["contextMenus"],
    background,
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

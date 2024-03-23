import { defineManifest } from "@crxjs/vite-plugin";

import packageJson from "./package.json";
import { convertSemverToManifestVersion } from "./src/shared/version";
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
    ? { scripts: ["src/background/background.ts"] }
    : { service_worker: "src/background/background.ts", type: "module" };

  return {
    manifest_version: 3,
    name: "CRXJS Solid Vite Example",
    version: convertSemverToManifestVersion(version),
    icons: {
      16: "icons/icon16.png",
      48: "icons/icon48.png",
      128: "icons/icon128.png",
    },
    action: { default_popup: "src/popup/index.html" },
    permissions: ["contextMenus"],
    background,
    options_ui: {
      page: "src/options/index.html",
      open_in_tab: true,
    },
    content_scripts: [
      {
        js: ["src/content_scripts/example.tsx"],
        matches: ["https://example.com/*"],
      },
    ],
    browser_specific_settings: browserSpecificSettings,
  };
});

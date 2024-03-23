import fs from "fs";
import { zip } from "zip-a-folder";

if (!fs.existsSync("./artifacts")) {
  fs.mkdirSync("./artifacts");
}

// dist/{chrome,firefox}/.vite を削除
fs.rmdirSync("./dist/chrome/.vite", { recursive: true });
fs.rmdirSync("./dist/firefox/.vite", { recursive: true });

// dist/{chrome,firefox} を zip にする
await zip("./dist/chrome", "./artifacts/chrome.zip");
await zip("./dist/firefox", "./artifacts/firefox.zip");

import { zip } from "zip-a-folder";
import fs from "fs";

if (!fs.existsSync("./artifacts")) {
  fs.mkdirSync("./artifacts");
}

await zip("./dist/chrome", "./artifacts/chrome.zip");

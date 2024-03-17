import fs from "fs";
import { zip } from "zip-a-folder";

if (!fs.existsSync("./artifacts")) {
  fs.mkdirSync("./artifacts");
}

await zip("./dist/chrome", "./artifacts/chrome.zip");

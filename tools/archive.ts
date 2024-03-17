import { zip } from "zip-a-folder";
import fs from "fs";

await zip("./dist", "./archive.zip");
if (!fs.existsSync("./artifacts")) {
  fs.mkdirSync("./artifacts");
}

await zip("./dist/chrome", "./artifacts/chrome.zip");

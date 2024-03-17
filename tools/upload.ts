import chromeWebstoreUpload from "chrome-webstore-upload";
import fs from "fs";

const store = chromeWebstoreUpload({
  extensionId: process.env.EXTENSION_ID,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

const myZipFile = fs.createReadStream("./artifacts/archive.zip");
store.uploadExisting(myZipFile).then((res) => {
  // Response is a Resource Representation
  // https://developer.chrome.com/webstore/webstore_api/items#resource
  console.log(res);
});

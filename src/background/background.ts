const exampleContextMenuItems = {
  "example-item-1": "Example Item 1",
  "example-item-2": "Example Item 2",
};

const exampleMenuItems = {
  "example-menu-1": "Example Menu 1",
  "example-menu-2": "Example Menu 2",
};

chrome.runtime.onInstalled.addListener(async () => {
  for (const [id, title] of Object.entries(exampleContextMenuItems)) {
    chrome.contextMenus.create({
      id,
      title,
      // コンテキストメニューの種類(normal, checkbox, radio, separator)
      // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/ItemType
      type: "normal",
      // コンテキストメニューを表示する条件(selection, image, link, pageなど)
      // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType
      contexts: ["selection", "image"],
    });
  }

  for (const [id, title] of Object.entries(exampleMenuItems)) {
    chrome.contextMenus.create({
      id,
      title,
      // ツールバーのアクションボタンを右クリックしたときに表示されるメニュー
      contexts: ["action"],
    });
  }

  if (import.meta.env.MODE === "firefox") {
    // Firefoxのときはオプションメニューを追加
    chrome.contextMenus.create({
      id: "openOptions",
      title: "オプション",
      contexts: ["action"],
    });
  }

  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "openOptions") {
      // オプションページを開く
      chrome.runtime.openOptionsPage();
    }
  });
});

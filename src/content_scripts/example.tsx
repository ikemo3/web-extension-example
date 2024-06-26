/* @refresh reload */
import "./index.css";

import { render } from "solid-js/web";

import App from "./App";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

render(() => <App />, root);

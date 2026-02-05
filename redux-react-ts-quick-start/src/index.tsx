import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 2. This is second Redux step, introduce Provider with store prop to wrap the whole app and introduce Redux globally in React app
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "../src/store";
import { Provider } from "react-redux";
import { fetchFood } from "../src/store/features/foodSlice.js";
import { BrowserRouter } from "react-router-dom";
store.dispatch(fetchFood());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

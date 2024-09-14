import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store-toolkit/store";
import { BrowserRouter } from "react-router-dom";
// import store from "./store/store";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
/* Luôn luôn bọc provider khi sử dụng redux / redux toolkit:
Trong provider: sẽ gồm store => store mà mình vừa mới tạo
  */

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

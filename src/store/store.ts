import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

/** Muốn cài thêm dev tool của redux thì mình sẽ phải cài thêm redux devtool trên npm:
 *  npm i @redux-devtools/extension
 *  => Sử dụng composeWithDevTools() là tham số thứ 2 của createStore.
 */
const store = createStore(
  rootReducer
  // other store enhancers if any
);

export default store;

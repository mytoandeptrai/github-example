import { combineReducers } from "redux";
import counterReducer from "./counter/counter-reducer";
import todoReducer from "./todo/todo-reducer";
import { studentReducer } from "./student/student-reducer";

const rootReducer = combineReducers({
   /** Khai báo các reducer sau khi đã tạo gồm : tên : tên reducers
    * tên : Tên để sau này mình sử dụng lấy state từ reducer ra
    * tên reducer: Tên của reducer mà mình vừa mới tạo
    */
   counterState: counterReducer,
   todoState: todoReducer,
   students: studentReducer,
});

export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
   count: 0,
};

/**
 * Cách tạo slice trong toolkit:
 * Khởi tạo biến và gán bằng createSlice({}) => trong cái này nhận vào 1 object
 * Trong object sẽ gồm:
 * name: Tên slice của mình, dùng để phân biệt giữa những slice khác nhau,
 * initialState: giá trị khởi tạo ban đầu của slice
 * reducers: nơi mà mình sẽ viết những action để tương tác, nó nhận vào 1 object, trong đó mình sẽ khai báo các function
 * và cách nhau bởi dấu ",".
 *
 *
 */

export const counterSlice = createSlice({
   name: "counterSlice",
   initialState: initialValue,
   reducers: {
      increment: (state, action) => {
         state.count = action.payload;
      },
      decrement: (state) => {
         state.count = state.count - 1;
      },
   },
});

/**
 * Để lấy được actions từ toolkit ra thì mình sẽ dùng tên slice của mình chấm với actions,
 * ví dụ: counterSlice.actions;
 * Sau đó sử dụng biến const để lấy các actions từ slice ra
 * Cuối cùng mình phải export cái slice của mình để thêm vào reducers trong store.
 */

export const { decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;

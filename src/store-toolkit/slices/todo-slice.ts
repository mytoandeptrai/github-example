import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";
import { TodoItemProps } from "../../components/TodoList";

interface Payload {
   page: number;
   value: string;
}
/**
 * Cách dùng :
 * tạo hàm với createAsyncThunk(tham số thứ 1, tham số thứ 2):
 * tham số thứ 1 nó sẽ là name = tên slice / tên hàm
 * tham số thứ 2 nó sẽ là 1 hàm với payload và thunkAPI để xử lý;
 * trong đó payload là dữ liệu được gởi lên
 * trong đó thunkAPI là sử dụng để trả về dữ liệu trong extraReducers nếu như ko dùng return
 */
export const fetchTodoToolkit: any = createAsyncThunk(
   "todoSlice/fetchTodoToolkit",
   async (payload: Payload, thunkAPI) => {
      const page = payload.page;
      const value = payload.value;
      const url = value ? `/todos?title=${value}` : `/todos?_page=${page}`;
      try {
         const response: any[] = await axiosClient.get(url);
         /**
          * Có 2 cách trả về value:
          * thunkAPI.fulfillWithValue( truyền value vô đây ).
          * return về value
          */
         //  thunkAPI.fulfillWithValue(response);
         return response;
      } catch (error) {
         /**
          * Có 2 cách trả về error:
          * thunkAPI.rejectWithValue( truyền error vô đây ).
          * return về error
          */
         //  thunkAPI.rejectWithValue(error);
         return error;
      }
   }
);

const initialValue = {
   todoList: [],
   page: 1,
   value: "",
   loading: false,
};

export const todoSlice = createSlice({
   name: "todoSlice",
   initialState: initialValue,
   reducers: {
      addPage: (state, action) => {
         state.page = action.payload;
      },
      addSearch: (state, action) => {
         state.value = action.payload;
      },
      onCompleteChange: (state, action) => {
         /** Lấy todo từ action.payload ở component todoItem gởi lên. */
         const todo = action.payload;

         /** Clone mảng ban đầu dựa vào state */
         /**
          * Để lấy được các state đang tồn tại của slice thì mình sẽ dùng cú pháp:
          * current( truyền state mình muốn lấy vào ) và chấm tới giá trị mình muốn
          * ví dụ: + current(state).todoList
          *        + current(state).loading
          */
         const cloneTodoList: TodoItemProps[] = current(state).todoList;
         /** Tìm vị trí của todo vừa mới được bấm trong mảng */
         // const index = cloneTodoList.indexOf(todo);
         // const existedTodo = cloneTodoList[index];
         // /** Update lại giá trị completed của todo mình vừa tìm thấy */
         // existedTodo.completed = !existedTodo.completed;

         const newTodoList = cloneTodoList.map((existedTodo) => {
            if (existedTodo.id === todo.id) {
               return { ...existedTodo, completed: !existedTodo.completed };
            }

            return existedTodo;
         });

         state.todoList = newTodoList as never[];
      },
   },
   extraReducers: (builder) => {
      /** Thêm các reducer mà mình gọi API ở trên bằng createAsyncThunk:
       * mình sẽ có 3 loại builder chính:
       *
       *
       * fulfilled: Gọi khi kết quả của hàm trả về thành công ( nằm trong try )
       * rejected: Gọi khi kết quả của hàm trả về bị thất bại ( error )
       * pending: Gọi trước khi mà nó thực thi API:
       *
       *
       *
       * cách viết:
       * builder.addCase(thứ 1, thứ 2):
       * thứ 1: tên hàm API createAsyncThunk của mình chấm tới các loại buider ở trên,
       * thứ 2: là một hàm trả về kết quả để update vào state của reducer
       * Ví Dụ: createAsyncThunk(fetchTodo.pending, (state) => {})
       */

      /** Truớc khi hàm fetchTodoToolkit gọi API */
      builder.addCase(fetchTodoToolkit.pending, (state) => {
         state.loading = true;
      });
      /** Sau khi hàm fetchTodoToolkit gọi API thành công */
      builder.addCase(fetchTodoToolkit.fulfilled, (state, action) => {
         state.loading = false;
         state.todoList = action.payload as any;
      });
      /** Sau khi hàm fetchTodoToolkit gọi API thất bại */
      builder.addCase(fetchTodoToolkit.rejected, (state, action) => {
         state.loading = false;
         console.error(action.payload);
      });
   },
});

export const { addPage, addSearch, onCompleteChange } = todoSlice.actions;

export default todoSlice.reducer;

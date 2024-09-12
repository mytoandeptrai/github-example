import { AnyAction } from "redux";
import {
   ADD_STUDENT,
   DELETE_STUDENT,
   EDIT_STUDENT,
   SET_EDITING_STUDENT,
} from "./student-type";

export interface Student {
   id: number;
   fullName: string;
   studentId: string;
   birthDate: string;
   class: string;
   email: string;
}

interface StudentState {
   students: Student[];
   editingStudent: Student | null;
}

const initialState: StudentState = {
   students: [],
   editingStudent: null, // Trạng thái lưu sinh viên đang được chỉnh sửa
};

export const studentReducer = (
   state = initialState,
   action: AnyAction
): StudentState => {
   switch (action.type) {
      case ADD_STUDENT:
         return {
            ...state,
            students: [...state.students, action.payload],
            editingStudent: null, // Reset trạng thái khi thêm mới
         };
      case EDIT_STUDENT:
         return {
            ...state,
            students: state.students.map((student) =>
               student.id === action.payload.id ? action.payload : student
            ),
            editingStudent: null, // Reset sau khi chỉnh sửa xong
         };
      case SET_EDITING_STUDENT:
         return {
            ...state,
            editingStudent: action.payload, // Đặt sinh viên cần chỉnh sửa
         };
      case DELETE_STUDENT:
         return {
            ...state,
            students: state.students.filter(
               (student) => student.id !== action.payload
            ),
         };
      default:
         return state;
   }
};

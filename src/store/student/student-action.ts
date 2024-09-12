import { Student } from "./student-reducer";
import {
   ADD_STUDENT,
   DELETE_STUDENT,
   EDIT_STUDENT,
   SET_EDITING_STUDENT,
} from "./student-type";

export const addStudent = (student: Student) => ({
   type: ADD_STUDENT,
   payload: student,
});

export const editStudent = (student: Student) => ({
   type: EDIT_STUDENT,
   payload: student,
});

export const setEditingStudent = (student: Student | null) => ({
   type: SET_EDITING_STUDENT,
   payload: student,
});

export const deleteStudent = (studentId: number) => ({
   type: DELETE_STUDENT,
   payload: studentId,
});

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Student } from "../store/student/student-reducer";
import {
   deleteStudent,
   setEditingStudent,
} from "../store/student/student-action";

const StudentList: React.FC = () => {
   const students = useSelector((state: RootState) => state.students.students);
   const dispatch = useDispatch();

   return (
      <table>
         <thead>
            <tr>
               <th>Họ và tên</th>
               <th>Mã sinh viên</th>
               <th>Ngày sinh</th>
               <th>Lớp học</th>
               <th>Email</th>
               <th>Thao tác</th>
            </tr>
         </thead>
         <tbody>
            {students.map((student: Student) => (
               <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td>{student.studentId}</td>
                  <td>{student.birthDate}</td>
                  <td>{student.class}</td>
                  <td>{student.email}</td>
                  <td>
                     <button
                        onClick={() => dispatch(setEditingStudent(student))}
                     >
                        Sửa
                     </button>
                     <button
                        onClick={() => dispatch(deleteStudent(student.id))}
                     >
                        Xóa
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default StudentList;

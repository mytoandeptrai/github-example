import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Student } from "../store/student/student-reducer";
import {
   addStudent,
   editStudent,
   setEditingStudent,
} from "../store/student/student-action";

const StudentForm: React.FC = () => {
   return <>123</>;
   // const dispatch = useDispatch();
   // const editingStudent = useSelector(
   //    (state: RootState) => state.students.editingStudent
   // );

   // const [student, setStudent] = React.useState<Student>({
   //    id: Date.now(),
   //    fullName: "",
   //    studentId: "",
   //    birthDate: "",
   //    class: "",
   //    email: "",
   // });

   // useEffect(() => {
   //    if (editingStudent) {
   //       setStudent(editingStudent);
   //    }
   // }, [editingStudent]);

   // const handleSubmit = (e: React.FormEvent) => {
   //    e.preventDefault();
   //    if (editingStudent) {
   //       dispatch(editStudent(student)); // Gửi action chỉnh sửa
   //    } else {
   //       dispatch(addStudent({ ...student, id: Date.now() })); // Gửi action thêm mới
   //    }
   //    dispatch(setEditingStudent(null)); // Reset form sau khi lưu
   // };

   // return (
   //    <form onSubmit={handleSubmit}>
   //       <input
   //          type="text"
   //          placeholder="Họ và tên"
   //          value={student.fullName}
   //          onChange={(e) =>
   //             setStudent({ ...student, fullName: e.target.value })
   //          }
   //          required
   //       />
   //       <input
   //          type="text"
   //          placeholder="Mã sinh viên"
   //          value={student.studentId}
   //          onChange={(e) =>
   //             setStudent({ ...student, studentId: e.target.value })
   //          }
   //          required
   //       />
   //       <input
   //          type="date"
   //          placeholder="Ngày sinh"
   //          value={student.birthDate}
   //          onChange={(e) =>
   //             setStudent({ ...student, birthDate: e.target.value })
   //          }
   //          required
   //       />
   //       <input
   //          type="text"
   //          placeholder="Lớp học"
   //          value={student.class}
   //          onChange={(e) => setStudent({ ...student, class: e.target.value })}
   //          required
   //       />
   //       <input
   //          type="email"
   //          placeholder="Email"
   //          value={student.email}
   //          onChange={(e) => setStudent({ ...student, email: e.target.value })}
   //          required
   //       />
   //       <button type="submit">{editingStudent ? "Sửa" : "Thêm"}</button>
   //    </form>
   // );
};

export default StudentForm;

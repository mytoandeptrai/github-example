import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

const StudentPage = () => {
   return (
      <div className="App">
         <h1>Quản Lý Sinh Viên</h1>
         <StudentForm />
         <StudentList />
      </div>
   );
};

export default StudentPage;

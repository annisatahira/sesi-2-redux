import { useSelector } from "react-redux";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const studentData = useSelector((state) => state.student.students);

  return (
    <div>
      <h1>Student List</h1>
      <h2>Jumlah siswa {studentData.length}</h2>
      {studentData.map((item) => {
        return (
          <StudentItem key={item.id} nama={item.nama} jurusan={item.jurusan} />
        );
      })}
    </div>
  );
};

export default StudentList;

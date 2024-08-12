import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SubHeading from "../components/SubHeading";
import TeacherTable from "../feature/TeacherTable";
import StudentTable from "../feature/StudentTable";
import ClassroomTable from "../feature/ClassroomTable";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const PrincipalDash = () => {
  const baseUri = 'http://localhost:3500/api/v1/'
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [newClassroom, setNewClassroom] = useState('');
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchTeachers();
    fetchStudents();
    fetchClassrooms();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(baseUri + 'user?role=Teacher');
      setTeachers(response.data.users);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(baseUri + 'user?role=Student');
      setStudents(response.data.users);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchClassrooms = async () => {
    try {
      const response = await axios.get(baseUri + 'classroom');
      setClassrooms(response.data.classrooms);
    } catch (error) {
      console.error('Error fetching classrooms:', error);
    }
  };

  const handleClick = () => {
    console.log("hello world")
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <SubHeading label={'Principal Dashboard'}/>
        <Button label={'Create User'} onClick={()=>{
            navigate('/dash/createuser');
        }} />
      </div>
      {/* Studentlist */}
      <div className="flex flex-row justify-normal space-x-2">
        <div>
          <TeacherTable teachers={teachers} onClick={handleClick} />
        </div>
        <div>
          <StudentTable students={students} onClick={handleClick} />
        </div>
        <div>
          <ClassroomTable classrooms={classrooms} onClick={handleClick} />
        </div>
        
      </div>
    </div>
  );
}

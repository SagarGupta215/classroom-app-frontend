import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SubHeading from "../components/SubHeading";
import StudentTable from "../feature/StudentTable";
import ClassroomTable from "../feature/ClassroomTable";
import { useNavigate } from "react-router-dom";

export const StudentDash = () => {
  const baseUri = 'http://localhost:3500/api/v1/'
  const [students, setStudents] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [newClassroom, setNewClassroom] = useState('');
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchStudents();
    fetchClassrooms();
  }, []);
 

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
        <SubHeading label={'Teacher Dashboard'}/>
      </div>
      {/* Studentlist */}
      <div className="flex flex-row justify-normal space-x-2">
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

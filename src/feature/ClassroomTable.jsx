import SubHeading from "../components/SubHeading";
import TableList from "./TableList";

const ClassroomTable = ({ classrooms, onClick }) => {
  const headings = ['Classroom-Name', 'Teacher-assigned'];

  // Map teacher data into a format suitable for the TableList component
  const body = classrooms.map((classroom) => [
    classroom.name, 
    classroom.teacher ? classroom.teacher.name : 'Unassigned'
  ]);  


  return (
    <>
      <SubHeading label={'Classes'} />
      <TableList headings={headings} body={body} onClick={onClick} />
    </>
  )};

export default ClassroomTable;
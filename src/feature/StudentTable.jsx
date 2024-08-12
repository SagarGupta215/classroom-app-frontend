import SubHeading from "../components/SubHeading";
import TableList from "./TableList";
const StudentTable = ({ students, onClick }) => {
  const headings = ['Students-Name', 'Username'];

  // Map teacher data into a format suitable for the TableList component
  const body = students.map((student) => [student.name, student.username]);

  return (
    <>
      <SubHeading label={'Students'} />
      <TableList headings={headings} body={body} onClick={onClick} />
    </>
  )
  
};

export default StudentTable;
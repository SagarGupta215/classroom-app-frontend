import SubHeading from "../components/SubHeading";
import TableList from "./TableList";

const TeacherTable = ({ teachers, onClick }) => {
  const headings = ['Teacher-Name', 'Username'];

  // Map teacher data into a format suitable for the TableList component
  const body = teachers.map((teacher) => [teacher.name, teacher.username]);
  

  return (
    <>
      <SubHeading label={'Teachers'} />
      <TableList headings={headings} body={body} onClick={onClick} />
    </>
  )};

export default TeacherTable;
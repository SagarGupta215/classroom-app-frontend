const TableList = ({ body, headings,onClick}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headings.map((head, headID) => (
              <th key={headID}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) => (
            <TableRow rowContent={rowContent} key={rowID} onClick={onClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowContent, onClick }) => {
    return (
      
      <tr>
        {rowContent.map((val, cellID) => (
          <td key={cellID} className="py-2 px-4 border-b">
            {val}
          </td>
        ))}
        <td className="py-2 px-4 border-b">
          <button
            onClick={onClick}
            className="bg-slate-600 text-white px-3 py-1 rounded mr-2 text-sm"
          >
            View-Edit-Delete
          </button>
        </td>
      </tr>
    );
  };
  

export default TableList;

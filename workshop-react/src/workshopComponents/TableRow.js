import DataTable from "./DataTable";
import TabelAction from "./TableAction";

const TableRow = (props) => {
  const content = props.users.map((user) => {
    return (
      <tr key={Math.random}>
        <td>{user.id}</td>
        <td>{user.Name}</td>
        <td>{user.Age}</td>
        <td>
          <TabelAction />
        </td>
      </tr>
    );
  });
  return <tbody>{content}</tbody>;
};

export default TableRow;

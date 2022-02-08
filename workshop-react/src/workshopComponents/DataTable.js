import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";

const DataTable = () => {
  const userData = [
    {
      id: 1,
      Name: "Haris",
      Age: "31",
    },
    {
      id: 2,
      Name: "Haris",
      Age: "2",
    },
    {
      id: 3,
      Name: "Haris",
      Age: "25",
    },
    {
      id: 4,
      Name: "Haris",
      Age: "25",
    },
    {
      id: 5,
      Name: "Haris",
      Age: "25",
    },
  ];

  const [urserList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(userData);
  }, []);

  return (
    <div>
      <table className="table">
        <TableHeader headers={["id", "Name", "Age", "Action"]} />
        <TableRow users={urserList} />
      </table>
    </div>
  );
};
export default DataTable;

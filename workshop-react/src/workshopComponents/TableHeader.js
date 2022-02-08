import TableHeader from "./TableHeader";
const tableHeader = (props) => {
  return (
    <div>
      <thead>
        <tr>
          {props.headers.map((header) => (
            <td>{header}</td>
          ))}
        </tr>
      </thead>
    </div>
  );
};
export default tableHeader;

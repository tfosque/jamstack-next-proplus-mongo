import { Pagination } from "react-bootstrap";

const PaginationBar = (props) => {
  return (
    <div>
      <Pagination size="sm">{props.items}</Pagination>
    </div>
  );
};
export default PaginationBar;

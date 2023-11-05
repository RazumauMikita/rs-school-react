import { FC } from "react";
import { PaginationProps } from "./Pagination.type";
const Pagination: FC<PaginationProps> = (props) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  return (
    <div>
      <button type="button" onClick={onPrevPageClick} disabled={disable.left}>
        prev
      </button>
      {nav && (
        <span>
          {nav.current} / {nav.total}
        </span>
      )}
      <button type="button" onClick={onNextPageClick} disabled={disable.right}>
        next
      </button>
    </div>
  );
};

export default Pagination;

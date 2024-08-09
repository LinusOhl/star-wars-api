import React from "react";
import Button from "react-bootstrap/Button";

interface IPaginationProps {
  page: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  page,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="prev">
        <Button
          variant="primary"
          disabled={!hasPreviousPage}
          onClick={onPreviousPage}
        >
          Previous page
        </Button>
      </div>

      <div className="page">
        {page} / {totalPages}
      </div>

      <div className="next">
        <Button variant="primary" disabled={!hasNextPage} onClick={onNextPage}>
          Next page
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

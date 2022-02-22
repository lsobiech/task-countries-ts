import React from "react";
import Pagination from "@mui/material/Pagination";

interface PaginationProps {
  currentPage: number;
  totalCountries: number;
  paginate: any;
}

function Paginationx({
  currentPage,
  totalCountries,
  paginate,
}: PaginationProps): any {
  return (
    <Pagination
      count={totalCountries}
      page={currentPage}
      onChange={(e, value): any => {
        if (e && value) {
          paginate(value);
        }
      }}
    />
  );
}

export default Paginationx;

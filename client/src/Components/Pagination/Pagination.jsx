import React from "react";
import { Button } from "../../StyledComponents/Button";

// recibe props del componente Home
const Pagination = ({ num, setCurrentPage }) => {

  return (
    <Button
      bground="azure"
      color="chocolate"
      margin="5px"
      padding="5px 15px"
      fSize=".8em"
      onClick={() => setCurrentPage(num)}
    >
      {num}
    </Button>
  );
};

export default Pagination;

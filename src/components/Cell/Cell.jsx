import React, { Children } from "react";
import TableCell, { tableCellClasses } from "@material-ui/core/TableCell";
import { styled } from "@material-ui/core/styles";
import "./Cell.module.css";

const Cell = ({ align = "center", editable = false, children }) => {
  const [selected, setselected] = React.useState(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: selected ? "#abcdef" : theme.palette.common.black,
      color: theme.palette.common.white,
      width: "12.5%",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const onClick = () => {
    if (editable) {
      setselected(!selected);
    }
  };

  return (
    <>
      {!selected ? (
        <StyledTableCell onClick={onClick} align={align}>
          {children}
        </StyledTableCell>
      ) : (
        <StyledTableCell
          onClick={onClick}
          align={align}
          style={{ backgroundColor: "#abcdef" }}
        >
          {children}
        </StyledTableCell>
       
      )}
    </>
  );
};

export default Cell;

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import * as React from "react"
import { styled } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"

import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import Cell from './components/Cell/Cell.jsx'
import { TableRow } from "@material-ui/core"

function App() {
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const createHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      let hour = i < 10 ? `0${i}` : i
      hour += ":00 - "
      hour += i + 1 < 10 ? `0${i + 1}` : i + 1
      hour += ":00"
      hours.push(hour);
    }
    return hours;
  };

  const hoursTable = createHours();

  return (
    <div>
      <TableContainer>
        <Table sx={{ maxWidth: 1400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <Cell align="center"> Horario </Cell>
              <Cell align="center">Lunes</Cell>
              <Cell align="center">Martes</Cell>
              <Cell align="center">Mi&eacute;rcoles</Cell>
              <Cell align="center">Jueves</Cell>
              <Cell align="center">Viernes</Cell>
              <Cell align="center">S&aacute;bado</Cell>
              <Cell align="center">Domingo</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hoursTable.map((hour,index) => (
              <StyledTableRow key={index}>
                <Cell align="center">{hour}</Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
                <Cell align="center" editable={true}><input type="text" /></Cell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

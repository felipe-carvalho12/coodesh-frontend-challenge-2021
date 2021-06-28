import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name" },
  { id: "gender", label: "Gender" },
  { id: "birth", label: "Birth" },
  { id: "actions", label: "Actions" },
];

export default function PatientsTable({ renderedPatients }) {
  const renderTimestamp = (timestamp) => {
    const ts = new Date(timestamp);
    const day = ts.getDate() >= 10 ? ts.getDate() : `0${ts.getDate()}`;
    const month =
      ts.getMonth() + 1 >= 10 ? ts.getMonth() + 1 : `0${ts.getMonth() + 1}`;
    return `${day}/${month}/${ts.getFullYear()}`;
  };

  return (
    <Paper className="shadow-lg">
      <TableContainer className="max-h-96">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
                  <h5>{column.label}</h5>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {renderedPatients.map((patient) => {
              const row = {
                name: `${patient.name.first} ${patient.name.last}`,
                gender: patient.gender,
                birth: renderTimestamp(patient.dob.date),
                actions: <button className="btn-primary">View</button>,
              };
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align="left">
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

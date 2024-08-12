import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
`;

const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const Table = ({ data }) => {
  const handleSend = (row) => {
    console.log('Sending email to:', row.name);
  };

  return (
    <TableContainer>
      <TableElement>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Button onClick={() => handleSend(row)}>Send</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableElement>
    </TableContainer>
  );
};

export default Table;

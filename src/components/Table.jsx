import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableWebApp extends React.Component {
  render(){
    return(
      <Table
        selectable={false}
        fixedHeader={true}
        tableHeader={this.props.tableHeader}
        tableValues={this.props.tableValues}
        >
        <TableHeader>
          <TableRow>
            {this.props.tableHeader.map((row) => (
              <TableHeaderColumn key={row.toString()}>{row}</TableHeaderColumn>
            ))}
          </TableRow>

        </TableHeader>
        <TableBody
          displayRowCheckbox={true}
          showRowHover={true}
          stripedRows={false}>
          {this.props.tableValues.map((row) => (
            <TableRow key={index}>  
               <TableRowColumn>{row}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableWebApp;

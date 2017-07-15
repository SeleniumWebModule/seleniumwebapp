import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableSystem extends React.Component {
  render() {

    const tableSystem = (

      <Table
      selectable={false}
      fixedHeader={true}
      headersColumn={this.props.headersColumn}
      tableValues={this.props.tableValues}
      >
        <TableHeader>
          <TableRow>
            {this.props.headersColumn.map((row) => (
              <TableHeaderColumn key={row.toString()}>{row}</TableHeaderColumn>
            ))}
          </TableRow>

        </TableHeader>
        <TableBody
          displayRowCheckbox={true}
          showRowHover={true}
          stripedRows={false}>
           {this.props.tableValues.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.address}</TableRowColumn>
                <TableRowColumn>{row.port}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
      </Table> 
    )

    return(
      tableSystem
    );
  }
}

import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableAttribute extends React.Component {
  render() {

    const tableAttribute = (

      <Table
      selectable={false}
      fixedHeader={true}
      headersColumn={this.props.headersColumn}
      tableHeader="Events"
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
                <TableRowColumn>{row.attrType}</TableRowColumn>
                <TableRowColumn>{row.attrValue}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
      </Table> 
    )

    return(
      tableAttribute
    );
  }
}

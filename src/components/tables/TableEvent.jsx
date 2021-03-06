import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Panel} from 'react-bootstrap';
import '../../css/Tables.css'; 
 
export default class TableEvent extends React.Component {
  render() {

    const tableEvent = (
      <div>
        <Panel header="Tabela de Eventos" className='pnltbl'>
          <Table
            headersColumn={this.props.headersColumn}
            tableValues={this.props.tableValues}
            fixedHeader={true}
            stripedRows={true}
            showRowHover={true}
            selectable={true}
            deselectOnClickaway={false}
            showCheckboxes={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={false}
            >
              <TableRow>
                {this.props.headersColumn.map((row) => (
                  <TableHeaderColumn key={row.toString()}>{row}</TableHeaderColumn>
                ))}
              </TableRow>

            </TableHeader>
            <TableBody
               displayRowCheckbox={false}
               showCheckbox={false}
               showRowHover={true}
               stripedRows={false}>
               {this.props.tableValues.map((row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.description}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
          </Table> 
        </Panel>
      </div>
    )

    return(
      tableEvent
    );
  }
}
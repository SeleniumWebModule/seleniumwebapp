import React from 'react';
import {Panel} from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import '../../css/Tables.css'; 

export default class TableValuesAssociated extends React.Component {
  render() {

    const table = (
      <div>
        <Panel header="Tabela de Regras" className='pnltbl'>
          <Table
            headersColumn={this.props.headersColumn}
            header={this.props.header}
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
              showRowHover={true}
              stripedRows={false}>
               {this.props.tableValues.map((row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
          </Table> 
        </Panel>
      </div>
    )

    return(
      table
    );
  }
}

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
  constructor(props) {
    super(props);
    this.state = {
      tableHeader: [],
      tableValues: []
    }
  }

  componentWillMount() {
    this.setState({
      tableHeader: this.props.tableHeader,
      tableValues: this.props.tableValues
    });
  }

  render(){
    console.log(this.state.tableValues);

    return(
      <Table
        selectable={false}
        fixedHeader={true}
        >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Evento</TableHeaderColumn>
            <TableHeaderColumn>Regra</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover={false}
          stripedRows={false}
        >
          {this.state.tableValues.map( (row, index) => (
            <TableRow key={index}>
              console.log('row', row);
              console.log('index',index);
              <TableRowColumn>{row.eventName}</TableRowColumn>
              <TableRowColumn>{row.ruleName}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableWebApp;

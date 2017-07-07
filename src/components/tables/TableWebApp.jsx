import React from 'react';
import Subheader from 'material-ui/Subheader';
import TableSystem from './system';
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
    console.log('from TableWebApp', this.props);

    const table = (
      <div style={this.props.table === 'system' ? {display: ''} : {display: 'none'}}>
        <Subheader>Sistemas</Subheader>
        <TableSystem tableHeader={this.props.tableHeader} tableValues={this.props.tableValues}/>
      </div>
    )

    return(
      table
    );
  }
}

export default TableWebApp;

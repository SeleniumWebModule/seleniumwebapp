import React from 'react';
import Subheader from 'material-ui/Subheader';
import TableSystem from './TableSystem';

class TableWebApp extends React.Component {
  render(){
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

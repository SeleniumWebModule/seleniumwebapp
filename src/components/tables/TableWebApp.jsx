import React from 'react';
import Subheader from 'material-ui/Subheader';

class TableWebApp extends React.Component {
  render(){
    const tableModel = (
      <div>
        <Subheader>{this.props.tableHeader}</Subheader>
        {this.props.table}
      </div>
    )

    return(
      tableModel
    );
  }
}

export default TableWebApp;

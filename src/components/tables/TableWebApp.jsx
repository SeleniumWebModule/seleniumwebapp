import React from 'react';

class TableWebApp extends React.Component {
  render(){
    const tableModel = (
      <div>
        {this.props.table}
      </div>
    )

    return(
      tableModel
    );
  }
}

export default TableWebApp;

import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class ReportRequests extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/report/requests' ? 'hidden' : ''}>
        Report de Solicitações
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (ReportRequests)

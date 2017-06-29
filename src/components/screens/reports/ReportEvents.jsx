import React from 'react';
import '../../../css/Screens.css';
import { connect } from 'react-redux';

class ReportEvents extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/report/events' ? 'hidden' : ''}>
        Report de Eventos
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (ReportEvents)

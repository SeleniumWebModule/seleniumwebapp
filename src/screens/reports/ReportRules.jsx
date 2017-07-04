import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class ReportRules extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/report/rules' ? 'hidden' : ''}>
        Report de regras
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (ReportRules)

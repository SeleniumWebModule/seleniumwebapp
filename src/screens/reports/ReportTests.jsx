import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class ReportTests extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/report/tests' ? 'hidden' : ''}>
        Report de Testes
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (ReportTests)

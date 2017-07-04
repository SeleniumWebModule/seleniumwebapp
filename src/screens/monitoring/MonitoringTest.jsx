import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class MonitoringTest extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/monitoring/test' ? 'hidden' : ''}>
        Tela para Acompanhamento de Testes
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (MonitoringTest)

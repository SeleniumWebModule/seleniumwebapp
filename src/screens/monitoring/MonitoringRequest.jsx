import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class MonitoringRequest extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/monitoring/request' ? 'hidden' : ''}>
        Tela para Acompanhamento de Solicitações
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (MonitoringRequest)

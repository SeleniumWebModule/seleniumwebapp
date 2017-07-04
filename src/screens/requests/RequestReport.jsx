import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RequestReport extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/request/report' ? 'hidden' : ''}>
        Tela de Solicitação de Relatório
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RequestReport);

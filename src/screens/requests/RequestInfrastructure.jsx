import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RequestInfrastructure extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath !== '/request/infrastructure' ? 'hidden' : ''}>
        Tela para Solicitação de Infraestrutura, Servidores, Bancos
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RequestInfrastructure);

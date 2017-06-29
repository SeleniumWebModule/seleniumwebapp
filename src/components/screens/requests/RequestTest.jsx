import React from 'react';
import '../../../css/Screens.css';
import { connect } from 'react-redux';

class RequestTest extends React.Component {
  render() {
    const {paths} = this.props;

    return (
      <div className={paths.currentPath !== '/request/test' ? 'hidden' : ''}>
        Tela de Solicitação de testes
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RequestTest);

import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class Test extends React.Component {
  render() {
    const {paths} = this.props;

    return (
      <div className={paths.currentPath !== '/test' ? 'hidden' : ''}>
        Tela de Solicitação e Acompanhamento de testes
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (Test);

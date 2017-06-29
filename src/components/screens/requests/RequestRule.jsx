import React from 'react';
import '../../../css/Screens.css';
import { connect } from 'react-redux';

class RequestRule extends React.Component {
  render() {
    const {paths} = this.props;

    return (
      <div className={paths.currentPath !== '/request/rule' ? 'hidden' : ''}>
        Tela de Solicitação de regras
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RequestRule);

import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class Rule extends React.Component {
  render() {
    const {paths} = this.props;

    return (
      <div className={paths.currentPath !== '/rule' ? 'hidden' : ''}>
        Tela de Solicitação e Acompanhamento de regras
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (Rule);

import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class Component extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/component' ? 'hidden' : ''}>
        Cadastro de Componente
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (Component)

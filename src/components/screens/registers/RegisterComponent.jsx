import React from 'react';
import '../../../css/Screens.css';
import { connect } from 'react-redux';

class RegisterComponent extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/register/component' ? 'hidden' : ''}>
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

export default connect(currentPath, null) (RegisterComponent)

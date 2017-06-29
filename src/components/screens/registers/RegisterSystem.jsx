import React from 'react';
import '../../../css/Screens.css';
import { connect } from 'react-redux';

class RegisterSystem extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath !== '/register/system' ? 'hidden' : ''}>
        Tela de Cadastro de sistema
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RegisterSystem)

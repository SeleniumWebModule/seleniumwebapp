import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RegisterUser extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/register/user' ? 'hidden' : ''}>
        Tela de cadastro de Usuário
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RegisterUser);

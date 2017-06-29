import React from 'react';
import '../../../css/Screens.css';
import { connect } from 'react-redux';

class RegisterView extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/register/screen' ? 'hidden' : ''}>
        Cadastro de tela
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RegisterView)

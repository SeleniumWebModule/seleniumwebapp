import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class User extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/usuario' ? 'hidden' : ''}>
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

export default connect(currentPath, null) (User);

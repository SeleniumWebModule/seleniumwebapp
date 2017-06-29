import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class System extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath !== '/system' ? 'hidden' : ''}>
        Tela de Cadastro
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (System)

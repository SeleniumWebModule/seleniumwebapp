import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class View extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/view' ? 'hidden' : ''}>
        Tela de Cadastro da View
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (View)

import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class Report extends React.Component {
  render() {
    const {paths} = this.props;

    return(
      <div className={paths.currentPath !== '/report' ? 'hidden' : ''}>
        Tela de Filtro de Relatório
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (Report);

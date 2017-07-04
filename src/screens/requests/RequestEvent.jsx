import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RequestEvent extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath !== '/request/event' ? 'hidden' : ''}>
        Tela de Solicitação de eventos
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (RequestEvent);

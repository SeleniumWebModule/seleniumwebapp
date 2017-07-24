import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class RequestEvent extends React.Component {
  render() {
    const {states} = this.props;
    
     const view = (
        <div />
      )

    return (
      states.currentPath === '/request/event' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}


export default connect(currentPath, null) (RequestEvent);

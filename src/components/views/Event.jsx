import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class Event extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath !== '/event' ? 'hidden' : ''}>
        Página Home
      </div>
    );
  }
}

function currentPath(state) {
  return {
    paths: state
  }
}

export default connect(currentPath, null) (Event);

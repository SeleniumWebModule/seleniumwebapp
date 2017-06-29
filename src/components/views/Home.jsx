import React from 'react';
import '../../css/View.css';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { paths } = this.props;

    return(
      <div className={paths.currentPath!=='/' ? 'hidden' : ''}>
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

export default connect(currentPath, null) (Home);

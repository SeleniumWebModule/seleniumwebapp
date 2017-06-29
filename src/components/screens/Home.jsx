import React from 'react';
import '../../css/Screens.css';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { paths } = this.props;

    console.log(paths.currentPath);

    return(
      <div className={(paths.currentPath === undefined || paths.currentPath === '/home')
        ?  '' : 'hidden'}>
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

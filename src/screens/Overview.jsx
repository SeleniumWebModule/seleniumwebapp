import React, {Component} from 'react';
import Toolbar from './Toolbar';
import Screens from './Screens';
import '../css/Overview.css';

class Overview extends Component {

  render() {
    return (
      <div className="Overview">

          <Toolbar />
          <Screens />
      </div>
    );
  }
}

export default Overview

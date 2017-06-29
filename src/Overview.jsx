import React, {Component} from 'react';
import Toolbar from './components/Toolbar';
import Screens from './components/Screens';
import './Overview.css';

class Overview extends Component {

  render() {
    return (
      <div className="Overview">
        <div className="Overview-title">Selenium Web App - RJ Consultores</div>
          <Toolbar />
          <Screens />
      </div>
    );
  }
}

export default Overview

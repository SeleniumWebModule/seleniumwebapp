import React, {Component} from 'react';
import Toolbar from './components/Toolbar';
import Views from './components/Views';
import './Overview.css';

class Overview extends Component {

  render() {
    return (
      <div className="Overview">
        <div className="Overview-title">Selenium Web App - RJ Consultores</div>
          <Toolbar />
          <Views />
      </div>
    );
  }
}

export default Overview

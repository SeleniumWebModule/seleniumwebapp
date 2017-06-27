import React, {Component} from 'react';
import Menus from './components/Menus'
import Views from './components/Views'
import './Overview.css';

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <div className="Overview-title">Selenium Web App - RJ Consultores</div>
          <Menus />
          <Views />
      </div>
    )
  }
}

export default Overview

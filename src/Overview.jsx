import React, {Component} from 'react';
import Menu from './components/Menu'
import './Overview.css';

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <div className="Overview-title">Selenium Web App - RJ Consultores</div>
          <Menu />
      </div>
    )
  }
}

export default Overview

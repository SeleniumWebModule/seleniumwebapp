import React from 'react';
import Home from './views/Home'
import SystemAdd from './views/SystemAdd'
import ViewAdd from './views/ViewAdd'
import ComponentAdd from './views/ComponentAdd'

class Views extends React.Component {
  render() {
    return (
        <div>
          <Home />
          <SystemAdd />
          <ViewAdd />
          <ComponentAdd />
        </div>
    );
  }
}

export default Views

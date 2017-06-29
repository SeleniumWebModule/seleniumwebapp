import React from 'react';
import Home from './views/Home';
import System from './views/System';
import View from './views/View';
import Component from './views/Component';

class Views extends React.Component {
  render() {
    return (
        <div>
          <Home />
          <System />
          <View />
          <Component />
        </div>
    );
  }
}

export default Views

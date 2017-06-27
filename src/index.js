import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Overview from './Overview'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Overview />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App   />,
  document.getElementById('root')
);

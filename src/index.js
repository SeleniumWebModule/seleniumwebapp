import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Overview from './Overview'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

injectTapEventPlugin();

const store = createStore(reducer);

const Root = () => (
    <MuiThemeProvider>
      <Provider store={store}>
        <Overview />
      </Provider>
    </MuiThemeProvider>

);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

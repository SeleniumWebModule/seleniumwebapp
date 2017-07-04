import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {fullBlack, cyan500, cyan700,
  pinkA200, grey100, grey300, grey500,
  white, darkBlack} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Overview from './screens/Overview'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

injectTapEventPlugin();

const store = createStore(reducer);

const muiTheme = getMuiTheme({
  palette: {
   primary1Color: fade(darkBlack, 0.8),
   primary2Color: cyan700,
   primary3Color: cyan700,
   accent1Color: pinkA200,
   accent2Color: grey100,
   accent3Color: grey500,
   textColor: darkBlack,
   alternateTextColor: white,
   canvasColor: white,
   borderColor: grey300,
   disabledColor: fade(darkBlack, 0.3),
   pickerHeaderColor: cyan500,
   clockCircleColor: cyan500,
   shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});

const Root = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <Overview />
      </Provider>
    </MuiThemeProvider>

);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

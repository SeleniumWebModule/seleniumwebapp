import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';

import { bake_cookie, read_cookie } from 'sfcookies';

const selectedPath = (action) => {
  return {
    currentPath: action.currentPath
  }
}

const registerScreen = (action) => {
  return {
    newScreen: action.newScreen
  }
}

const registerSystem = (action) => {
  return {
    newSystem: action.newSystem
  }
}

let stateReducer = {
  currentPath: '',
  screens: [],
  systems: [],
  events: [],
  attributes: []
}

const states = (state=[], action) => {
  stateReducer = read_cookie('stateReducer')
  
  switch(action.type) {
    case SELECTED_PATH:

        stateReducer = {
          currentPath: selectedPath(action).currentPath,
          screens: stateReducer.screens === undefined ? [] : stateReducer.screens,
          systems: stateReducer.systems === undefined ? [] : stateReducer.systems,
          events: stateReducer.events === undefined ? [] : stateReducer.events,
          attributes: stateReducer.attributes === undefined ? [] : stateReducer.attributes
        }

        bake_cookie('stateReducer', stateReducer);
      return stateReducer;
    case REGISTER_SCREEN:
      stateReducer.screens.push(registerScreen(action).newScreen);
      bake_cookie('stateReducer', stateReducer);
      return stateReducer;
    case REGISTER_SYSTEM:
      stateReducer.systems.push(registerSystem(action).newSystem);
      bake_cookie('stateReducer', stateReducer);
      return stateReducer;
    default:
      return states;
  }
}

export default states;

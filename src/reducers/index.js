import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';

let systems = [];
let screens = [];

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
  updateScreen: false
}

const states = (state=[], action) => {
  let currentScreen = '';

  switch(action.type) {
    case SELECTED_PATH:
      stateReducer.currentPath = selectedPath(action).currentPath;
      stateReducer.updateScreen = false;
      return stateReducer;
    case REGISTER_SCREEN:
      currentScreen = stateReducer.currentPath;
      screens.push(registerScreen(action));
      
      stateReducer = {
        currentPath: currentScreen,
        updateScreen: true
      }

      return stateReducer;
    case REGISTER_SYSTEM:
      currentScreen = stateReducer.currentPath;
      systems.push(registerSystem(action));

      stateReducer = {
        currentPath: currentScreen,
        updateScreen: true
      }

      return stateReducer;
    default:
      return states;
  }
}

export default states;

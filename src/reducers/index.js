import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';

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
  systems: []
}

const states = (state=[], action) => {
  let currentScreen = '';
  let screens = [];
  let systems = [];

  switch(action.type) {
    case SELECTED_PATH:

       stateReducer = {
          currentPath: selectedPath(action).currentPath,
          screens:screens,
          systems:systems
        }

      return stateReducer;
    case REGISTER_SCREEN:

      currentScreen = stateReducer.currentPath;
      systems = stateReducer.systems;
      screens = stateReducer.screens;
      screens.push(registerScreen(action).newScreen);
      
      stateReducer = {
        currentPath: currentScreen,
        systems: systems,
        screens: screens
      }

      return stateReducer;
    case REGISTER_SYSTEM:
      currentScreen = stateReducer.currentPath;
      systems = stateReducer.systems;
      systems.push(registerSystem(action).newSystem);

      stateReducer = {
        currentPath: currentScreen,
        systems,
        screens
      }

      return stateReducer;
    default:
      return states;
  }
}

export default states;

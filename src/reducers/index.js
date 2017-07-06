import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';

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

let stateReducer = {
  currentPath: '',
  newScreen: ''
}

const states = (state=[], action) => {
  switch(action.type) {
    case SELECTED_PATH:
      stateReducer.currentPath = selectedPath(action).currentPath;
      return stateReducer;
    case REGISTER_SCREEN:
      const currentScreen = stateReducer.currentPath;

      stateReducer = {
        currentPath: currentScreen,
        newScreen: [...state,registerScreen(action).newScreen]
      }

      console.log(stateReducer);

      return stateReducer;
    default:
      return states;
  }
}

export default states;

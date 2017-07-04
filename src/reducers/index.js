import { SELECTED_PATH } from '../constants';
import { SELECTED_VALUE } from '../constants';

const selectedPath = (action) => {
  return {
    currentPath: action.currentPath
  }
}

const selectedValue = (action) => {
  return {
    currentValue: action.currentValue
  }
}

let stateReducer = {
  currentPath: '',
  currentValue: ''
}

const states = (state={}, action) => {
  switch(action.type) {
    case SELECTED_PATH:
      stateReducer.currentPath = selectedPath(action).currentPath;
      return stateReducer;
    case SELECTED_VALUE:
      const currentScreen = stateReducer.currentPath;

      stateReducer = {
        currentPath: currentScreen,
        currentValue: selectedValue(action).currentValue
      }
      return stateReducer;
    default:
      return states;
  }
}

export default states;

import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';

export const selectedPath = (currentPath) => {
  const action = {
    type: SELECTED_PATH,
    currentPath
  }

  return action;
}

export const registerSystem = (newSystem) => {
  const action ={
    type: REGISTER_SYSTEM,
    newSystem
  }

  return action;
}

export const registerScreen = (newScreen) => {
  const action = {
    type: REGISTER_SCREEN,
    newScreen
  }

  return action;
}

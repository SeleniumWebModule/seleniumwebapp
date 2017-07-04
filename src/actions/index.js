import { SELECTED_PATH } from '../constants';
import { SELECTED_VALUE } from '../constants';

export const selectedPath = (currentPath) => {
  const action = {
    type: SELECTED_PATH,
    currentPath
  }

  return action;
}

export const selectedValue = (currentValue) => {
  const action = {
    type: SELECTED_VALUE,
    currentValue
  }

  return action;
}

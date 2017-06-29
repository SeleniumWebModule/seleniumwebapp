import { SELECTED_PATH } from '../constants';

export const selectedPath = (currentPath) => {
  const action = {
    type: SELECTED_PATH,
    currentPath
  }

  return action;
}

import { SELECTED_PATH } from '../constants';

const selectedPath = (action) => {
  return {
    currentPath: action.currentPath
  }
}

const paths = (state=[], action) => {
  let paths = null;
  switch(action.type) {
    case SELECTED_PATH:
      paths = selectedPath(action);
      return paths;
    default:
      return state;
  }
}

export default paths

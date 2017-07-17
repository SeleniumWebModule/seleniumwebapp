import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';
import { REGISTER_EVENT } from '../constants';
import { REGISTER_RULE } from '../constants';
import { REGISTER_ATTRIBUTE } from '../constants';
import { REGISTER_COMPONENT } from '../constants';

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

export const registerEvent = (newEvent) => {
  const action = {
    type: REGISTER_EVENT,
    newEvent
  }

  return action;
}

export const registerRule = (newRule) => {
  const action = {
    type: REGISTER_RULE,
    newRule
  }

  return action;
}

export const registerAttribute = (newAttribute) => {
  const action = {
    type: REGISTER_ATTRIBUTE,
    newAttribute
  }

  return action;
}

export const registerComponent = (newComponent) => {
  const action = {
    type: REGISTER_COMPONENT,
    newComponent
  }

  return action;
}
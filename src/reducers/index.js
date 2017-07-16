import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';
import { REGISTER_EVENT } from '../constants';
import { REGISTER_RULE } from '../constants';
import { REGISTER_ATTRIBUTE} from '../constants';

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

const registerEvent = (action) => {
  return {
    newEvent: action.newEvent
  }
}

const registerRule = (action) => {
  return {
    newRule: action.newRule
  }
}

const registerAttribute = (action) => {
  return {
    newAttribute: action.newAttribute
  }
}

let stateReducer = {
  currentPath: '',
  screens: [],
  systems: [],
  events: [],
  rules: [],
  eventRules: [],
  eventAttributes: [],
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
          rules: stateReducer.rules === undefined ? [] : stateReducer.rules,
          eventRules: stateReducer.eventRules === undefined ? [] : stateReducer.eventRules,
          eventAttributes: stateReducer.eventAttributes === undefined ? [] : stateReducer.eventAttributes,
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
    case REGISTER_EVENT:
      stateReducer.events.push(registerEvent(action).newEvent);
      bake_cookie('stateReducer', stateReducer);
      return stateReducer;
    case REGISTER_RULE:
      stateReducer.rules.push(registerRule(action).newRule);
      bake_cookie('stateReducer', stateReducer);
      return stateReducer;
    case REGISTER_ATTRIBUTE:
    stateReducer.attributes.push(registerAttribute(action).newAttribute);
    bake_cookie('stateReducer', stateReducer);
    return stateReducer;
    default:
      return states;
  }
}

export default states;

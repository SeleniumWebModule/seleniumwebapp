import { SELECTED_PATH } from '../constants';
import { REGISTER_SCREEN } from '../constants';
import { REGISTER_SYSTEM } from '../constants';
import { REGISTER_EVENT } from '../constants';
import { REGISTER_RULE } from '../constants';
import { REGISTER_ATTRIBUTE} from '../constants';
import { REGISTER_COMPONENT} from '../constants';

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

const registerComponent = (action) => {
  return {
    newComponent: action.newComponent
  }
}

const attributesInit = () => {
  return [
    {name: 'FindBy', value: 'CLASS_NAME', description: 'Informa que o componente ou a tela poderão ser encontradas pelo Selenium pelo atributo CLASS_NAME'},
    {name: 'FindBy', value: 'NAME', description: 'Informa que o componente ou a tela poderão ser encontrados pelo Selenium pelo atributo NAME'},
    {name: 'FindBy', value: 'TAG_NAME', description: 'Informa que o componente ou a tela poderão ser encontrados pelo Selenium pelo atributo TAG_NAME'},
    {name: 'FindBy', value: 'ID', description: 'Informa que o componente ou a tela poderão ser encontrados pelo Selenium pelo atributo ID'},
    {name: 'WaitFor', value: 'COMPONENT', description: 'Configura um componente ou tela a esperar por um componente.'},
    {name: 'WaitFor', value: 'SCREEN', description: 'Configura um componente ou tela a esperar por uma tela'},
    {name: 'SleepTimeUnit', value: 'SECONDS', description: 'Configura um componente ou tela a esperar por x segundos para uma nova tentativa'},
    {name: 'SleepTimeUnit', value: 'MINUTES', description: 'Configura um componente ou tela a esperar por x minutos para uma nova tentativa'},
    {name: 'SleepTimeValue', value: '30', description: 'Configura para que um componente ou tela aguarde por 30 segundos até uma nova tentativa, o atributo SleepTimeUnit deve estar associado com o valor SECONDS, que é comportamento padrão.'}
  ]
}

let stateReducer = {
  currentPath: '',
  screens: [],
  systems: [],
  events: [],
  rules: [],
  components: [],
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
          attributes: (stateReducer.attributes === undefined || stateReducer.attributes.lenght === 0)? 
            attributesInit : stateReducer.attributes,
          components: stateReducer.components === undefined ? [] : stateReducer.components
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
    case REGISTER_COMPONENT:
      stateReducer.components.push(registerComponent(action).newComponent);
      bake_cookie('stateReducer', stateReducer);
      return stateReducer;
    default:
      return states;
  }
}

export default states;

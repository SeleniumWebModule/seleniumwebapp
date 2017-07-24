import React from 'react';
import {Step, Stepper, StepLabel } from 'material-ui/Stepper';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import Header from '../../components/Header';
import {Panel, Collapse, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import TableWebApp from '../../components/tables/TableWebApp';
import TableValuesAssociated from '../../components/tables/TableValuesAssociated';
import RaisedButton from 'material-ui/RaisedButton';
import AlertInfo from '../../components/AlertInfo'; 
import AlertSuccess from '../../components/AlertSuccess'; 
import AutoCompleteWebApp from '../../components/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import '../../css/Screens.css';
import { connect } from 'react-redux';


class RequestTest extends React.Component {
 constructor() {
    super();
    this.state = ({
      currentSystem: '',
      currentScreen: '',
      currentComponent: '',
      currentEvent: '',
      loadDefaultRulesForCurrentEvent: false,
      currentRule: '',
      currentComponentAttribute: '',
      screenComponents: [],
      componentEvents: [],
      componentEventRules: [],
      componentAttributes: [],
      headersColumnComponentAttributes:["Nome"],
      msgintro: "Para começar um caso de teste é necessário informar um sistema e uma tela. " +
      "Outras informações são requeridas, o sistema irá orientar em cada passo.",
      msgintrocomponent: "Os componentes serão associados com a tela, associe um ou mais componentes, você deverá informar no mínimo " +
      "um. Os componentes dependem de outras associações. O sistema irá te acompanhar em cada etapa.",
      msgintrocomponentevent: "Os eventos são os responsáveis por dispararem ações em um componente ou tela, cada evento deve ter uma ou mais " +
      "regras associadas. clique em Próximo para continuar.",
      msgintrocomponenteventrule: "As regras são responsáveis pelo comportamento esperado pelo componente, elas que irão validar a funcionalidade " + 
      " disparada pelo evento. ",
      finished: false,
      stepIndex: 0,
      stepIndexComponent: 0,
      finishedComponent: false,
      stepIndexComponentEvent: 0,
      finishedComponentEvent: false,
      stepIndexComponentEventRule: 0,
      finishedComponentEventRule: false,
      initialize: false
    })
  }

  associateComponentEventRules(event) {
    let rules = this.state.componentEventRules;
    rules.push({name: event.target.value})

    this.setState({
      componentEventRules: rules,
      currentRule: ''
    });

    this.refs.ruleref.clearText();
  }

  associateComponentAttribute(event) {
    const attribute = {
      name: event.target.value
    }

    let attributes = this.state.componentAttributes;
    attributes.push(attribute);

    this.setState({
      componentAttributes: attributes
    })
  }

  save() {
    console.log('save');
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  handleNextComponent = () => {
    const {stepIndexComponent} = this.state;

    this.setState({
      stepIndexComponent: stepIndexComponent + 1,
      finishedComponent: stepIndexComponent >= 4,
    });
  };

  handleNextComponentEvent = () => {
    const {stepIndexComponentEvent} = this.state;

    this.setState({
      stepIndexComponentEvent: stepIndexComponentEvent + 1,
      finishedComponentEvent: stepIndexComponentEvent >= 3,
    });
  };

  handleNextComponentEventRule = () => {
    const {stepIndexComponentEventRule} = this.state;

    this.setState({
      stepIndexComponentEventRule: stepIndexComponentEventRule + 1,
      finishedComponentEventRule: stepIndexComponentEventRule >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handlePrevComponent = () => {
    const {stepIndexComponent} = this.state;

    if (stepIndexComponent > 0) {
      this.setState({stepIndexComponent: stepIndexComponent - 1});
    }
  };

  handlePrevComponentEvent = () => {
    const {stepIndexComponentEvent} = this.state;

    if (stepIndexComponentEvent > 0) {
      this.setState({stepIndexComponentEvent: stepIndexComponentEvent - 1});
    }
  };

  handlePrevComponentEventRule = () => {
    const {stepIndexComponentEventRule} = this.state;

    if (stepIndexComponentEventRule > 0) {
      this.setState({stepIndexComponentEventRule: stepIndexComponentEventRule - 1});
    }
  };

  handleFinishComponentEventRulesAssociation = () => {
    const system = this.state.currentSystem;
    const screen = this.state.currentScreen;
    const component = this.state.currentComponent;
    const events = this.state.currentEvent;
    const rules = this.state.componentEventRules;

    this.setState({
      stepIndexComponentEventRule: 0, 
      finishedComponentEventRule: false,
      system: {
        screen,
        component,
        events,
        rules
      },
      componentEventRules: [],
      stepIndexComponentEvent: 1
    });


  }

  initializeTestCase = () => {
    if (this.state.currentSystem === ''){
      this.refs.systemref.showmsgerror("Um sistema deve ser informado.");
      return;
    }

    if (this.state.currentScreen === ''){
      this.refs.screenref.showmsgerror("Uma tela deve ser informada.");
      return;
    }    

  const {initialize} = this.state;
    this.setState({
      initialize: true
    })
  }

  doAssociateComponentEventRules = () => {
    console.log('For associate the rules with the component')
  }

  render() {
    const {states} = this.props;
    const {
            finished, 
            stepIndex, 
            stepIndexComponent, 
            finishedComponent,
            stepIndexComponentEvent, 
            finishedComponentEvent,
            stepIndexComponentEventRule, 
            finishedComponentEventRule,
          } = this.state;
    const contentStyle = {margin: '10px 16px'}; 

    const infoSystemScreen = (
       <div>
          <AlertInfo messageBody={this.state.msgintro} ref="msgintroref"/>

          <div onBlur={(event) => {this.setState({currentSystem: event.target.value})}}>
            <AutoCompleteWebApp labelText='Nome do Sistema' hintText='Selecione um sistema' dataSource={states.systems} 
              fullWidth={true} ref="systemref"/>          
          </div>

          <div onBlur={(event) => {this.setState({currentScreen: event.target.value})}}>
            <AutoCompleteWebApp labelText='Nome da Tela' hintText='Selecione uma tela' dataSource={states.screens} 
              fullWidth={true} ref="screenref"/>       
          </div>

           <RaisedButton
              style={{float:'right', marginTop: '2%'}}
              label="Iniciar caso"
              icon={<ActionNoteAdd />}
              primary={true}
              onTouchTap={this.initializeTestCase}
            />
       </div>
    )

    const buttons = (
       <div style={{marginTop: 40, float: 'right'}}>
          <FlatButton
            label="Anterior"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Gerar Caso' : 'Próximo'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
    )

    const buttonsComponent = (
      <div style={{marginTop: 40, float: 'right'}}>
        <FlatButton
          label="Anterior"
          disabled={stepIndexComponent === 0}
          onTouchTap={this.handlePrevComponent}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={stepIndexComponent === 4 ? 'Associar Componente' : 'Próximo'}
          primary={true}
          onTouchTap={this.handleNextComponent}
        />
      </div>
    )

    const buttonsComponentEvent = (
      <div style={{marginTop: 40, float: 'right'}}>
        <FlatButton
          label="Anterior"
          disabled={stepIndexComponentEvent === 0}
          onTouchTap={this.handlePrevComponentEvent}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={stepIndexComponentEvent === 4 ? 'Associar Evento' : 'Próximo'}
          primary={true}
          onTouchTap={this.handleNextComponentEvent}
        />
      </div>
    )

    const buttonsComponentEventRule = (
      <div style={{marginTop: 40, float: 'right'}}>
        <FlatButton
          label="Anterior"
          disabled={stepIndexComponentEventRule === 0}
          onTouchTap={this.handlePrevComponentEventRule}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={stepIndexComponentEventRule === 2 ? 'Associar Regra' : 'Próximo'}
          primary={true}
          onTouchTap={this.handleNextComponentEventRule}
        />
      </div>
    )

    const componentEventRulesFinished = (
      <div>
        <AlertSuccess messageBody />

        <RaisedButton
          label="Concluir"
          primary={true}
          onTouchTap={this.handleFinishComponentEventRulesAssociation}
        />
      </div> 
    )

    const overviewComponent = (
      <div>
        <AlertInfo messageBody={this.state.msgintrocomponent} />
        {buttons}
      </div>
    )

    const overviewComponentEvent = (
      <div>
        <AlertInfo messageBody={this.state.msgintrocomponentevent} />
        {buttonsComponentEvent}
      </div>
    )

    const overviewComponentEventRule = (
      <div>
        <AlertInfo messageBody={this.state.msgintrocomponenteventrule} />
        {buttonsComponentEventRule}
      </div>
    )

    const populateComponent = (
       <div>
          <div onBlur={(event) => {this.setState({currentComponent: event.target.value})}}>
            <AutoCompleteWebApp labelText='Nome do Componente' hintText='Selecione um componente' 
            dataSource={states.components} fullWidth={true} ref="componentref"/>          
          </div>

          {buttonsComponent}
       </div>
    )

    const associateComponentEvent = (
        <div>
            <div onBlur={(event) => {this.setState({currentComponentEvent: event.target.value})}}>
              <AutoCompleteWebApp labelText='Nome do Evento' hintText='Selecione um evento' 
                dataSource={states.events} fullWidth={true} ref="eventref"/>          
            </div>

            <div>
              <Toggle label="Carregar Regras Pré Configuradas" labelStyle={{color: 'navy', fontSize: '18px'}} 
                 ref="gerarmantisref" style={{marginTop: '3%'}}
                 onToggle={(event, isInputChecked) => {this.setState({loadDefaultRulesForCurrentComponentEvent: isInputChecked})}}
                 />
            </div>
       
            {buttonsComponentEvent}
        </div>
    )

    const associateComponentEventRules = (
      <div>
        <Well bsSize="small">
          <h2>Resumo - Configuração de Componente</h2>

          <Divider />

          <br />

          <p><strong>Sistema: </strong>{this.state.currentSystem}</p>
          <p><strong>Tela: </strong>{this.state.currentScreen}</p>
          <p><strong>Componente: </strong>{this.state.currentComponent}</p>
          <strong>Regras: </strong>

          <br />

          <ul>
            {
              this.state.componentEventRules.map((item, key) => (
               <li key={key}>{item.name}</li>
              ))
            }
          </ul>
        </Well>
        
        {buttonsComponentEventRule}
      </div>
    )

    const populateComponentEventRules = (
        <div>
            <div onBlur={this.associateComponentEventRules.bind(this)}>
              <AutoCompleteWebApp labelText='Nome da Regra' hintText='Selecione uma regra' 
                dataSource={states.rules} fullWidth={true} ref="ruleref"/>          
            </div>

            <div style={{marginTop: '3%'}}>
              <ListGroup >
               {
                  this.state.componentEventRules.map((item, key) => (
                    <ListGroupItem bsStyle="info" header="Regra:" key={key} 
                      onClick={(event, key) => {this.state.componentEventRules.slice(key)}}>
                      {item.name}
                    </ListGroupItem>
                  ))
               }
              </ListGroup>
            </div>

            {buttonsComponentEventRule}
        </div>
    )

    const componentEventRuleSteps = (
      <div>
        <Panel header="Regras">
          <div>
              <Stepper activeStep={stepIndexComponentEventRule}>
                <Step>
                  <StepLabel>Instruções</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Selecionar Regra</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Associar Regra</StepLabel>
                </Step>
              </Stepper>

              <div style={contentStyle} >
                {finishedComponentEventRule ? (
                  componentEventRulesFinished
                  ) : (
                        <div style={contentStyle}>
                          {stepIndexComponentEventRule === 0 ? 
                            overviewComponentEventRule : stepIndexComponentEventRule === 1 ? populateComponentEventRules :
                              stepIndexComponentEventRule === 2 ? associateComponentEventRules : <div />
                          }
                        </div>
                )}
            </div>
          </div>
        </Panel>
      </div>
    )

    const componentEventSteps = (
      <div>
        <Panel header="Eventos">
          <div>
            <Stepper activeStep={stepIndexComponentEvent}>
              <Step>
                <StepLabel>Instruções</StepLabel>
              </Step>
              <Step>
                <StepLabel>Selecionar Evento</StepLabel>
              </Step>
              <Step>
                <StepLabel>Configurar Regras</StepLabel>
              </Step>
              <Step>
                <StepLabel>Associar Evento</StepLabel>
              </Step>
            </Stepper>

            <div style={contentStyle} >
              {finishedComponentEvent ? (
              <p >
                <a href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndexComponentEvent: 0, finishedComponentEvent: false});
                  }}
                >
                  Clique aqui
                </a> para adicionar associar mais componentes
              </p>
             ) : (
              <div style={contentStyle}>
                {stepIndexComponentEvent === 0 ? 
                  overviewComponentEvent : stepIndexComponentEvent === 1 ? associateComponentEvent : 
                  stepIndexComponentEvent === 2 ? componentEventRuleSteps : <div />
                }
              </div>
            )}
          </div>

            
          </div>
          </Panel>
      </div>
    )

    const componentSteps = (
      <div>
        <Panel header="Componentes">
          <div>
            <Stepper activeStep={stepIndexComponent}>
              <Step>
                <StepLabel>Selecionar Componente</StepLabel>
              </Step>
              <Step>
                <StepLabel>Configurar Eventos</StepLabel>
              </Step>
              <Step>
                <StepLabel>Configurar Atributos</StepLabel>
              </Step>
              <Step>
                <StepLabel>Associar Componente</StepLabel>
              </Step>
            </Stepper>

            <div style={contentStyle} >
              {finishedComponent ? (
              <p >
                <a href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndexComponent: 0, finishedComponent: false});
                  }}
                >
                  Clique aqui
                </a> para adicionar associar mais componentes
              </p>
             ) : (
              <div style={contentStyle}>
                {stepIndexComponent === 0 ? 
                      populateComponent : 
                        stepIndexComponent === 1 ?
                         componentEventSteps : <div />
                }
              </div>
            )}
          </div>

            
          </div>
          </Panel>
      </div>
    )

    const initSteps = (
      <div>
        <div>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Instruções</StepLabel>
            </Step>
            <Step>
              <StepLabel>Configurar Componentes</StepLabel>
            </Step>
            <Step>
              <StepLabel>Configurar Eventos</StepLabel>
            </Step>
             <Step>
              <StepLabel>Configurar Ações</StepLabel>
            </Step>
            <Step>
              <StepLabel>Gerar Caso</StepLabel>
            </Step>
          </Stepper>

          <div style={contentStyle} >
            {finished ? (
            <p >
              <a href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
           ) : (
            <div style={contentStyle}>
              {stepIndex === 0 ? 
                overviewComponent : 
                  stepIndex === 1 ? 
                    componentSteps : 
                      <div>Teste2</div>
              }
              
              </div>
            )}
          </div>
        </div>
      </div>
    )

     const view = (
        <div className={'screen-style'}>
           <Panel className="pnl">
            <div>
             <Header save={this.save.bind(this)} title="Geração de Caso de Teste" icon={<AvPlaylistAddCheck />}/>
            </div>
              {this.state.initialize === false ? infoSystemScreen : initSteps}
           </Panel> 
        </div>
      )

    return (
      states.currentPath === '/request/test' ? view : <div />
    );
  }
}

function currentPath(stateReducer) {
  return {
    states: stateReducer
  }
}

export default connect(currentPath, null) (RequestTest);
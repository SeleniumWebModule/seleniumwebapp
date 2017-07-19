import React from 'react';
import {Step, Stepper, StepLabel } from 'material-ui/Stepper';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import Header from '../../components/Header';
import {Panel, Accordion, Collapse, Well} from 'react-bootstrap';
import TableWebApp from '../../components/tables/TableWebApp';
import TableValuesAssociated from '../../components/tables/TableValuesAssociated';
import RaisedButton from 'material-ui/RaisedButton';
import AlertInfo from '../../components/AlertInfo'; 
import AutoCompleteWebApp from '../../components/AutoComplete';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import TableRule from '../../components/tables/TableRule';
import Toggle from 'material-ui/Toggle';
import '../../css/Screens.css';
import { connect } from 'react-redux';


class RequestTest extends React.Component {
 constructor() {
    super();
    this.state = ({
      system: '',
      screen: '',
      component: '',
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
      msgintrotest: "Para gerar o caso de teste é necessário fazer algumas associações. A associação com o componente é requerida " +
      "Comece associando os componentes com a tela, o sistema irá te acompanhar em cada etapa, clique em Próximo para continuar.",
      msgintrocomponent: "Os componentes serão associados com a tela, associe um ou mais componentes, você deverá informar no mínimo " +
      "um. Os componentes dependem de outras associações. O sistema irá te acompanhar em cada etapa.",
      msgintroevent: "Os eventos são os responsáveis por dispararem ações em um componente ou tela, cada evento deve ter uma ou mais " +
      "regras associadas. clique em Próximo para continuar.",
      msgintrorule: "As regras são responsáveis pelo comportamento esperado pelo componente, elas que irão validar a funcionalidade " + 
      " disparada pelo evento. ",
      finished: false,
      stepIndex: 0,
      stepIndexComponent: 0,
      finishedComponent: false,
      stepIndexEvent: 0,
      finishedEvent: false,
      stepIndexRule: 0,
      finishedRule: false,
      initialize: false
    })
  }

  associateComponentEventRules() {
    console.log("associateComponentEvent");
  }

  associateComponentAttribute(event) {
    const algo = {
      name: event.target.value
    }

    let attributes = this.state.componentAttributes;
    attributes.push(algo);

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

  handleNextEvent = () => {
    const {stepIndexEvent} = this.state;

    this.setState({
      stepIndexEvent: stepIndexEvent + 1,
      finishedEvent: stepIndexEvent >= 3,
    });
  };

  handleNextRule = () => {
    const {stepIndexRule} = this.state;

    this.setState({
      stepIndexRule: stepIndexRule + 1,
      finishedRule: stepIndexRule >= 4,
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

  handlePrevEvent = () => {
    const {stepIndexEvent} = this.state;
    if (stepIndexEvent > 0) {
      this.setState({stepIndexEvent: stepIndexEvent - 1});
    }
  };

  handlePrevRule = () => {
    const {stepIndexRule} = this.state;
    if (stepIndexRule > 0) {
      this.setState({stepIndexRule: stepIndexRule - 1});
    }
  };

  initializeTestCase = () => {
    if (this.state.system === ''){
      this.refs.systemref.showmsgerror("Um sistema deve ser informado.");
      return;
    }

    if (this.state.screen === ''){
      this.refs.screenref.showmsgerror("Uma tela deve ser informada.");
      return;
    }    

    const {initialize} = this.state;
    this.setState({
      initialize: true
    })
  }

  doAssociateRules = () => {
    console.log('For associate the rules with the component')
  }

  render() {
    const {states} = this.props;
    const {
            finished, 
            stepIndex, 
            stepIndexComponent, 
            finishedComponent,
            stepIndexEvent, 
            finishedEvent,
            stepIndexRule, 
            finishedRule,
          } = this.state;
    const contentStyle = {margin: '10px 16px'}; 

    const infoSystemScreen = (
       <div>
          <AlertInfo messageBody={this.state.msgintro} ref="msgintroref"/>

          <div onFocus={() => {this.refs.msgintroref.hideMessage()}}
            onBlur={(event) => {this.setState({system: event.target.value})}}>
            <AutoCompleteWebApp labelText='Nome do Sistema' hintText='Selecione um sistema' dataSource={states.systems} 
              fullWidth={true} ref="systemref"/>          
          </div>

          <div onFocus={() => {this.refs.msgintroref.hideMessage()}}
            onBlur={(event) => {this.setState({screen: event.target.value})}}>
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

    const buttonsEvent = (
      <div style={{marginTop: 40, float: 'right'}}>
        <FlatButton
          label="Anterior"
          disabled={stepIndexEvent === 0}
          onTouchTap={this.handlePrevEvent}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={stepIndexEvent === 4 ? 'Associar Evento' : 'Próximo'}
          primary={true}
          onTouchTap={this.handleNextEvent}
        />
      </div>
    )

    const buttonsRule = (
      <div style={{marginTop: 40, float: 'right'}}>
        <FlatButton
          label="Anterior"
          disabled={stepIndexRule === 0}
          onTouchTap={this.handlePrevRule}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label={stepIndexRule === 4 ? 'Associar Regra' : 'Próximo'}
          primary={true}
          onTouchTap={this.handleNextRule}
        />
      </div>
    )

    const overviewTest = (
      <div>
        <AlertInfo messageBody={this.state.msgintrotest} />

        {buttons}
      </div>
    )

    const overviewComponent = (
      <div>
        <AlertInfo messageBody={this.state.msgintrocomponent} />
        {buttonsComponent}
      </div>
    )

    const overviewEvent = (
      <div>
        <AlertInfo messageBody={this.state.msgintroevent} />
        {buttonsEvent}
      </div>
    )

    const overviewRule = (
      <div>
        <AlertInfo messageBody={this.state.msgintrorule} />
        {buttonsRule}
      </div>
    )

    const populateComponent = (
       <div>
          <div onBlur={(event) => {this.setState({component: event.target.value})}}>
            <AutoCompleteWebApp labelText='Nome do Componente' hintText='Selecione um componente' 
            dataSource={states.components} fullWidth={true} ref="componentref"/>          
          </div>

          {buttonsComponent}
       </div>
    )

    const associateEvent = (
        <div>
            <div onBlur={(event) => {this.setState({currentEvent: event.target.value})}}>
              <AutoCompleteWebApp labelText='Nome do Evento' hintText='Selecione um evento' 
                dataSource={states.events} fullWidth={true} ref="eventref"/>          
            </div>

            <div>
              <Toggle label="Carregar Regras Pré Configuradas" labelStyle={{color: 'navy', fontSize: '18px'}} 
                 ref="gerarmantisref" style={{marginTop: '3%'}}
                 onToggle={(event, isInputChecked) => {this.setState({loadDefaultRulesForCurrentEvent: isInputChecked})}}
                 />
            </div>
       
            {buttonsEvent}
        </div>
    )

    const associateRule = (
        <div>
            <div onBlur={(event) => {this.setState({currentRule: event.target.value})}}>
              <AutoCompleteWebApp labelText='Nome da Regra' hintText='Selecione uma regra' 
                dataSource={states.rules} fullWidth={true} ref="ruleref"/>          
            </div>

            <RaisedButton
              style={{float:'right', marginTop: '2%'}}
              label="Associar Regra"
              icon={<ActionNoteAdd />}
              primary={true}
              onTouchTap={this.doAssociateRules}
            />
        </div>
    )

    const ruleSteps = (
      <div>
        <Panel header="Regras">
          <div>
              <Stepper activeStep={stepIndexRule}>
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
                {finishedRule ? (
                <p >
                  <a href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({stepIndexRule: 0, finishedRule: false});
                    }}
                  >
                    Clique aqui
                  </a> para adicionar associar mais componentes
                </p>
               ) : (
                <div style={contentStyle}>
                  {stepIndexRule === 0 ? 
                    overviewRule : stepIndexRule === 1 ? associateRule :
                      <div />           
                  }
                </div>
              )}
            </div>
          </div>
        </Panel>
      </div>
    )

    const eventSteps = (
      <div>
        <Panel header="Eventos">
          <Collapse in={this.state.currentEvent !== ''}>
            <div>
               <Well bsSize="small"><strong>Evento Selecionado: </strong>{this.state.currentEvent}</Well>
            </div>
          </Collapse>
          <div>
            <Stepper activeStep={stepIndexEvent}>
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
              {finishedEvent ? (
              <p >
                <a href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndexEvent: 0, finishedEvent: false});
                  }}
                >
                  Clique aqui
                </a> para adicionar associar mais componentes
              </p>
             ) : (
              <div style={contentStyle}>
                {stepIndexEvent === 0 ? 
                  overviewEvent : stepIndexEvent === 1 ? associateEvent : 
                  stepIndexEvent === 2 ? ruleSteps : <div />
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
          <Collapse in={this.state.component !== ''}>
            <div>
               <Well bsSize="small"><strong>Componente Selecionado: </strong>{this.state.component}</Well>
            </div>
          </Collapse>

          <div>
            <Stepper activeStep={stepIndexComponent}>
              <Step>
                <StepLabel>Instruções</StepLabel>
              </Step>
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
                  overviewComponent : 
                    stepIndexComponent === 1 ? 
                      populateComponent : 
                        stepIndexComponent === 2 ?
                         eventSteps : <div />
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
        <div style={{float:'left', marginRight: '4%'}}>
          <TextField disabled={true} defaultValue={this.state.system} floatingLabelText="Sistema" />
        </div>
        <div>
          <TextField disabled={true} defaultValue={this.state.screen} floatingLabelText="Tela" />
        </div>
        
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
                overviewTest : 
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